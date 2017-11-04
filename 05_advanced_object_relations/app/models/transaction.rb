class Transaction
  # RELATIONSHIPS
  # belongs to
  #   bank account

  # COMPOSITION
  # Transaction has a relationship with Helpers::Alertable through "composition".
  # Composition is a relationship where we can use the phrase "is part of" (for example,
  # Alertable is part of Transaction). In order to compose classes/modules, we use the
  # keywords/methods `extend` and `include`.

  # `extend` allows us to import methods from a module as class methods. `include` allows
  # us to import methods from a module as instance methods. In this example, we are importing
  # the methods defined in Helpers::Alertable as instance methods for a Transaction instance.

  include Helpers::Alertable

  attr_reader :account, :amount, :memo, :balance

  @@all = []
  @@id = 0

  def initialize(account, amount, memo = DateTime.now)
    @account = account
    @balance = account.balance # updated account balance
    @amount = amount
    @memo = memo

    @id = @@id
    @@id += 1

    @@all << self

    # this method is defined in Helpers::Alertable
    self.puts_balance_update_success(@amount, @memo)
  end

  def customer
    self.account.customer
  end

  def bank
    self.account.customer.bank
  end

  def self.all
    @@all
  end
end
