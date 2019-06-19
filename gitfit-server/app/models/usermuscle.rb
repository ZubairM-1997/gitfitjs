class Usermuscle < ApplicationRecord
  belongs_to :user
  belongs_to :musclegroup
end
