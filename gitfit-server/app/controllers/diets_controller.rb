class DietsController < ApplicationController

	def index
		diets = Diet.all
		render json: diets, include: [:meals]
	end

	def show
		diet = Diet.find_by(id: params[:id])
		if diet != nil
			render json: diet, include: [:meals]
		else
			render json: {error: "Diet not found! "}, status: 404
		end
	end

end
