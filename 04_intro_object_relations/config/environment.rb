require 'pry'

require_relative '../app/models/transaction'
require_relative '../app/models/bank_account'
require_relative '../app/models/checking_account'
require_relative '../app/models/savings_account'
require_relative '../app/models/customer'

tim = Customer.new('tim', 'tim@bank.com', '555-123-4567')
tim.add_savings_account(1234, 200)
tim.accounts # 1 account: [savings account]
tim.add_checking_account(5678)
tim.accounts # 2 accounts: [savings account, checking account]
savings_account = tim.accounts.first
savings_account.deposit(200)
savings_account.deposit(300)
savings_account.withdraw(100)
savings_account.balance # 700
savings_account.transactions # 2 transactions: [+200, +200, -100]

Pry.start
