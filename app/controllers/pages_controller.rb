class PagesController < ApplicationController
  def home
    @soap = Product.soap
  end

end

