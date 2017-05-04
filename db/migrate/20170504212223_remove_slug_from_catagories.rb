class RemoveSlugFromCatagories < ActiveRecord::Migration[5.0]
  def change
    remove_column :catagories, :slug, :string
  end
end
