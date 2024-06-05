class ParkingLotsController < ApplicationController
  # Other controller actions
  
  def create
    @parking_lot = ParkingLot.new(parking_lot_params)
    if @parking_lot.save
      render json: @parking_lot, status: :created
    else
      render json: @parking_lot.errors, status: :unprocessable_entity
    end
  end
  
  private
  
  def parking_lot_params
    params.require(:parking_lot).permit(:name, :location, :time_in, :rates)
  end
end
