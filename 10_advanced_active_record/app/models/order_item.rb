class OrderItem < ActiveRecord::Base
  # table name: purchase_items
  self.table_name = :purchase_items
  
  # id, order_id, item_id, quantity(non-negative number)

  # an order item belongs_to order
  belongs_to :order

  # an order item belongs_to product
  belongs_to :item, class_name: 'Product'
end
