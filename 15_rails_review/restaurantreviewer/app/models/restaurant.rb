class Restaurant < ApplicationRecord
  has_many :reviews 
  has_many :critics, through: :reviews
end
