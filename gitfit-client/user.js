const userURL = "http://localhost:3000/users/"

const musclegroupURL = "http://localhost:3000/musclegroups"
const workoutURL = "http://localhost:3000/workouts"

const dietURL = "http://localhost:3000/diets"
const mealURL = "http://localhost:3000/meals"



//--------Selecting classes from HTML form ------------//
const userForm = document.querySelector("form")
const subheader = document.querySelector(".sub-header")

//--------Selecting ids from HTML form ------------//
const nameInput = document.querySelector("#user_name")
const ageInput = document.querySelector("#user_age")
const weightInput = document.querySelector("#user_weight")
const heightInput = document.querySelector("#user_height")
const emailInput = document.querySelector("#user_email")
const ethn = document.querySelector("#ethnicity-select")
const genderInput = document.querySelector("#gender-select")


const userContainer = document.querySelector(".usercontainer")
const userInfo = document.querySelector(".user-info")

const currentUser = {
	// please create a user in the database too
	id: 1
}


//!-------------------------Fetching data from API ---------------!//

//fetch all users
function getUsers() {
	return fetch(userURL).then((resp) => resp.json())
}

//fetch all diets
function fetchDiets() {
	return fetch(dietURL)
		.then((resp) => resp.json())
}

//fetch all muscles
function fetchMuscles() {
	return fetch(musclegroupURL)
		.then((resp) => resp.json())

}

function fetchMeals() {
	return fetch(mealURL)
		.then((resp) => resp.json())
}

function fetchWorkouts() {
	return fetch(workoutURL)
		.then((resp) => resp.json())
}

//event listener for when a user clicks submit on the form
userForm.addEventListener("submit", (event) => {
	event.preventDefault()

	let ethnicSelect = ethn.options[ethn.selectedIndex].text
	let genderSelect = genderInput.options[genderInput.selectedIndex].text

	let userObj = {
		name: nameInput.value,
		email: emailInput.value,
		weight: weightInput.value,
		height: heightInput.value,
		age: ageInput.value,
		ethnicity: ethnicSelect,
		gender: genderSelect
	}

	createUser(userObj)
	//passes the userObj to the createUser function
})


//sends the user object to the server then sends to the function that renders it
function createUser(userObj) {
	return addUserToServer(userObj).then(renderUser(userObj))
}

//adds user object to server
function addUserToServer(userObj) {
	return fetch(userURL, {
		method: 'POST',
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(userObj)
	}).then((resp) => resp.json())
}








