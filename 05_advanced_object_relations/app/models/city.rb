class City
  # has many (bank) branches
  # has many banks, through branches

  attr_reader :name

  # nyc = City.new('nyc')
  def initialize(name)
    @name = name
  end

  def branches
    Branch.all.select do |branch|
      branch.city == self
    end
    # get Branch
    # go through all class variable
    # select cities
  end
end
