let workoutForm = document.querySelector(".workout-form")
workoutForm.style.display = 'none'

let workoutModal = document.getElementById("workout-modal")
workoutModal.style.display = "none"

function getEachMuscle(arrayMuscle) {
	arrayMuscle.forEach((muscleObj) => renderMuscle(muscleObj))

}



//renders the muscleObj, displays picture an name
function renderMuscle(muscleObj) {
	let muscleDiv = document.createElement("div")
	let muscleName = document.createElement("button")
	let muscleImage = document.createElement("span")
	let showWorkouts = document.createElement("button")

	let linebreak = document.createElement("br")
	let br = document.createElement("br")

	showWorkouts.setAttribute("class", "button")
	showWorkouts.innerText = "Show Workouts"


	muscleImage.innerHTML = `<img class="picture" src=${muscleObj.image}>`
	muscleImage.setAttribute("id", `num-${muscleObj.id}`)

	muscleName.innerHTML = `${muscleObj.name}`
	muscleName.setAttribute("class", "button")

	muscleDiv.appendChild(muscleName)
	muscleDiv.appendChild(muscleImage)
	muscleDiv.appendChild(showWorkouts)
	muscleDiv.appendChild(linebreak)
	muscleDiv.appendChild(br)

	userInfo.append(muscleDiv)

	muscleName.addEventListener("click", () => muscleButtonEvent(muscleObj))
	//muscleButtonEvent is on workout.js


	showWorkouts.addEventListener("click", (e) => {
		showAllWorkouts(muscleObj)

	})
}

function showAllWorkouts(muscleObj) {
	fetchWorkouts().then((arrayWorkouts) => {
		let arrayOfWorkouts = arrayWorkouts.filter(workout => workout.musclegroup_id === muscleObj.id)

		workoutmodalContent.innerHTML = ""

		sendWorkouts(arrayOfWorkouts)

		if (workoutModal.style.display == "none") {
			workoutModal.style.display = "block"
		} else {
			workoutModal.style.display = "none"
		}


	})
}

function sendWorkouts(arrayOfWorkouts){
	arrayOfWorkouts.forEach((workoutObj) => showRelevantWorkouts(workoutObj))
}











