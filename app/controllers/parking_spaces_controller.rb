class ParkingSpacesController < ApplicationController
  before_action :set_parking_lot

  def index
    @parking_spaces = @parking_lot.parking_spaces
    render json: @parking_spaces
  end

  def show
    @parking_space = @parking_lot.parking_spaces.find(params[:id])
    render json: @parking_space
  end

  def create
    @parking_space = @parking_lot.parking_spaces.new(parking_space_params)
    if @parking_space.save
      render json: @parking_space, status: :created
    else
      render json: @parking_space.errors, status: :unprocessable_entity
    end
  end

  def update
    @parking_space = @parking_lot.parking_spaces.find(params[:id])
    if @parking_space.update(parking_space_params)
      render json: @parking_space
    else
      render json: @parking_space.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @parking_space = @parking_lot.parking_spaces.find(params[:id])
    @parking_space.destroy
    head :no_content
  end

  private

  def set_parking_lot
    @parking_lot = ParkingLot.find(params[:parking_lot_id])
  end

  def parking_space_params
    params.require(:parking_space).permit(:number, :status)
  end
end
