class CatagoriesController < ApplicationController
  before_action :set_catagory, only: [:catagory]

  def catagory
    @product_catagory = @catagory.products
  end
  private 

   def set_catagory
    @catagory = Catagory.find_by(:name => params[:name])
    @catagories = Catagory.all
  end    

end
