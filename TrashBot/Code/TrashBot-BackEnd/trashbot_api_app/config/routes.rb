Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  post 'auth/register', to: 'users#register'
  post 'auth/login', to: 'users#login'
  get 'test', to: 'users#test'

  namespace 'api' do
    namespace 'v1' do
      get 'chats/estadisticas', to: 'chats#get_estadisticas'
      resources :eventos
      resources :chats
    end
  end

end
