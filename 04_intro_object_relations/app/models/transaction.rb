class Transaction
  attr_reader :amount, :memo, :balance
  # actions that affect my balance

  # EACH TRANSACTION
  # belongs to a bank account (reference to ...)
    # customer
  # amount (positive or negative)
  # memo (what it's for)
  # updated balance
  # id

  # SOMEWHERE ELSE
  # history of transactions for one account
  @@id = 0

  def initialize(account, amount, memo = DateTime.now)
    @id = @@id
    @@id += 1

    @account = account
    @amount = amount
    @memo = memo
    @balance = account.balance
  end

  def customer
    @account.customer
  end
end
