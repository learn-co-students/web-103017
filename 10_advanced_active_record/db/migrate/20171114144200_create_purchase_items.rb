class CreatePurchaseItems < ActiveRecord::Migration[5.1]
  def change
    create_table :purchase_items do |t|
      t.integer :order_id
      t.integer :item_id
      t.integer :quantity
    end
  end
end
