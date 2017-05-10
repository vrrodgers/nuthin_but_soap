class RemoveColumnFromOrders < ActiveRecord::Migration[5.0]
  def change
    remove_column :orders, :shipping_name, :string
    remove_column :orders, :billing_name, :string
    remove_column :orders, :index, :string
    remove_column :orders, :show, :string
    remove_column :orders, :new, :string
    add_column :orders, :user_id, :integer
    add_column :orders, :subtotal, :decimal
    add_column :orders, :tax, :decimal
    add_column :orders, :total, :decimal
    add_column :orders, :status, :string
   
  end
end
