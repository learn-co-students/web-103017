class Order < ActiveRecord::Base
  # How do we declare a different table name than the class name?
  # table name: purchases

  self.table_name = :purchases
  # id, date, discount(0..1), status[pending, confirmed, shipped]

  # an order belongs_to a customer
  # looks for customer_id column on orders table
  belongs_to :customer

  # an order has_many order items
  has_many :order_items

  # an order has_many items (through order items)
  # order.items << p1
  # when do i create the order_item instance for that rel?
  has_many :items, through: :order_items, class_name: 'Product'
  
  # has_many :items, :through => :order_items, :class_name => 'Product'
end
