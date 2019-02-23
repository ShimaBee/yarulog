Rails.application.routes.draw do
  root to: 'home#index'
  get '/about',   to: 'home#index'
  get '/done', to: 'home#index'
  get '/couldnot', to: 'home#index'
  get '/add', to: 'home#index'
  namespace :api, format: 'json' do
    resources :tasks, only: [:index, :create, :update]
  end
end
