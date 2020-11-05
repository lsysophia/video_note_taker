Rails.application.routes.draw do
  post "/login" => "sessions#create"
  delete "/logout" => "sessions#destroy"

  resources :users
  resources :videos
  resources :user_notes

  root "homepage#index"
  get "/*path" => "homepage#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
