module Helpers
  # COMPOSITION
  # This module is created as an example of the "composition" relationship in
  # object-oriented programming (OOP). Composition describes code that will be
  # included in many other classes. In this example, "Alertable" describes the
  # capability of another class to send an alert to a user.

  # See app/models/transaction to see the other half of the composition relationship.


  # MODULES (SHARING CODE & NAMESPACING)
  # Modules are usually built out of a logical grouping of functions. Modules
  # can also be used for namespacing (where modules and classes are nested within
  # each other). As programmers and designers, this helps us to keep our code
  # organized in a logical way. You can imagine another module also
  # being defined inside of this "Helpers" module.

  module Alertable
    def puts_balance_update_failure(amount, memo)
      action = amount > 0 ? "deposit" : "withdrawal"

      puts "\nThank you for using #{self.customer.bank.name}, #{self.customer.name}!\n"
      puts "There was an error with your #{action}:".red
      puts "\t#{memo}\n"
    end

    def puts_balance_update_success(amount, memo)
      action = amount > 0 ? "deposited" : "withdrew"

      puts "\nThank you for using #{self.customer.bank.name}, #{self.customer.name}!\n"
      puts "You #{action} $#{amount.abs}.00 from your #{self.account.type.capitalize} Account ##{self.account.account_number}".green
      puts "\t#{memo}\n"
      puts "Your balance is now $#{self.balance}.00\n"
    end

    def email_balance_update
      # Here we would write a method that emails a user their balance update.
    end

    def text_balance_update
      # Here we would write a method that emails a user their balance update
    end
  end
end
