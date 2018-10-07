class StatsController < ApplicationController
  before_action :authenticate_request, except: [:definiciones, :reciclar, :operadores]
    def reciclar
      @estadisticas = Estadistica.where("name LIKE '%reciclar%' AND name <> 'solo_reciclar'").order('counter DESC').take(5)
      render json: @estadisticas
    end

    def definiciones
      @estadisticas = Estadistica.where("name LIKE '%definicion%'").order('counter DESC').take(5)
      render json: @estadisticas
    end

    def operadores
      @estadisticas = Estadistica.where("name LIKE '%operador%'").order('counter DESC').take(5)
      render json: @estadisticas
    end
  end