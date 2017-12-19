class BooksController < ApplicationController
  before_action :set_book, only: [:show, :edit, :update, :destroy]

  # GET /books
  # GET /books.json
  def index
    @books = Book.all
    render json: @books
  end

  # GET /books/1
  # GET /books/1.json
  def show
    # already have @book
    render json: @book
  end

  # POST /books
  # POST /books.json
  def create
    @book = Book.new(book_params)
      if @book.save
        render json: {data: @book, message: 'Book Successfully Created', success: true}, status: 200
      else
        render json: {data: @book.errors, message: 'Book not successfully created', success: false}, status: 406
      end
  end

  # PATCH/PUT /books/1
  # PATCH/PUT /books/1.json
  def update
      if @book.update(book_params)
        render json: @book
      else
        render json: @book.errors
      end
  end

  # DELETE /books/1
  # DELETE /books/1.json
  def destroy
    @book.destroy
    render 'book destroyed'
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book
      @book = Book.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def book_params
      params.require(:book).permit(:author, :title, :pages)
    end
end
