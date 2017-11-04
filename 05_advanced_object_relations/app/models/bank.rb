class Bank
  # RELATIONSHIPS
  # has_many
  #   customers
  #   accounts, through customers
  #   branches
  #   cities, through branches

  attr_reader :name

  def initialize(name)
    @name = name
  end

  def add_customer(customer)
    customer.bank = self
    customer
  end

  def add_branch(city)
    Branch.new(self, city)
  end

  def branches
    Branch.all.select do |branch|
      branch.bank == self
    end
  end

  def cities
    self.branches.map do |branch|
      branch.city
    end.uniq
  end

  def customers
    Customer.all.select do |customer|
      customer.bank == self
    end
  end

  def accounts
    BankAccount.all.select do |account|
      account.customer.bank == self
    end
  end
end
