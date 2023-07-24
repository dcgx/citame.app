module Api
    module V1
        class MembersController < ApplicationController
            def index
                # members = Member.order('created_at DESC');
                # render json: {status: 'SUCCESS', message:'Loaded members', data:members},status: :ok
            end

            private 
            def get_user_from_token
                jwt_payload = JWT.decode(request.headers['Authorization'].split(' ')[1], Rails.application.credentials.devise[:jwt_secret_key]).first
                user_id = jwt_payload['sub']
                user = User.find(user_id)
            end 
    end
end