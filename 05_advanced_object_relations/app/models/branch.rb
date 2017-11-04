class Branch
  # belongs to bank
  # belongs to city (location)
  attr_reader :bank, :city

  # contain ALL created branch instances
  @@all = []

  # branch = Branch.new(bank, city)
  def initialize(bank, city)
    @bank = bank
    @city = city
    @@all << self
  end

  # Branch.all => [branch1, branch2]
  def self.all
    @@all
  end
end

# nyc.add_branch(branch)
  # nyc.branches << branch
  # usaa.branches << branch
