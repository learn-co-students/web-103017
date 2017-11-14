class AddCustomerIdColumnToOrders < ActiveRecord::Migration[5.1]
  def change
    # how do I add a column?
    add_column :purchases, :customer_id, :integer
  end
end
