Rails.application.routes.draw do



  resources :users, only: [:create, :show]
  get "signup", to: "users#new", as: "signup"
  get "/signin", to: "sessions#new", as: "signin"
  post "/sessions", to: "sessions#create", as: "sessions"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
