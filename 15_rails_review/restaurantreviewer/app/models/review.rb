class Review < ApplicationRecord
  belongs_to :critic
  belongs_to :restaurant
end
