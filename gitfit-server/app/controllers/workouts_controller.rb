class WorkoutsController < ApplicationController

	def index
		workouts = Workout.all
		render json: workouts
	end

	def show
		workout = Workout.find_by(id: params[:id])
		render json: workout
	end

	def create
		workout = Workout.create(workout_params)
		render json: workout
	end

	def destroy
		workout = Workout.find_by(id: params[:id])
		if workout
			workout.destroy
			render json: workout
		else
			render json: {error: "Workout doesn't exist"}
		end
	end

	private
	def workout_params
		params.require(:workout).permit(:user_id, :musclegroup_id, :name, :sets, :reps, :duration)
	end


end
