document.addEventListener("DOMContentLoaded", function () {
    fetch("/tasks")
        .then(response => response.json())
        .then(data => {
            console.log("Recieved Data: ", data)
            displayData(data);
        })
        .catch(error => console.error("Error fetching data, "+error));
	
	const buttonAddTask = document.getElementById("addTask");
	const buttonDeleteTask = document.getElementById("deleteTaskButton");
	const buttonUpdateTask = document.getElementById("updateTaskButton");

	buttonAddTask.onclick = function() {
		window.open("addTask", "_self", "width=400,height=400");
	}
});

function displayData(items){
    const list=document.getElementById("list");
    list.innerHTML="";

    items.forEach(item=>{
        const li=document.createElement("li");
        li.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}, Date: ${item.due_date}, Priority: ${item.priority}`;
        list.appendChild(li);
    });
}