require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    erb :welcome
  end
  
  # Controller
  
  get "/books" do
    # get all books 
    # Speaks to our model 
    @books = Book.all 
    # Speaks to our view 
    erb :"books/index"
  end
  
  post "/books" do
    @book = Book.create(params[:title], params[:author])
    redirect "/books"

  end
  
  get "/books/new" do
    erb :"books/new"
  end
  
  
  
  # We want to create a book
  # show a Form
  # submit the form 
  # form takes us to POST books 
  # creates our book 
  

  
  
  # GET /books 
  # GET /books/new -> Form 
  # POST /books
  # DELETE /books/:id
  # GET /books/1
  
  
  
  # we need to go to some route "/books"
  # see all books 
  
  
  
  
  # we need to be able to go to some route and see a form 
  
  
  
  
  

end
