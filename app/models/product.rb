class Product < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  has_many :catagories
  

  accepts_nested_attributes_for :catagories, 
                                allow_destroy: true,
                                reject_if: lambda { |attrs| attrs['name'].blank?}
  validates_presence_of :name, :image, :inventory
  validates :description, presence: true, length: {minimum: 5, maximum:500}
  validates :price, presence: true, format: { with: /\A\d+(?:\.\d{0,2})?\z/ }, numericality: { greater_than: 0, less_than: 1000000 }
end
