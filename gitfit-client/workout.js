

workoutForm.addEventListener("submit", (event) => {
	event.preventDefault()
	workoutData()
})


function muscleButtonEvent(muscleObj) {

	if (workoutForm.style.display == `none`) {
	workoutForm.style.display = `block`

	workoutForm.scrollIntoView({behavior: "smooth"})

	} else {
		workoutForm.style.display = `none`
	}
	let muscleWorkoutNameEl = document.querySelector("#workout-type")
	muscleWorkoutNameEl.innerText = `${muscleObj.name} Workout`

	let workoutFormHiddenId = document.querySelector("#workout-type-id")
	workoutFormHiddenId.value = muscleObj.id
}




function workoutData() {


	let workoutInput = workoutForm.querySelector("#workout_name")
	let setInput = workoutForm.querySelector("#sets")
	let repInput = workoutForm.querySelector("#reps")
	let durationInput = workoutForm.querySelector("#duration")
	let workoutId = workoutForm.querySelector("#workout-type-id")


	let workoutObj = {
		user_id: currentUser.id,
		musclegroup_id: workoutId.value,
		name: workoutInput.value,
		sets: setInput.value,
		reps: repInput.value,
		duration: durationInput.value
	}

	addWorkouts(workoutObj)
	document.getElementById("w-form").reset()
}



function addWorkouts(workoutObj) {
	return workoutToServer(workoutObj)
		.then(workout => renderWorkout(workout))
}



function workoutToServer(workoutObj) {
	return fetch(workoutURL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json"
		},
		body: JSON.stringify(workoutObj)
	}).then((resp) => resp.json())

}
renderWorkout = (workoutObj) => {
	const listWorkout = document.querySelector(".workout-list")

	let workoutName = document.createElement("h3")
	let setsWorkout = document.createElement("span")
	let repsWorkout = document.createElement("span")
	let durationWorkout = document.createElement("span")

	let deleteWorkout = document.createElement("button")

	deleteWorkout.setAttribute("class", "button")

	let br = document.createElement("br")
	let a = document.createElement("br")
	let b = document.createElement("br")
	let c = document.createElement("br")
	let d = document.createElement("br")

	workoutName.innerHTML = `Name: ${workoutObj.name}`
	setsWorkout.innerHTML = `Sets: ${workoutObj.sets}`
	repsWorkout.innerHTML = `Reps: ${workoutObj.reps}`
	durationWorkout.innerHTML = `Duration: ${workoutObj.duration}`

	deleteWorkout.innerText = "Delete Workout"


	listWorkout.append(br)
	listWorkout.append(workoutName)
	listWorkout.append(a)
	listWorkout.append(setsWorkout)
	listWorkout.append(b)
	listWorkout.append(repsWorkout)
	listWorkout.append(c)
	listWorkout.append(durationWorkout)
	listWorkout.append(d)
	listWorkout.append(deleteWorkout)

	deleteWorkout.addEventListener("click", (e) => {

		e.preventDefault()

		deleteWorkoutFromServer(workoutObj)

		br.remove()
		workoutName.remove()
		a.remove()
		setsWorkout.remove()
		b.remove()
		repsWorkout.remove()
		c.remove()
		durationWorkout.remove()
		d.remove()
		deleteWorkout.remove()


	})


}

function deleteWorkoutFromServer(workoutObj){
	return fetch(workoutURL + `/${workoutObj.id}`,{
		method: "DELETE"
	})
}