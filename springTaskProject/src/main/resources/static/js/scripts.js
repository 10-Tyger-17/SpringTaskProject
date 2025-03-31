document.addEventListener("DOMContentLoaded", function () {
    fetch("/tasks")
        .then(response => response.json())
        .then(data => {
            console.log("Recieved Data: ", data)
            displayData(data);
        })
        .catch(error => console.error("Error fetching data, "+error));
});

function displayData(items){
    const list=document.getElementById("list");
    list.innerHTML="";

    items.forEach(item=>{
        const li=document.createElement("li");
        li.textContent = `Name: ${item.name}, ID: ${item.id}, Description: ${item.description}, Date: ${item.due_date}, Priority: ${item.priority}`;
        list.appendChild(li);
    });
}