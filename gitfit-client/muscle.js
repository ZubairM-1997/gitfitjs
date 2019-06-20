let workoutForm = document.querySelector(".workout-form")
workoutForm.style.display = 'none'

function getEachMuscle(arrayMuscle) {
	arrayMuscle.forEach((muscleObj) => renderMuscle(muscleObj))

}



//renders the muscleObj, displays picture an name
function renderMuscle(muscleObj) {
	let muscleDiv = document.createElement("div")
	let muscleName = document.createElement("button")
	let muscleImage = document.createElement("span")

	let linebreak = document.createElement("br")
	let br = document.createElement("br")


	muscleImage.innerHTML = `<img class="picture" src=${muscleObj.image}>`
	muscleImage.setAttribute("id", `num-${muscleObj.id}`)

	muscleName.innerHTML = `${muscleObj.name}`
	muscleName.setAttribute("class", "button")

	muscleDiv.appendChild(muscleName)
	muscleDiv.appendChild(muscleImage)
	muscleDiv.appendChild(linebreak)
	muscleDiv.appendChild(br)

	userInfo.append(muscleDiv)

	muscleName.addEventListener("click", () => muscleButtonEvent(muscleObj))
	//muscleButtonEvent is on workout.js
}














