class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :name
      t.integer :age
      t.integer :weight
      t.integer :height
      t.string :ethnicity
      t.string :email

      t.timestamps
    end
  end
end
