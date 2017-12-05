class RestaurantsController < ApplicationController 
  
  def index 
    @restaurants = Restaurant.all
    
  end 
  
  
  def new 
    @restaurant = Restaurant.new
    @critics = Critic.all
  end 
  
  def create
    @restaurant = Restaurant.create(restaurant_params)
    redirect_to restaurant_path(@restaurant)
  
  end
  
  
  def show 
    @restaurant = Restaurant.find(params[:id])
  end 
  
  
  
  def restaurant_params
    params.require(:restaurant).permit(:name, :cuisine_type, critic_ids:[])
    
  end
  
end