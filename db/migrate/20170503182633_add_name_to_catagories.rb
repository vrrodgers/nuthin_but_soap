class AddNameToCatagories < ActiveRecord::Migration[5.0]
  def change
    add_column :catagories, :name, :string
  end
end
