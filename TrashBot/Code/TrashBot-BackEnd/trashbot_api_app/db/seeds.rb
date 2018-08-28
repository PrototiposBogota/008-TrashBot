# ruby encoding: utf-8
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(name: 'mguerra', email: 'mguerra@virtual.com.co', password: 'mguerra')
User.create(name: 'oscar', email: 'oscar@example.com', password: 'oscar')
User.create(name: 'ramiro', email: 'ramiro@example.com', password: 'ramiro')

eventos_list = [
    ['Evento A', 'Calle 92 # 15 - 22', 'Evento destinado al reciclaje de elementos', '2018-07-19 11:00:00'],
    ['Evento B', 'Calle 92 # 15 - 22', 'Evento destinado al reciclaje de elementos', '2018-07-28 09:00:00'],
    ['Evento C', 'Calle 92 # 15 - 22', 'Evento destinado al reciclaje de elementos', '2018-07-25 18:00:00'],
    ['Evento D', 'Calle 92 # 15 - 22', 'Evento destinado al reciclaje de elementos', '2018-07-30 15:00:00'],
]

eventos_list.each do |nombre, lugar, desc, fecha|
    Evento.create(nombre: nombre, lugar: lugar, descripcion: desc, fecha: fecha)
end