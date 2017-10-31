# * fetch_books(topic)
# one-word topic
def fetch_books(topic)
  # get JSON information from the Google Books API
  response = RestClient.get("https://www.googleapis.com/books/v1/volumes?q=#{topic}")
  JSON.parse(response)
end

# * print_books # calls fetch_books, print out number (index + 1), title, authors, description
def print_books
  data = fetch_books("knitting") # data about my knitting books
  books = data["items"]

  books.each.with_index(1) do |book, index|
    book = book["volumeInfo"]
    puts index
    puts book["title"]
    puts get_authors(book)
    puts book["description"]
  end

end

def get_authors(book)
  book.fetch("authors", []).join(", ")
  # book["authors"] ? book["authors"].join(", ") : "No authors"
  # book["authors"] || "No authors" # still have to join somewhere
end


# * get_authors(book_hash)
# * get_title(book_hash)
# * get_description(book_hash)

# \n


### EXAMPLE OUTPUT ###
# 1. Making Popcorn
#    Cool author 1, Cool author 2
#    This is the description
# 2. Making Popcorn II
#    Cool author 3
#    This is the other description
#
