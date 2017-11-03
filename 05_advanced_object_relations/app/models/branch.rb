class Branch
  # belongs to bank
  # belongs to city (location)

  # bank
  # city
  # a branch doesn't exist without both

  @@all = []

  def initialize(bank, city)
    @bank = bank
    @city = city
    @@all << self
  end

end
