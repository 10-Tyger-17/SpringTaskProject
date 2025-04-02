document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/showTasks")
        .then(response => response.json())
        .then(data => {
            console.log("Recieved Data: ", data)
            displayData(data);
        })
        .catch(error => console.error("Error fetching data, "+error));

    buttonDeleteTask = document.getElementById("deleteTaskButton");
    buttonBack = document.getElementById("backButton");

    buttonBack.onclick = function() {
        window.open("/", "_self");
    }

    buttonDeleteTask.onclick = function() {
        const combobox = document.getElementById("taskPicker");
        const selectedValue = combobox.value;
        console.log("Selected value: ", selectedValue);

        fetch("/api/deleteTask/"+selectedValue, {
            method: "DELETE",
        })
        .then(response => {
            if (response.ok) {
                console.log("Task deleted successfully.");
                window.open("/", "_self");
            } else {
                console.error("Error deleting task.");
            }
        })
        .catch(error => console.error("Error fetching data, "+error));
    }
});

function displayData(items){
    const combobox=document.getElementById("taskPicker");
    combobox.innerHTML="";

    items.forEach(item=>{
        const option=document.createElement("option");
        option.textContent = `ID: ${item.id}, Name: ${item.name}, Description: ${item.description}, Date: ${item.due_date}, Priority: ${item.priority}`;
        option.value = item.id;
        combobox.appendChild(option);
    });
}