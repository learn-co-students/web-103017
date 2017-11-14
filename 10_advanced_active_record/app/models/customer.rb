class Customer < ActiveRecord::Base
  # table name: customers
  # id, name, address

  # a customer has_many purchases
  # a customer has_many pending orders
  # a customer has_many shipments
  # a customer has_many purchased items
  # a customer has_many top purchased brands
end
