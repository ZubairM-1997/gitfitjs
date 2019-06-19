class Diet < ApplicationRecord
	has_many :userdiet
	has_many :users, through: :userdiet
	has_many :meals
end
