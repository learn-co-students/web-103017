# SQL and Ruby

---

* ORM
  * Object-relational mapper
    * Translates rows in database table to instances of class
    * Permits us to do crud operations
  * Mapping
    * `Database      =>   Application State`
    * `Table         =>   Class`
    * `Row           =>   Instance`
    * `Column value  =>   Attribute`
  * SQL CRUD in Ruby code
    * Create
    * Read
    * Update
    * Delete
* **Deliverables**
  * `Station`
    * `Station.new({name: 'Union Sq', line: 'Broadway', division: 'IRT', latitude: 10.03, longitude: 10.04})` => Returns unsaved instance
    * `Station.create(hash_of_attrs_and_values)` => Returns saved instance
    * `Station.all` => Returns all instances of station from DB
    * `Station.find(id)` => Returns first instance with ID
    * `Station.find_by(hash_of_attrs_and_values)` => Returns first instance with matching attrs and values
    * `Station#save` => Returns saved instance
    * `Station#update` => Returns updated instance
    * `Station#delete` => Deletes one instance and returns ID
    * `Station.delete(id)` => Deletes one instance by ID and returns ID
  * `Route`
    * `Route.new(hash_of_attrs_and_values)` => Returns unsaved instance
    * `Route#save` => Returns saved instance
    * `Route.create(hash_of_attrs_and_values)` => Returns saved instance
    * `Route.all` => Returns all instances of route from DB
    * `Route.find(id)` => Returns first instance with ID
    * `Route.find_by(hash_of_attrs_and_values)` => Returns first instance with matching attrs and values
    * `Route#update` => Returns updated instance
    * `Route#delete` => Deletes one instance and returns ID
    * `Route.delete` => Deletes one instance by ID and returns ID
* **Stretch deliverables** – _relationships_
  * `Stop`
    * `Stop#station` => Returns station instance for stop
    * `Stop#route` => Returns route instance for stop
  * `Station`
    * `Station#stops` => Returns list of stop instances for station
    * `Station#add_stop(route)` => Creates a stop instance for station and route and persists that relationship
    * `Station#routes` => Returns unique list of routes for station, through stops
  * `Route`
    * `Route#stops` => Returns list of stop instances for station
    * `Route#add_stop(station)` => Creates a stop instance for route and station and persists relationship
    * `Route#stations` => Returns unique list of stations for routes
