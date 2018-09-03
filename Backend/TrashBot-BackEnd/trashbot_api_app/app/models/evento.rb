class Evento < ApplicationRecord
    validates :nombre, presence: true
    validates :lugar, presence: true
    validates :descripcion, presence: true
    validates :fecha, presence: true
end
