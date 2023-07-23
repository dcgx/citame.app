
Rails.application.routes.draw do
  namespace 'api' do
    namespace 'v1' do
      resources :appointments # /api/v1/appointments
    end
  end
end
