class CreateMusclegroups < ActiveRecord::Migration[5.2]
  def change
    create_table :musclegroups do |t|
      t.string :name

      t.timestamps
    end
  end
end
