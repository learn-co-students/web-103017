class Customer < ActiveRecord::Base
  # table name: customers
  # id, name, address

  # a customer has_many purchases             # list of all orders
  # a customer has_many pending orders        # subsets of orders where status = pending
  # a customer has_many shipments             # subsets of orders where status = shipped
  # a customer has_many purchased items       # through order
  # a customer has_many top purchased brands  # aggregation
end
