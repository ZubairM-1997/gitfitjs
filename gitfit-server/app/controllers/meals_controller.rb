class MealsController < ApplicationController

	def index
		meals = Meal.all
		render json: meals
	end

	def show
		meal = Meal.find_by(id: params[:id])
		render json: meal
	end

	def create
		meal = Meal.create(meal_params)
		render json: meal
	end

	def destroy
		meal = Meal.find_by(id: params[:id])
		if meal
			meal.destroy
			render json: meal
		else
			render json: {error: "Meal doesn't exist"}
		end
	end

	private
	def meal_params
		params.require(:meal).permit(:user_id, :diet_id, :name, :calories, :ingredients)
	end



end
