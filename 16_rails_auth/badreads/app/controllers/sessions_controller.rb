class SessionsController < ApplicationController
  def new
  end


  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # you are who you say you are
      redirect_to user_path(user)
    else
      render 'new'
    end
  end



end
