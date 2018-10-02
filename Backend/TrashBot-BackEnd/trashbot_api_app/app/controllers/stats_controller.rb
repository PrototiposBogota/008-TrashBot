class StatsController < ApplicationController
  before_action :authenticate_request, except: [:definiciones, :reciclar]
    def reciclar
      @estadisticas = Estadistica.where("name LIKE '%reciclar%' AND name <> 'solo_reciclar'").order('counter DESC')
      render json: @estadisticas
    end

    def definiciones
      @estadisticas = Estadistica.where("name LIKE '%definicion%'").order('counter DESC')
      render json: @estadisticas
    end
  end