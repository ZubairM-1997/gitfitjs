let mealForm = document.querySelector(".meal-form")
mealForm.style.display = 'none'




function getEachDiet(arrayDiet) {
	arrayDiet.forEach((dietObj) => renderDiet(dietObj))
}


//renders diet object by name and description
function renderDiet(dietObj) {
	let dietDiv = document.createElement("div")
	let dietButton = document.createElement("button")
	let dietDescription = document.createElement("span")
	let showBtn = document.createElement("button")

	dietButton.setAttribute("class", "button")
	dietButton.setAttribute("id", `${dietObj.id}`)

	dietDescription.setAttribute("class", "desc")

	let linebreak = document.createElement("br")
	let br = document.createElement("br")
	let brrt = document.createElement("br")

	dietButton.innerHTML = `${dietObj.name}`
	dietDescription.innerHTML = `${dietObj.description}`
	showBtn.innerHTML = "Show Meals"

	dietDiv.append(dietButton)


	dietDiv.append(dietDescription)
	dietDiv.append(showBtn)

	dietDiv.append(linebreak)
	dietDiv.append(br)
	dietDiv.append(brrt)

	userInfo.append(dietDiv)

	dietButton.addEventListener('click', (event) => dietButtonEvent(dietObj))
	//dietButtonEvent is on meal.js

	showBtn.addEventListener("click", (event) => showAllMeals(dietObj))

}


function showAllMeals(dietObj){
	fetchMeals().then((arrayMeals) => {
	let arrayOfMeals =	arrayMeals.filter(meal => meal.diet_id === dietObj.id)
	let listMeals = document.querySelector("#list-meals")
	listMeals.innerHTML = ""

	sendMeals(arrayOfMeals)

	})

}

function sendMeals(arrayOfMeals){
	arrayOfMeals.forEach((mealObj) => renderMeal(mealObj))
}











