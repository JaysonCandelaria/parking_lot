class AddTimeInAndRatesToParkingLots < ActiveRecord::Migration[7.1]
  def change
    add_column :parking_lots, :time_in, :datetime
    add_column :parking_lots, :rates, :decimal
  end
end
