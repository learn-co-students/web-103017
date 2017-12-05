class BooksController < ApplicationController
  skip_before_action :authorized, only: [:index]
  def index
    if logged_in?
      @books = current_user.books
    end
  end

  def show
    @book = Book.find(params[:id])
  end
end
