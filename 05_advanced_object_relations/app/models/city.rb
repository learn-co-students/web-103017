class City
  # has many (bank) branches
  # has many banks, through branches

  # name

  attr_reader :name

  def initialize(name)
    @name = name
  end

  # bank = Bank.new
  # city.add_branch(bank)
  def add_branch(bank)
    Branch.new(bank, self)
  end

  def branches
    # iterate through all ask if city == self
  end
end
