module Api
    module V1
        class AppointmentsController < ApplicationController
            def index
                appointments = Appointment.order('created_at DESC');

                render json: {
                    status: 'SUCCESS', 
                    message: 'Loaded appointments', 
                    data: appointments
                }, status: :ok
            end

            def show
                appointment = Appointment.find(params[:id])

                render json: {
                    status: 'SUCCESS', 
                    message: 'Loaded appointment', 
                    data: appointment
                }, status: :ok
            end

            def create
                appointment = Appointment.new(appointment_params)

                if appointment.save
                    render json: {
                        status: 'SUCCESS', 
                        message: 'Saved appointment', 
                        data: appointment
                    }, status: :ok
                else
                    render json: {
                        status: 'ERROR', 
                        message: 'Appointment not saved', 
                        data: appointment.errors
                    }, status: :unprocessable_entity
                end
            end

            def update
                appointment = Appointment.new(appointment_params)

                if appointment.update_attributes(appointment_params)
                    render json: {
                        status: 'SUCCESS', 
                        message: 'Updated appointment', 
                        data: appointment
                    }, status: :ok
                else
                    render json: {
                        status: 'ERROR', 
                        message: 'Appointment not updated', 
                        data: appointment.errors
                    }, status: :unprocessable_entity
                end
            end
                

            def destroy
                appointment = Appointment.new(appointment_params)

                if appointment.destroy
                    render json: {
                        status: 'SUCCESS', 
                        message: 'Deleted appointment', 
                        data: appointment
                    }, status: :ok
                else
                    render json: {
                        status: 'ERROR', 
                        message: 'Appointment not deleted', 
                        data: appointment.errors
                    }, status: :unprocessable_entity
                end

            end

            def appointment_params
                params.permit(:name)
            end
    end
end 