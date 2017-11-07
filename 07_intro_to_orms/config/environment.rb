require 'pry'
require 'sqlite3'

DB = {}
DB[:conn] = SQLite3::Database.new('db/subway.db')
DB[:conn].results_as_hash = true

require_relative '../app/models/route.rb'
require_relative '../app/models/station.rb'
require_relative '../app/models/stop.rb'
