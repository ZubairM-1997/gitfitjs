class AddDescriptionToDiet < ActiveRecord::Migration[5.2]
  def change
    add_column :diets, :description, :string
  end
end
