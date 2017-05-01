class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]

  def index
    @products = Product.all
  end


  def show
  end

  def new
    @product= Product.new
  end


  def create
    @product = Product.new(product_params)
  end


  def edit

  end

  def update
    if @product.update(product_params)
      flash[:success] = "Product was updated successfully!"
      redirect_to product_path(@product)
    else
      render 'edit'
    end  
  end
  
  def destroy
    @product.destroy
  end


  private
    def set_product
      @products = Product.find(params[:id])
    end

    def product_params
      params.require(:recipe).permit(:name,
                                    :image,
                                    :description,
                                    :price,
                                    :catagory_id,
                                    :inventory)

    end

      


end
