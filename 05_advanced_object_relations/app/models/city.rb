class City
  # RELATIONSHIPS
  #   has many branches
  #   has many banks, through branches

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def branches
    Branch.all.select do |branch|
      branch.city == self
    end
  end

  def banks
    self.branches.map do |branch|
      branch.bank
    end.uniq
  end
end
