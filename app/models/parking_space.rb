class ParkingSpace < ApplicationRecord
  belongs_to :parking_lot
  validates :status, inclusion: { in: %w[available occupied] }
end
