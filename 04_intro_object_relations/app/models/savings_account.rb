require_relative 'bank_account'

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
      @withdrawals += 1
    end
  end
end
