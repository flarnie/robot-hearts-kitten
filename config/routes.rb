Rhk::Application.routes.draw do
  
  resources :scoreboards, :only => [:index, :show] do
    resources :scores, :only => :create
  end
  
  resources :levels, :only => [:index, :show]

  match "/credits" => "root#credits"
  root :to => "root#home"
end
