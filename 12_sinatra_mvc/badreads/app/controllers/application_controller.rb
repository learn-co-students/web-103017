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
  
  
  
  # INDEX | GET /books | Book.all

  
  get "/books" do
    # get all books 
    # Speaks to our model 
    @books = Book.all 
    # Speaks to our view 
    erb :"books/index"
  end
  
  
  # CREATE | POST /books | Book.create()
  
  post "/books" do
    binding.pry
    @book = Book.create(params)
    redirect "/books"
    # redirect "/books"

  end
  
  
  
  # NEW | GET /books/new | 

  
  get "/books/new" do
    erb :"books/new"
  end
  
  
  # SHOW | GET /books/:id | 
  
  # for eg books/1  books/2
  
  
  # twitter.com/iloveflatiron
  # "/:username"
  # :username 
  get "/books/:id" do
    @book = Book.find(params[:id])
    erb :"books/show"
  end
  
  
  
  get "/books/:id/edit" do
    @book = Book.find(params[:id])
    erb :"books/edit"
    
    
  end
  
  
  patch "/books/:id" do
    binding.pry
    # we should get some data from the form 
    # lets grab the original from the db 
    # lets update and save 
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
