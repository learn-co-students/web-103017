class AddPasswordToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :password, :string
  end
end
