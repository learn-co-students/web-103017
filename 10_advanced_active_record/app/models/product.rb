class Product < ActiveRecord::Base
  # table name: products
  # id, name, brand

  # a product has_many order_items
  # a product has_many related_orders, through order_items
  # a product has_many purchasing_customers
end
