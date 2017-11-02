class Transaction
  # actions that affect my balance
  attr_reader :amount, :memo, :balance

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
    @balance = account.balance # updated account balance
    @amount = amount
    @memo = memo
  end

  def customer
    @account.customer
  end
end
