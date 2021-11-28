const addingEventListener = () => {
	const input = document.getElementById("input");
	input.addEventListener("click",() => {
		alert("You have clicked the input.")
	})
}
addingEventListener();