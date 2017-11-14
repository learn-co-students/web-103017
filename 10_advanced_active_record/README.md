# Advanced ActiveRecord

* Specifying a different table name than the class name
* Validating field values from ActiveRecord
* Creating custom associations (yesterday)

```ruby
class Product < ActiveRecord::Base
  # table name: products
  # id, name, brand

  # a product has_many order_items
  has_many :order_items, foreign_key: 'item_id'

  # a product has_many related_orders, through order_items
  has_many :related_orders, through: :order_items, source: "order"

  # a product has_many purchasing_customers
  has_many :purchasing_customers, through: :related_orders, source: "customer"
end
```

```ruby
class Customer < ActiveRecord::Base
  # table name: customers
  # id, name, address

  # a customer has_many purchases # list of all orders
  has_many :purchases, class_name: "Order"

  # a customer has_many pending orders        # subsets of orders where status = pending
  has_many :pending_orders, -> { where(status: 'pending') }, class_name: "Order"

  # a customer has_many shipments             # subsets of orders where status = shipped
  has_many :shipments, -> { where(status: 'shipped') }, class_name: "Order"

  # a customer has_many purchased items       # through order
  has_many :purchased_items, through: :purchases, source: 'items'

  # a customer has_many top purchased brands  # aggregation
  has_many :top_purchased_brands, -> { group(:brand).order(:brand) }, through: :purchased_items
end
```
