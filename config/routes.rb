Rails.application.routes.draw do
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  devise_for :users, path: '', path_names: {sign_in: 'login', sign_out: 'logout', sign_up: 'register'}
  resources :orders
  resources :catagory_products, only: [:index, :create]
  resources :products do
    resources :carted_products, only: [:create]
  end

  root to: "products#index"
  get '/carted_products' => 'carted_products#index'
  get '/catagory' => 'catagories#catagory'
end
