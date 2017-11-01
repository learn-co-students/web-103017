class BankAccount
  # Macro > code that writes code

  # bank_account.account_number
  attr_reader :account_number

  # bank_account.pin = 1234
  attr_writer :pin

  # bank_account.name = "Tim"
  # bank_account.name
  attr_accessor :name

  @@account_number = 1

  # BankAccount.new("Tim", 1234, 50)
  def initialize(name, pin, balance = 0)
    # keep track of my name, pin, and balance
    @name = name
    @pin = pin
    @balance = balance

    # add an account number to the account
    @account_number = @@account_number
    @@account_number += 1
  end

  # bank_account.deposit(100)
  def deposit(amount)
    @balance += amount
  end

  # bank_account.withdraw(100)
  def withdraw(amount)
    new_balance = @balance - amount

    if new_balance < 0
      raise "You don't have enough money."
    else
      @balance = new_balance
    end
  end

  # # SETTERS
  # # bank_account.set_pin(1234)
  # # bank_account.pin = 1234
  # def pin=(new_pin)
  #   @pin = new_pin
  # end
  #
  # # bank_account.set_name("Timo")
  # # bank_account.name = "Timo"
  # def name=(new_name)
  #   @name = new_name
  # end
  #
  # # GETTERS
  # # bank_account.get_account_number
  # # bank_account.account_number (traditional)
  # def account_number
  #   @account_number
  # end
  #
  # # bank_account.get_name
  # # bank_account.name
  # def name
  #   @name
  # end

end

my_account = BankAccount.new("Tim", 1234, 50)
your_account = BankAccount.new("Meryl", 5678)

# my_account = {}
# your_account = {}
#
# def set_balance(bank_account, balance)
#   # changing some data that's not created in the scope of this function
#   bank_account[:balance] = balance
# end
#
# def get_balance(bank_account)
#   bank_account[:balance]
# end
#
# def set_pin(bank_account, pin)
#   bank_account[:pin] = pin
# end
#
# def get_pin(bank_account)
#   bank_account[:pin]
# end
#
# def set_account_number(bank_account, account_number)
#   bank_account[:account_number] = account_number
# end
#
# def get_account_number(bank_account)
#   bank_account[:account_number]
# end
#
# def set_name(bank_account, name)
#   bank_account[:name] = name
# end
#
# def get_name(bank_account)
#   bank_account[:name]
# end
#
# def print_balance(bank_account)
#   balance = get_balance(bank_account)
#   puts "You have $#{balance}.00 in your account"
# end
