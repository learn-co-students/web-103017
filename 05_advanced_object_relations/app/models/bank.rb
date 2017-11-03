class Bank
  # has many customers
  # has many branches
  # has many cities, through branches

  # @customers
  # name

  attr_reader :name
  attr_accessor :customers

  def initialize(name)
    @name = name
    @customers = []
  end

  def add_branch(city)
    Branch.new(self, city)
  end

  def branches

  end
end
