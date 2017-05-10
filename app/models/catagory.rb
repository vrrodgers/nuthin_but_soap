class Catagory < ApplicationRecord
  has_many :products
  scope :soap, -> { where(name:'test' )}
end