module Api
    module V1
        class EstadisticasController < ApplicationController
            def index
                @estadisticas = Estadistica.order('description DESC')

                render json: @estadisticas
            end

            def create
                @estadistica = Estadistica.new(estadistica_params)
                if @estadistica.save
                    render json: @estadistica, status: :created
                else
                    render json: @estadistica.errors, status: :unprocessable_entity
                end
            end

            private
                def estadistica_params
                    params.require(:estadistica).permit(:name, :counter, :description)
                end
        end
        
    end
end