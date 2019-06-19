class CreateWorkouts < ActiveRecord::Migration[5.2]
  def change
    create_table :workouts do |t|
      t.references :musclegroup, foreign_key: true
      t.references :user, foreign_key: true
      t.string :name
      t.integer :sets
      t.integer :reps
      t.integer :duration

      t.timestamps
    end
  end
end
