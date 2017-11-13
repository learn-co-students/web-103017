# requiring gems
require 'bundler'
Bundler.require # this requires all gems in Gemfile

# setting up database
ActiveRecord::Base.establish_connection({
  adapter: 'sqlite3', # specifies which type of database / which database gem you're using
  database: 'db/desserts.db'
})

# requiring my own files
require_all 'app'
