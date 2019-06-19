class User < ApplicationRecord
	has_many :userdiet
	has_many :diets, through: :userdiet
	has_many :usermuscle
	has_many :musclegroups, through: :usermuscle
	has_many :workouts, :dependent => :destroy
	has_many :meals, :dependent => :destroy
end
