class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged
  mount_uploader :image, ImageUploader

  belongs_to :catagory
  belongs_to :brand  
  validates_presence_of :name, :image, :inventory
  validates :description, presence: true, length: {minimum: 5, maximum:500}
  validates :price, presence: true, format: { with: /\A\d+(?:\.\d{0,2})?\z/ }, numericality: { greater_than: 0, less_than: 1000000 }

  def catagory_name
   catagory.try(:name)
  end

  def catagory_name=(name)
    self.catagory = Catagory.find_or_create_by(name: name) if name.present?
  end

  def product_catagory(name)
    Catagory.all.where(name: name)

  end

  scope :soap, -> { where(catagory_id: 4)}


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
