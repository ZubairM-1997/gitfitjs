//Function to render the user on the HTML document
function renderUser(userObj) {

	userForm.remove()
	subheader.remove()

	let header = document.querySelector(".header")
	header.innerHTML = `Are you ready to GitFit ${userObj.name}?!`

	let userHeight = document.createElement("span")
	let userWeight = document.createElement("span")
	let userAge = document.createElement("span")
	let userGender = document.createElement("span")
	let userEthnicity = document.createElement("span")
	let email = document.createElement("span")
	let bmi = document.createElement("span")
	let bmr = document.createElement("span")

	let workoutList = document.createElement("div")
	workoutList.setAttribute("class", "list")
	workoutList.setAttribute("id", "list-workouts")
	workoutList.innerHTML = "<h3>Your Workouts</h3>"

	let mealsList = document.createElement("div")
	mealsList.setAttribute("class", "list")
	mealsList.setAttribute("id", "list-meals")
	mealsList.innerHTML = "<h3>Your Meals</h3>"

	let linebr = document.createElement("br")
	let another = document.createElement("br")
	let thirdbr = document.createElement("br")
	let fff = document.createElement("br")
	let c = document.createElement("br")

	let height = userObj.height / 100
	let weight = userObj.weight
	let bmiCalc = weight / (height * height)


	let muscleButton = document.createElement("button")
	let dietButton = document.createElement("button")

	userHeight.innerHTML = `Height: ${height} metres <br></br>`
	userWeight.innerHTML = `Weight: ${weight} kg <br></br>`
	userAge.innerHTML = `Age: ${userObj.age} <br></br>`
	userGender.innerHTML = `Gender: ${userObj.gender} <br></br>`
	userEthnicity.innerHTML = `Ethnic Background: ${userObj.ethnicity} <br></br>`
	email.innerHTML = `Please go to ${userObj.email} to confirm your details <br></br>`

	dietButton.innerHTML = `Create a diet plan`
	dietButton.className = "button"
	dietButton.setAttribute("id", "diet-btn")

	muscleButton.innerHTML = `Create a workout`
	muscleButton.className = "button"
	muscleButton.setAttribute("id", "muscle-btn")


	///conditional to render the BMI of the person
	if (bmiCalc < 18) {
		bmi.innerHTML = `Your BMI is ${bmiCalc.toFixed(2)}. You are underweight. <br></br>`
	} else if (bmiCalc >= 18 && bmiCalc <= 25) {
		bmi.innerHTML = `Your BMI is ${bmiCalc.toFixed(2)}. You are at a healthy weight. <br></br>`
	} else if (bmiCalc > 25 && bmiCalc <= 30) {
		bmi.innerHTML = `Your BMI is ${bmiCalc.toFixed(2)}. You are overweight. <br></br>`
	} else {
		bmi.innerHTML = `Your BMI is ${bmiCalc.toFixed(2)}. You are obese.<br></br>`
	}


	//conditionals based on gender to calculate Basal Metabolic rate
	if (userAge.gender === "Male") {
		let bmrCal = 66.47 + (13.7 * userObj.weight) + (5 * userObj.height) - (6.8 * userObj.age)
		bmr.innerHTML = `Your Basal Metabolic Rate(BMR) is ${bmrCal.toFixed(2)} cal. This is the number of calories you need throughout the day currently.`
	} else {
		let bmrCal = 655.1 + (9.6 * userObj.weight) + (1.8 * userObj.height) - (4.7 * userObj.age)
		bmr.innerHTML = `Your Basal Metabolic Rate(BMR) is ${bmrCal.toFixed(2)} cal. This is the number of calories you need throughout the day currently.`

	}


	userContainer.append(userHeight)
	userContainer.append(userWeight)
	userContainer.append(userAge)
	userContainer.append(userGender)
	userContainer.append(userEthnicity)
	userContainer.append(email)
	userContainer.append(bmi)
	userContainer.append(bmr)



	userContainer.append(linebr)
	userContainer.append(another)


	userContainer.append(muscleButton)

	userContainer.append(thirdbr)
	userContainer.append(fff)

	userContainer.append(dietButton)

	userContainer.append(workoutList)
	userContainer.append(c)
	userContainer.append(mealsList)


	//event listener for the button to render muscle groups
	muscleButton.addEventListener("click", () => {

		userInfo.innerHTML = ""
		//document.querySelector('#w-form').style.display = 'block'
		mealForm.style.display = 'none' //meal-form


		fetchMuscles()
			.then((arrayMuscle) => getEachMuscle(arrayMuscle))
	})

	//event listener for the button to render the diets

	dietButton.addEventListener("click", () => {

		userInfo.innerHTML = ""

		//document.querySelector('#m-form').style.display = 'block' //meal-form
		workoutForm.style.display = 'none' //workout form

		fetchDiets()
			.then((arrayDiet) => getEachDiet(arrayDiet))

	})
}