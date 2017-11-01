# PROCEDURAL PROGRAMMING
#
# Procedural programming is the kind of programming that we typically
# learn from day 1. It's the style where we create variables and methods
# in the same scope and use them interchangeably.
#
# Our code also isn't organized in any particular way. At some point,
# we get what we call 'spaghetti code' which is messy and has a lot of
# loose ends if we don't have any techniques to manage organization.

my_name = "Tim"
is_instructor = true
age = 100

def hello(name, is_instructor, age)
  "Hello, #{name}" #...
end

# function / procedure / method / message
# message is the function name PLUS its arguments
# messages need a receiver
hello(x)
# self.hello(my_name, is_instrctor?, age)

class Person

  # lifecycle method
  def initialize(name, is_instrctor, age)
    @name = name
    @is_instrctor = is_instrctor
    @age = age
  end

  def greet
    "Hello #{@name}"
  end

end

tim = Person.new(my_name, is_instrctor, age)
# When we call Person.new
  # A new object is created
  # That object is assigned to the Person class
  # That object calls its initialize method
  # That object is returned






my_account = {}
your_account = {}

def set_balance(bank_account, balance)
  # changing some data that's not created in the scope of this function
  bank_account[:balance] = balance
end

def get_balance(bank_account)
  bank_account[:balance]
end

def set_pin(bank_account, pin)
  bank_account[:pin] = pin
end

def get_pin(bank_account)
  bank_account[:pin]
end

def set_account_number(bank_account, account_number)
  bank_account[:account_number] = account_number
end

def get_account_number(bank_account)
  bank_account[:account_number]
end

def set_name(bank_account, name)
  bank_account[:name] = name
end

def get_name(bank_account)
  bank_account[:name]
end

def print_balance(bank_account)
  balance = get_balance(bank_account)
  puts "You have $#{balance}.00 in your account"
end
