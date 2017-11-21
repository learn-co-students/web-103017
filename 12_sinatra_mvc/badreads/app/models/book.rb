class Book

  @@all ||= []
  
  attr_accessor :title, :author
  
  
  def initialize(title, author)
    @title = title
    @author = author
  end
  
  

  
  def self.all 
    @@all
  end
  
  def self.create(title, author)
    book = Book.new(title, author)
    @@all << book
    book
  end

end