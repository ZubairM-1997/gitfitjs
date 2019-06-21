let mealForm = document.querySelector(".meal-form")
mealForm.style.display = 'none'

let mealModal = document.getElementById("meal-modal")
mealModal.style.display = 'none'




function getEachDiet(arrayDiet) {
	arrayDiet.forEach((dietObj) => renderDiet(dietObj))
}


//renders diet object by name and description
function renderDiet(dietObj) {
	let dietDiv = document.createElement("div")
	let dietButton = document.createElement("button")
	let dietDescription = document.createElement("span")
	let showBtn = document.createElement("button")

	let relevantMeals = document.createElement("div")
	let closeBtn = document.createElement("span")

	dietButton.setAttribute("class", "button")
	dietButton.setAttribute("id", `${dietObj.id}`)

	showBtn.setAttribute("class", "button")
	showBtn.setAttribute("id", `${dietObj.id}`)



	relevantMeals.setAttribute("id", "relevant-meals")
	relevantMeals.setAttribute("class", "modal")



	dietDescription.setAttribute("class", "desc")

	let linebreak = document.createElement("br")
	let br = document.createElement("br")
	let brrt = document.createElement("br")

	let hr = document.createElement("hr")
	hr.setAttribute("class", "zig-zag")

	dietButton.innerHTML = `${dietObj.name}`
	dietDescription.innerHTML = `${dietObj.description}`
	showBtn.innerHTML = "Show Meals"

	dietDiv.append(dietButton)
	dietDiv.append(dietDescription)
	dietDiv.append(showBtn)
	dietDiv.append(hr)

	dietDiv.append(linebreak)
	dietDiv.append(br)
	dietDiv.append(brrt)



	userInfo.append(dietDiv)

	dietButton.addEventListener('click', (event) => dietButtonEvent(dietObj))
	//dietButtonEvent is on meal.js

	showBtn.addEventListener("click", (event) => {

		showAllMeals(dietObj)
	})
}




function showAllMeals(dietObj){

	fetchMeals().then((arrayMeals) => {

	let arrayOfMeals =	arrayMeals.filter(meal => meal.diet_id === dietObj.id) //returns an array of meals which has the same id as the dietObject id

	modalContent.innerHTML = ""

	sendMeals(arrayOfMeals)



	if (mealModal.style.display == "none") {
		mealModal.style.display = "block"
	} else {
		mealModal.style.display = "none"
	}

	})

}

function sendMeals(arrayOfMeals){
	arrayOfMeals.forEach((mealObj) => showRelevantMeals(mealObj))

}









