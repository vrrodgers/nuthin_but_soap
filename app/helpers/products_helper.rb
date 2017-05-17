module ProductsHelper
  def image_generator(height:, width:)
    "http://placehold.it/#{height}x#{width}"
  end
  
  def product_img img
    if img.model.image?
      img
    else 
      image_generator(height: '276', width: '183')
    end
  end

end
