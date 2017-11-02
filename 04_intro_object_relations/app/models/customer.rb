class Customer
  attr_accessor :name, :email, :phone
  attr_reader :accounts

  # Class instance variable
  # Describes variables for this (version of this) class ONLY
  # @accounts = []

  def initialize(name, email = '', phone = '')
    @name = name
    @email = email
    @phone = phone

    # Customer has many accounts
    @accounts = []
  end

  def add_savings_account(pin, balance = 0)
    @accounts << SavingsAccount.new(self, pin, balance)
  end

  def add_checking_account(pin, balance = 0)
    @accounts << CheckingAccount.new(self, pin, balance)
  end
end
