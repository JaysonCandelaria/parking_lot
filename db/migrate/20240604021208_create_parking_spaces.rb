class CreateParkingSpaces < ActiveRecord::Migration[7.1]
  def change
    create_table :parking_spaces do |t|
      t.integer :number
      t.string :status
      t.references :parking_lot, null: false, foreign_key: true

      t.timestamps
    end
  end
end
