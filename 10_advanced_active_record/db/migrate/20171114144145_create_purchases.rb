class CreatePurchases < ActiveRecord::Migration[5.1]
  def change
    create_table :purchases do |t|
      t.float :discount
      t.string :status

      t.timestamps
    end
  end
end
