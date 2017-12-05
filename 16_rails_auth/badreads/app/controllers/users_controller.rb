class UsersController < ApplicationController

  skip_before_action :authorized, only: [:new, :create]
  def create
    @user = User.new(user_params)
    if @user.valid?
      @user.save
      session[:user_id] = @user.id
      redirect_to books_path
    else
      render 'new'
    end
  end

  def new
    @user = User.new
  end


  def show
    @user = User.find(params[:id])
  end



  def books
  end



  private
    def user_params
      params.require(:user).permit(:username, :password, :password_confirmation)
    end

end
