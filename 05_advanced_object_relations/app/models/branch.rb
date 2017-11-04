class Branch
  # RELATIONSHIPS
  # belongs to
  #   bank
  #   city

  attr_reader :bank, :city

  @@all = []

  def initialize(bank, city)
    @bank = bank
    @city = city
    @@all << self
  end

  def self.all
    @@all
  end
end
