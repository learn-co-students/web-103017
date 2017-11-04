class Customer
  # RELATIONSHIPS
  #   has many
  #     accounts
  #   belongs to
  #     bank

  attr_accessor :name, :email, :phone, :bank

  @@all = []

  def initialize(name, email = '', phone = '', bank = nil)
    @bank = bank
    @name = name
    @email = email
    @phone = phone

    @@all << self
  end

  def accounts
    BankAccount.all.select do |account|
      account.customer == self
    end
  end

  def add_savings_account(pin, balance = 0)
    if !self.bank
      raise "You don't have a bank"
    end

    SavingsAccount.new(self, pin, balance)
  end

  def add_checking_account(pin, balance = 0)
    if !self.bank
      raise "You don't have a bank"
    end

    CheckingAccount.new(self, pin, balance)
  end

  def self.all
    @@all
  end
end
