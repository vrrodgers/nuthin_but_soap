Rails.application.routes.draw do
  devise_for :users
  resources :orders
  resources :catagory_products, only: [:index, :create]
  resources :products

  root to: "home#index"

end
