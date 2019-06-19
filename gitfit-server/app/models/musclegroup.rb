class Musclegroup < ApplicationRecord
	has_many :usermuscle
	has_many :users, through: :usermuscle
	has_many :workouts
end
