Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/items1', to: 'item_ones#index'
  get '/items2', to: 'item_twos#index'
  get '/get_autocomplete_data_1', to: 'item_ones#autocomplete_by_attr'
  get '/get_autocomplete_data_2', to: 'item_twos#autocomplete_by_attr'
  get '/items2_submit_job', to: 'item_twos#submit_search_job'
  get '/items2_check_job', to: 'item_twos#query_search_job_status'
  get '/items1_submit_job', to: 'item_ones#submit_search_job'
  get '/items1_check_job', to: 'item_ones#query_search_job_status'

  require 'sidekiq/web'
  mount Sidekiq::Web => '/sidekiq'

end
