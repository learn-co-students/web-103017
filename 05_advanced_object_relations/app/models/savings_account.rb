class SavingsAccount < BankAccount
  TYPE = 'savings'
  
  def initialize(name, pin, balance = 0)
    @withdrawals = 0
    super
  end

  def withdraw(amount)
    if @withdrawals > 6
      puts_balance_update_failure(-1 * amount, "Too many withdrawals")
    else
      super
      @withdrawals += 1
    end
  end
end
