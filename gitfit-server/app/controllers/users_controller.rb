class UsersController < ApplicationController

	def index
		users = User.all
		render json: users, include: [:meals, :workouts]
	end

	def show
		user = User.find_by(id: params[:id])
		if user != nil
			render json: user, include: [:meals, :workouts]
		else
			render json: {error: "User not found! "}, status: 404
		end
	end

	def create
		user = User.create(user_params)
			render json: user
	end



	def update
		user = User.find_by(id: params[:id])
			if user
				user.update(user_params)
				render json :user
			end
	end

	private
		def user_params
			params.require(:user).permit(:name, :age, :weight, :height, :ethnicity, :email, :gender)
		end




end
