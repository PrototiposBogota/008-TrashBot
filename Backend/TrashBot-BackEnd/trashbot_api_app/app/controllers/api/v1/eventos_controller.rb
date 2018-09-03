module Api
    module V1
        class EventosController < ApplicationController
            def index
                @eventos = Evento.order('fecha ASC')

                render json: @eventos
            end

            def create
                @evento = Evento.new(evento_params)
                if @evento.save
                    render json: @evento, status: :created
                else
                    render json: @evento.errors, status: :unprocessable_entity
                end
            end

            private
                def evento_params
                    params.require(:evento).permit(:nombre, :lugar, :descripcion, :fecha)
                end
        end
        
    end
end