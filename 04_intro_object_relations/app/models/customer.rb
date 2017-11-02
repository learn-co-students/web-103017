class Customer
  attr_accessor :name, :email, :phone

  def initialize(name, email = '', phone = '')
    @name = name
    @email = email
    @phone = phone
  end

  def accounts
    # What are all my accounts?
  end
end
