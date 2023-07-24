module Api
    module V1
        class MeController < ApplicationController
            def index
                me = User.find(current_user.id)

                render json: {
                    status: 'SUCCESS', 
                    message: 'Loaded me', 
                    data: me
                }, status: :ok
            end
    end
end