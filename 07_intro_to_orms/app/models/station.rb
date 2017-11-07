class Station
  # what are all the stations > station objects
  # doing queries, find by station name > station object
end

# station1 = Station.new(name, line, 'IRT', latitude, longitude)
# station1.save
#
# station2 = Station.create(name, line, 'IRT', latitude, longitude)
#
# Station.all # [station1, station2]
#
# Station.find_by(division: 'IRT') # [station1, station2]
# found_station = Station.find(1) # station1
# found_station.division = 'other'
# found_station.save # updates attributes
# found_station.delete # deletes found station
# Station.delete(2) # deletes station2
# Station.all # []
