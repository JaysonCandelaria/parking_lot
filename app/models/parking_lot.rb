class ParkingLot < ApplicationRecord
  # Other validations, associations, etc.
  
  validates :time_in, presence: true
  validates :rates, presence: true
end
