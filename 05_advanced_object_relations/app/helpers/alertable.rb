module Alertable
  # thank the customer and show the new balance
  def alert_balance
    puts self # a subclass of BankAccount
    puts "Thank you, #{self.customer.name}. Your balance is now $#{self.balance}.00"
  end

end
