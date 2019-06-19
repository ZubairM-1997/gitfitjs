class CreateUsermuscles < ActiveRecord::Migration[5.2]
  def change
    create_table :usermuscles do |t|
      t.references :user, foreign_key: true
      t.references :musclegroup, foreign_key: true

      t.timestamps
    end
  end
end
