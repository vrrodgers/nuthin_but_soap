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
    respond_to do |format|
      if @product.save
        format.html { redirect_to product_path, notice: 'Product was created' }
      else
        format.html { render :new }
      end
end 

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
      @product = Product.friendly.find(params[:id])
    end

    def product_params
      params.require(:product).permit(:name,
                                      :image,
                                      :description,
                                      :price,
                                      :inventory,
                                      catagories_attributes: [:id, :name, :_destroy] 
                                     )

    end

      


end
