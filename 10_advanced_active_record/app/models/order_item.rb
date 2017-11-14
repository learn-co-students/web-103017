class OrderItem < ActiveRecord::Base
  # table name: purchase_items
  # id, order_id, item_id, quantity(non-negative number)

  # an order item belongs_to order
  # an order item belongs_to product
end
