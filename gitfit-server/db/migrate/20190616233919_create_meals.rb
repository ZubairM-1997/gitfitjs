class CreateMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :meals do |t|
      t.references :diet, foreign_key: true
      t.references :user, foreign_key: true
      t.string :name
      t.integer :calories
      t.string :ingredients

      t.timestamps
    end
  end
end
