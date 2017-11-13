class AddCaloriesColumn < ActiveRecord::Migration[5.1]
  def change
    add_column :desserts, :calories, :integer

    # Dessert.all #...
    # write the code to keep track of previous "calorie" values
    # and then here, would map them to my old records

    remove_column :desserts, :calorie
  end
end
