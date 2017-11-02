class BankAccount
  attr_reader :account_number
  attr_writer :pin
  attr_accessor :name

  @@account_number = 1

  def initialize(name, pin, balance = 0)
    @name = name
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

class CheckingAccount < BankAccount
  # This class has all the same methods as BankAccount
end

class SavingsAccount < BankAccount
  # This class has all the same methods as BankAccount

  def initialize(name, pin, balance = 0)
    @withdrawals = 0
    # bank_account.initialize(name, pin, balance)
    super # can call with or without args
  end

  def withdraw(amount)
    # super
    # @withdrawals ||= 0 # FIX! number of withdrawals
    # @withdrawals = @withdrawals || 0

    if @withdrawals > 6
      raise "Too many withdrawals"
    else
      super
    end
  end
end
