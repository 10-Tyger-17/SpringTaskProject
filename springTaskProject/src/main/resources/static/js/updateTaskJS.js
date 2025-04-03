document.addEventListener("DOMContentLoaded", function () {
    fetch("/api/showTasks")
        .then(response => response.json())
        .then(data => {
            console.log("Recieved Data: ", data)
            displayData(data);
            fillForm(data[0]);
        })
        .catch(error => console.error("Error fetching data, "+error));

    
    const buttonSubmitTask = document.getElementById("buttonSubmitTask");
    const buttonBack = document.getElementById("backButton");
    const combobox=document.getElementById("taskPicker");

    buttonBack.onclick = function() {
        window.open("/", "_self");
    }

    buttonSubmitTask.onclick = function() {
        const combobox = document.getElementById("taskPicker");
        const selectedValue = combobox.value;
        console.log("Selected value: ", selectedValue);

        fetch("/api/updateTask/"+selectedValue, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: document.getElementById("fname").value,
                description: document.getElementById("fdescription").value,
                due_date: document.getElementById("fdate").value,
                priority: document.getElementById("priority").value
            })
        })
        .then(response => {
            if (response.ok) {
                console.log("Task modified successfully.");
				window.open("/", "_self");
            } else {
                console.error("Error deleting task.");
            }
        })
        .catch(error => console.error("Error fetching data, "+error));
    }

    combobox.addEventListener("change", function() {
        const selectedOption = combobox.options[combobox.selectedIndex];
        const id = selectedOption.value;

        fetch("/api/showTask/"+id)
            .then(response => response.json())
            .then(data => {
                console.log("Recieved Data: ", data)
                fillForm(data);
            })
            .catch(error => console.error("Error fetching data, "+error));
    });
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

function fillForm(data){
	document.getElementById("fname").value = data.name;
	document.getElementById("fdescription").value = data.description;
	document.getElementById("fdate").value = data.due_date;

	console.log("Priority: ", data.priority);
	switch (data.priority.toString().toUpperCase()) {
	        case 'HIGH':
	            document.getElementById("priority").selectedIndex = 0;
	            break;
	        case 'MEDIUM':
	            document.getElementById("priority").selectedIndex = 1;
	            break;
	        case 'LOW':
	            document.getElementById("priority").selectedIndex = 2;
	            break;
	        default:
	            document.getElementById("priority").value = 'error';
	            break;
	}
}