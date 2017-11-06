require 'csv'
require_relative '../config/environment'

db = SQLite3::Database.new('db/subway.db')

# Create the table
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

# Seed the database
CSV.foreach('db/stations.csv') do |row|
  unless row[0] == "id"
    db.execute("INSERT INTO stations (id, name, line, division, latitude, longitude) VALUES (#{row[0]}, \"#{row[1]}\", \"#{row[2]}\", \"#{row[3]}\", #{row[4]}, #{row[5]})")
  end
end

Pry.start


# create instances of objects for each row in this table
