class CreateCartedProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :carted_products do |t|
      t.integer :product_id, limit: 4
      t.integer  :order_id, limit: 4
      t.integer :quantity, limit: 4
      t.timestamps
    end  
  end
end
