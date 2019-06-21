


mealForm.addEventListener("submit", (event) => {
	event.preventDefault()

	mealData()
})

function dietButtonEvent(dietObj){
	if (mealForm.style.display == 'none'){
		mealForm.style.display = 'block'

		mealForm.scrollIntoView({behavior: "smooth"})
	} else {
		mealForm.style.display = 'none'
	}

	let dietMealNameEl = document.querySelector("#meal-type")
	dietMealNameEl.innerText = `You are now creating a meal for ${dietObj.name}`

	let dietMealHiddeneL = document.querySelector("#meal-type-id")
	dietMealHiddeneL.value = dietObj.id


}


function mealData() {

	let nameInput = mealForm.querySelector("#meal_name")
	let calorieInput = mealForm.querySelector("#calories")
	let ingredientInput = mealForm.querySelector("#ingredients")
	let dietId = mealForm.querySelector("#meal-type-id")

	let mealObj = {
		diet_id: dietId.value,
		user_id: currentUser.id,
		name: nameInput.value,
		calories: calorieInput.value,
		ingredients: ingredientInput.value
	}

	addMeals(mealObj)
	document.getElementById("m-form").reset()


}

function addMeals(mealObj) {
	return mealToServer(mealObj)
		.then(meal => renderMeal(meal))
}



function mealToServer(mealObj) {
	return fetch(mealURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(mealObj)
	}).then((resp) => resp.json())

}



renderMeal = (mealObj) => {


	let listMeals = document.querySelector("#list-meals")

	let mealName = document.createElement("h3")
	let mealCalories = document.createElement("span")
	let mealIngr = document.createElement("span")
	let deleteMeal = document.createElement("button")

	deleteMeal.setAttribute("class", "button")

	let br = document.createElement("br")
	let a = document.createElement("br")
	let b = document.createElement("br")
	let c = document.createElement("br")

	mealName.innerHTML = `Name: ${mealObj.name}`
	mealCalories.innerHTML = `Calories: ${mealObj.calories}`
	mealIngr.innerHTML = `Ingredients: ${mealObj.ingredients}`
	deleteMeal.innerText = "Delete Meal"
	deleteMeal.setAttribute("id", `meal-${mealObj.id}`)

	listMeals.append(br)
	listMeals.append(mealName)
	listMeals.append(a)
	listMeals.append(mealCalories)
	listMeals.append(b)
	listMeals.append(mealIngr)
	listMeals.append(c)
	listMeals.append(deleteMeal)

	deleteMeal.addEventListener("click", (e) => {
		e.preventDefault()

		deleteMealFromServer(mealObj)


		br.remove()
		mealName.remove()
		a.remove()
		mealCalories.remove()
		b.remove()
		mealIngr.remove()
		c.remove()
		deleteMeal.remove()


	})

}

function deleteMealFromServer(mealObj){
	return fetch(mealURL + `/${mealObj.id}`,{
		method: "DELETE"
	})
}


let modalContent = document.querySelector("#mealmodal-content")

function showRelevantMeals(mealObj){

	let nameOfMeal = document.createElement("p")
	let calorieCount = document.createElement("p")
	let ingredients = document.createElement("p")

	nameOfMeal.innerHTML = `Name: ${mealObj.name}`
	calorieCount.innerHTML = `Calories: ${mealObj.calories}`
	ingredients.innerHTML = `Ingredients: ${mealObj.ingredients}`

	modalContent.append(nameOfMeal)
	modalContent.append(calorieCount)
	modalContent.append(ingredients)

}

let closeMealBtn = document.getElementById("meal-close")

closeMealBtn.addEventListener("click", () => {
	mealModal.style.display = "none";
})

window.addEventListener("click", () => {
	mealModal.style.display = "none";
})