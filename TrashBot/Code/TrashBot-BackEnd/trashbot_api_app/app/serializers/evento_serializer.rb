class EventoSerializer < ActiveModel::Serializer
    attributes :id, :nombre, :lugar, :descripcion, :fecha, :hora

    def fecha
        object.fecha.strftime("%d/%m/%Y")
    end

    def hora
        object.fecha.strftime("%H:%M")
    end
end