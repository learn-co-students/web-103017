class Order < ActiveRecord::Base
  # table name: purchases
  # id, date, discount(0..1), status[pending, confirmed, shipped]

  # an order belongs_to a customer
  # an order has_many order items
  # an order has_many items
end
