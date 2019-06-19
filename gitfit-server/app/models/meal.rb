class Meal < ApplicationRecord
  belongs_to :diet
  belongs_to :user
end
