class CreateCritics < ActiveRecord::Migration[5.1]
  def change
    create_table :critics do |t|
      t.string :name

      t.timestamps
    end
  end
end
