Rails.application.routes.draw do
  resources :parking_lots, only: [:index, :show, :create, :update, :destroy] do
    resources :parking_spaces, only: [:index, :show, :create, :update, :destroy]
  end
end
