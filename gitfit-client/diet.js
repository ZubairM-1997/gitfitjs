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

	dietButton.setAttribute("class", "button")
	dietButton.setAttribute("id", `${dietObj.id}`)

	dietDescription.setAttribute("class", "desc")

	let linebreak = document.createElement("br")
	let br = document.createElement("br")
	let brrt = document.createElement("br")

	dietButton.innerHTML = `${dietObj.name}`
	dietDescription.innerHTML = `${dietObj.description}`

	dietDiv.append(dietButton)


	dietDiv.append(dietDescription)
	dietDiv.append(linebreak)
	dietDiv.append(br)
	dietDiv.append(brrt)

	userInfo.append(dietDiv)

	dietButton.addEventListener('click', (event) => dietButtonEvent(dietObj))
	//dietButtonEvent is on meal.js

}
















