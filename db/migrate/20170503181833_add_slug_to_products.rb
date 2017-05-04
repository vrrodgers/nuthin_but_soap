class AddSlugToProducts < ActiveRecord::Migration[5.0]
  def change
    add_column :products, :slug, :string
    add_index :products, :slug, unique: true
    add_column :catagories, :slug, :string
    add_index :catagories, :slug, unique: true
  end
end
