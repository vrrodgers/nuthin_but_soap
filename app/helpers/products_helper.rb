module ProductsHelper
  def image_generator(height:, width:)
    "http://placehold.it/#{height}x#{width}"
  end
  
  def product_img img
    if img.model.image?
      img
    else 
      image_generator(height: '200', width: '100')
    end
  end

end
