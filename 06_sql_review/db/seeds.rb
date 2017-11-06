require 'csv'
require_relative '../config/environment'

db = SQLite3::Database.new('db/subway.db')
db.results_as_hash = true

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

# Create Routes table (create table) and seed the DB (insert into)
db.execute(<<-SQL)
  CREATE TABLE IF NOT EXISTS routes (
    id integer,
    name text
  )
SQL

CSV.foreach('db/routes.csv') do |row|
  unless row[0] == "id"
    db.execute("INSERT INTO routes (id, name) VALUES (#{row[0]}, \"#{row[1]}\")")
  end
end

# Create Stops table (create table) and tseed the DB (insert into)
db.execute(<<-SQL)
  CREATE TABLE IF NOT EXISTS stops (
    id integer primary key,
    route_id integer,
    station_id integer
  )
SQL

CSV.foreach('db/stops.csv') do |row|
  unless row[0] == "route_id"
    db.execute("INSERT INTO stops (route_id, station_id) VALUES (#{row[0]}, #{row[1]})")
  end
end

Pry.start
