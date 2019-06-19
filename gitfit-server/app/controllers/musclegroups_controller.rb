class MusclegroupsController < ApplicationController

	def index
		musclegroups = Musclegroup.all
		render json: musclegroups, include: [:workouts]
	end

	def show
		musclegroup = Musclegroup.find_by(id: params[:id])
		if musclegroup != nil
			render json: musclegroup, include: [:workouts]
		else
			render json: {error: "Muscle Group not found! "}, status: 404
		end
	end




end
