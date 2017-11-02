class BankAccount
  attr_reader :account_number
  attr_writer :pin
  attr_accessor :customer

  @@account_number = 1

  def initialize(customer, pin, balance = 0)
    @customer = customer
    @pin = pin
    @balance = balance

    @account_number = @@account_number
    @@account_number += 1
  end

  def deposit(amount)
    @balance += amount
  end

  def withdraw(amount)
    new_balance = @balance - amount

    if new_balance < 0
      raise "You don't have enough money."
    else
      @balance = new_balance
    end
  end
end
