class CreateParkingLots < ActiveRecord::Migration[7.1]
  def change
    create_table :parking_lots do |t|
      t.string :name
      t.string :location
      t.integer :capacity

      t.timestamps
    end
  end
end
