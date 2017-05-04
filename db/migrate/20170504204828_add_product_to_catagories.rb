class AddProductToCatagories < ActiveRecord::Migration[5.0]
  def change
    add_column :catagories, :product_id, :integer
    remove_column :products, :catagory_id, :integer
  end
end
