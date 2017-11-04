class BankAccount
  # RELATIONSHIPS
  # has many
  #   transactions
  # belongs to
  #   customer
  include Helpers::Alertable

  attr_accessor :account_number, :customer, :pin, :balance

  @@account_number = 1
  @@all = []

  def initialize(customer, pin, balance = 0)
    @customer = customer
    @pin = pin
    @balance = balance

    @account_number = @@account_number
    @@account_number += 1
    @@all << self
  end

  def deposit(amount)
    self.balance += amount
    Transaction.new(self, amount)
  end

  def withdraw(amount)
    new_balance = self.balance - amount
    real_amount = -1 * amount

    if new_balance < 0
      puts_balance_update_failure(real_amount, "You don't have enough money.")
    else
      @balance = new_balance
      Transaction.new(self, real_amount)
    end
  end

  def transactions
    Transaction.all.select do |transaction|
      transaction.account == self
    end
  end

  def type
    self.class::TYPE
  end

  def self.all
    @@all
  end
end
