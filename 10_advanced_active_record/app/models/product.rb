class Product < ActiveRecord::Base
  # table name: products
  # id, name, brand

  # a product has_many order_items
  has_many :order_items, foreign_key: 'item_id'

  # a product has_many related_orders, through order_items
  has_many :related_orders, through: :order_items, source: 'order'

  # a product has_many purchasing_customers
  has_many :purchasing_customers, through: :related_orders, source: 'customer'

end
