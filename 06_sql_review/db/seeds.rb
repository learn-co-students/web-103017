require 'csv'
require_relative '../config/environment'

db = SQLite3::Database.new('db/subway.db')

db.execute(<<-SQL)
  CREATE TABLE IF NOT EXISTS stations (
    id integer,
    name text,
    line text,
    division text,
    latitude real,
    longitude real
  )
SQL

CSV.foreach('db/stations.csv') do |row|
  binding.pry
end
