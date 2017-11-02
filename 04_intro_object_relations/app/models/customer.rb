class Customer
  attr_accessor :name, :email, :phone

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

  def accounts
    @accounts
  end

  def add_savings_account(pin, balance = 0)
    @accounts << SavingsAccount.new(self, pin, balance)
  end
end
