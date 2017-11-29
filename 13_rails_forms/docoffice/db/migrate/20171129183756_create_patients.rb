class CreatePatients < ActiveRecord::Migration[5.1]
  def change
    create_table :patients do |t|
      t.string :name
      t.belongs_to :doctor, foreign_key: true

      t.timestamps
    end
  end
end
