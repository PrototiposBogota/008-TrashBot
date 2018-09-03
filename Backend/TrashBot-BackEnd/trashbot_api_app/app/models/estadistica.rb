class Estadistica < ApplicationRecord
    validates :name, presence: true
    validates :counter, presence: true
    validates :description, presence: true
end
