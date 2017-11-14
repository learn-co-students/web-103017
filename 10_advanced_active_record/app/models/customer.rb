class Customer < ActiveRecord::Base
  # table name: customers
  # id, name, address
  # self.table_name = :customers



  has_many :orders, class_name: 'Order'
  # 1) defining a method 'orders' on an instance of this class
  # 2) when that method is called, it's going to look for uppercase singular class name (Order)
  # 3) infer the table name for that class (orders)
  # 4) create a SQL query that joins THIS table with the orders table


  # a customer has_many purchases             # list of all orders
  has_many :purchases, class_name: 'Order'

  # a customer has_many pending orders        # subsets of orders where status = pending
  has_many :pending_purchases, -> { where(status: 'pending') }, class_name: 'Order'
  # def pending_orders
  #   self.purchases.where(status: 'pending')
  # end

  # a customer has_many shipments             # subsets of orders where status = shipped
  has_many :shipped_purchases, -> { where(status: 'shipped') }, class_name: 'Order'

  # a customer has_many purchased items       # through order
  has_many(:purchased_items, {through: :purchases, source: 'items'})

  # a customer has_many top purchased brands  # aggregation
end
