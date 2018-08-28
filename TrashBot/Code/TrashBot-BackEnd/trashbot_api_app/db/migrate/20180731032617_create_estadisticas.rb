class CreateEstadisticas < ActiveRecord::Migration[5.2]
  def change
    create_table :estadisticas do |t|
      t.string :name
      t.bigint :counter
      t.string :description

      t.timestamps
    end
  end
end
