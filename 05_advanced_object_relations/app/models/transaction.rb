class Transaction
  attr_reader :amount, :memo, :balance

  @@id = 0

  def initialize(account, amount, memo = DateTime.now)
    @id = @@id
    @@id += 1

    @account = account
    @balance = account.balance # updated account balance
    @amount = amount
    @memo = memo
  end

  def customer
    @account.customer
  end
end
