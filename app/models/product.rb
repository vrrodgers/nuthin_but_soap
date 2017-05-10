class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  belongs_to :catagory
  has_many :orders
  
  validates_presence_of :name, :image, :inventory
  validates :description, presence: true, length: {minimum: 5, maximum:500}
  validates :price, presence: true, format: { with: /\A\d+(?:\.\d{0,2})?\z/ }, numericality: { greater_than: 0, less_than: 1000000 }

  def discount_message
    return "Discount!"
  end
  
  def on_sale_message
    return "On Sale Item!"
  end

  def sale
    if price > 30.00
      return on_sale_message
    else
      return discount_message
    end
  end

  def tax
   return price * 0.09
  end

  def sales_tax
    return tax 
  end

  def total
   return price + tax
  end
end
