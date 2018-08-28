class CreateEventos < ActiveRecord::Migration[5.2]
  def change
    create_table :eventos do |t|
      t.string :nombre
      t.string :lugar
      t.string :descripcion
      t.datetime :fecha

      t.timestamps
    end
  end
end
