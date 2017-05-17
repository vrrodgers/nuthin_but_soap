class ProductsController < ApplicationController
  before_action :set_product, only: [:show, :edit, :update, :destroy]
  before_action :set_catagory, only: [:index, :show, :edit, :update, :destroy]

  
  def index
     @products = Product.all
    if params[:filter] == "discount"
      @products = @products.where("price <= ?", 5)
    end
    if params[:sort]
      @products = @products.order(params[:sort] => params[:direction])
    end
    if params[:category]
      category = Category.find_by(:name => params[:category])
      @products = category.products
      # @products = Category.find_by(:name => params[:category]).products
    end
    if params[:search]
        @products= @products.where('name LIKE ?', "%" + params[:search] + "%")
    end
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
        format.html { redirect_to @product, notice: 'Product was successfully created.' }
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
    redirect_to root_path
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
                                      :catagory_id 
                                     )

    end

  def set_catagory
    @catagories = Catagory.all
  end

end
