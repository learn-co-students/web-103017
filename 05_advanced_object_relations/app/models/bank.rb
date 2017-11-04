class Bank
  # has many customers
  # has many branches
  # has many cities, through branches

  # @customers
  # name

  attr_reader :name

  # Bank.new("usaa")
  def initialize(name)
    @name = name
    @customers = []
  end

  # tim = Customer.new(...)
  # usaa.add_customer(tim)
  def add_customer(customer)
    @customers << customer
  end

  def branches
    Branch.all.select do |branch|
      branch.bank == self
    end
  end
end
