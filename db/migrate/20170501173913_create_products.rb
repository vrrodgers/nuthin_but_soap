class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
       t.string :image
       t.string :name
       t.text :description
       t.integer :price
       t.integer :catagory_id
       t.integer :inventory
      t.timestamps
    end
  end
end
