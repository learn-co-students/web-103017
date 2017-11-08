class GenericModel

  # create a table
  # drop the table

  attr_reader :id

  # inside of here, we'll move our more generic code
  def initialize(attributes)
    @id = nil
    self.send(:mass_assign_attributes, attributes)
  end

  def save
    self.id.nil? ? self.send(:insert_record) : self.send(:update_record)
  end

  def update(attributes)
    self.send(:mass_assign_attributes, attributes)
    self.save
  end

  def delete
    self.send(:delete_record)
  end

  def self.create(attributes)
    new_instance = self.new(attributes)
    new_instance.save
  end

  def self.table_name
    self.to_s.downcase + "s"
  end

  def self.all
    rows = DB[:conn].execute("SELECT * FROM #{self.table_name}")
    # we need to create instances
    rows.map do |row|
      self.send(:new_from_row, row)
    end
  end

  def self.find(id)
    row = DB[:conn].execute("SELECT * FROM #{self.table_name} WHERE id = ?", id)[0]
    if row
      self.send(:new_from_row, row)
    end
  end

  def self.find_by(attributes)
    conditions = conditions_from_hash(attributes, " AND ")
    values = attributes.values
    sql = <<-SQL
      SELECT * from #{self.table_name}
      WHERE #{conditions}
    SQL
    row = DB[:conn].execute(sql, *values)[0]
    if row
      self.send(:new_from_row, row)
    end
  end

  def self.delete(id)
    instance = self.find(id)
    instance.delete
  end

  def self.column_names
    # table_name = "stations"
    sql = "PRAGMA table_info('#{self.table_name}')"

    cols = DB[:conn].execute(sql).map do |hsh|
      hsh["name"]
    end
    cols.delete("id")
    cols
  end

  def self.inherited(childclass)
    binding.pry

    childclass.column_names.each do |name|
      attr_accessor name.to_sym
    end
  end

  private

  def mass_assign_attributes(attributes)
    attributes.each do |k, v|
      setter_method = "#{k}="
      if self.respond_to?(setter_method)
        self.send(setter_method, v)
      end
    end
  end

  def insert_record
    column_names = self.class.column_names.join(", ")
    values = self.class.column_names.map { |name| self.send(name.to_sym) }
    question_marks = values.map { |name| "?" }.join(", ")

    sql = <<-ANYTHING
      INSERT INTO #{self.class.table_name} (#{column_names})
      VALUES (#{question_marks})
    ANYTHING


    DB[:conn].execute(sql, *values)
    @id = DB[:conn].execute("SELECT last_insert_rowid() FROM #{self.class.table_name}")[0][0]
    self
  end

  def update_record
    values = self.class.column_names.map { |name| self.send(name.to_sym) }
    columns_and_values = self.class.column_names.zip(values)
    attributes = Hash[conditions]
    conditions = self.class.conditions_from_hash(attributes)

    sql = <<-SQL
      UPDATE #{self.table_name}
      SET name = #{conditions}
      WHERE id = ?
    SQL

    DB[:conn].execute(sql, *values, self.id)
    self
  end

  def delete_record
    sql = <<-SQL
      DELETE FROM stations
      WHERE id = ?
    SQL

    DB[:conn].execute(sql, self.id)
    @id = nil
    self
  end

  def self.new_from_row(row)
    station = self.new(row)
    station.instance_variable_set(:@id, row["id"])
    station
  end

  def self.conditions_from_hash(attributes, delimeter)
    # "name = 'Tim' AND age = '40'"
    attributes.inject([]) do |acc, (k,v)|
      acc.push("#{k} = ?")
    end.join(delimeter)
  end
end
