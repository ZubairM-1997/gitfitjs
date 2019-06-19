# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_06_17_093206) do

  create_table "diets", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "description"
  end

  create_table "meals", force: :cascade do |t|
    t.integer "diet_id"
    t.integer "user_id"
    t.string "name"
    t.integer "calories"
    t.string "ingredients"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["diet_id"], name: "index_meals_on_diet_id"
    t.index ["user_id"], name: "index_meals_on_user_id"
  end

  create_table "musclegroups", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image"
  end

  create_table "userdiets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "diet_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["diet_id"], name: "index_userdiets_on_diet_id"
    t.index ["user_id"], name: "index_userdiets_on_user_id"
  end

  create_table "usermuscles", force: :cascade do |t|
    t.integer "user_id"
    t.integer "musclegroup_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["musclegroup_id"], name: "index_usermuscles_on_musclegroup_id"
    t.index ["user_id"], name: "index_usermuscles_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.integer "age"
    t.integer "weight"
    t.integer "height"
    t.string "ethnicity"
    t.string "email"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "gender"
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "musclegroup_id"
    t.integer "user_id"
    t.string "name"
    t.integer "sets"
    t.integer "reps"
    t.integer "duration"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["musclegroup_id"], name: "index_workouts_on_musclegroup_id"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
