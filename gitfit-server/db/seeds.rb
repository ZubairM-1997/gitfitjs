# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Musclegroup.destroy_all
Diet.destroy_all

Musclegroup.create(name: "Biceps", image: "https://iaom-us.com/wp-content/uploads/2018/11/Fotolia_110740333_S-693x675.jpg")
Musclegroup.create(name: "Triceps", image: "https://www.t-nation.com/system/publishing/articles/10004345/original/The_Best_Training_Tool_for_Triceps.jpg?1484947638" )
Musclegroup.create(name: "Legs", image: "https://www.t-nation.com/system/publishing/articles/10005935/original/Squatting-Misses-This-Leg-Muscle.jpeg?1518640384" )
Musclegroup.create(name: "Shoulders", image: "https://coachhos.files.wordpress.com/2017/12/shouldermuscles.jpg?w=407&h=305")
Musclegroup.create(name: "Abs", image: "https://www.abs-exercise-advice.com/images/Muscle-anatomy.jpg" )
Musclegroup.create(name: "Chest", image:  "https://s3.amazonaws.com/musclemonsters/Chest+Anatomy.png")



Diet.create(name: "Keto Diet", description: "A high fat, adequate protein, low-carbohydrate diet that in medicine is used to treat difficult to control epilepsy in children. This diet forces the body to burn fats than carbohydrates")
Diet.create(name: "Intermittent fasting", description: "Cycling between non-fasting and fasting as a method of calorie restriction")
Diet.create(name: "Paleo Diet", description: "Predominantly eating of foods that have presumed to have been available to humans during the Paleothilic era. In Layman's terms, not eating processed crap")
Diet.create(name: "Mediterranean diet", description: "A diet inspired by the eating habits of Greece, Italy ans Spain which involves a high consumption of olive oil, legumes, unrefined cereals, fruits, vegetables and a high consumption of fish.")
Diet.create(name: "Vegan", description: "The practice of abstaining from the consumption of any animal products, I couldn't follow this, chicken over anything.")
Diet.create(name: "Vegetarian", description: "Similar to vegans however consumption of certain of animal products such as milk, honey and yoghurt are allowed, but not meat. Sad times, they are missing out")
Diet.create(name: "Pescetarianism", description: "The practice of adhering to a diet that incorporates seafood as the only source of meat in an otherwise vegetarian diet. Yes I got that from wikipedia.")
