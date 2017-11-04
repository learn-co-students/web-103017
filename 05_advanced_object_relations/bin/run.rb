require_relative '../config/environment'

# PSEUDO TESTS
# Bank operations: opening branches
city1 = City.new('san antonio')
city2 = City.new('nyc')
bank = Bank.new('usaa')
branch1 = bank.add_branch(city1)
branch2 = bank.add_branch(city2)
branch3 = bank.add_branch(city2)
puts bank.branches.size == 3
puts bank.cities.size == 2

# Bank operations: signing up customers
tim = Customer.new('tim', 'tim@bank.com', '555-123-4567')
meryl = Customer.new('meryl', 'meryl@bank.com', '555-124-7890')
customer_tim = bank.add_customer(tim)
customer_meryl = bank.add_customer(meryl)
puts bank.customers.size == 2

# Customer operations: adding an account
tim_savings = customer_tim.add_savings_account(1234, 500)
tim_checking = customer_tim.add_checking_account(1234)
meryl_savings = customer_meryl.add_savings_account(5678, 850)
puts customer_tim.accounts.size == 2
puts customer_tim.accounts.all? { |account| account.class.superclass == BankAccount }
puts customer_tim.accounts[0].class == SavingsAccount
puts customer_tim.accounts[1].class == CheckingAccount
puts customer_meryl.accounts.size == 1
puts customer_meryl.accounts.all? { |account| account.class.superclass == BankAccount }

# Customer operations: depositing and withdrawing money
tim_savings.deposit(200)
tim_savings.balance == 700 # should print out message
tim_savings.withdraw(800) #=> prints error
6.times do
  tim_savings.withdraw(100)
end
tim_savings.withdraw(100) #=> prints error
tim_savings.balance == 100
tim_savings.transactions.length == 7
tim_checking.withdraw(1) #=> prints error

Pry.start
