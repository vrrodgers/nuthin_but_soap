class CatagoriesController < ApplicationController
  before_action :set_catagory, only: [:show, :edit, :update, :destroy]
  private 
  def set_catagory
    @catagory = Catagory.friendly.find(params[:id])
   end
end
