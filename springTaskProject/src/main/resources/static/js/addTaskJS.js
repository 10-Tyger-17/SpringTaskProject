const buttonBack=document.getElementById("backButton");
const buttonAddTask=document.getElementById("buttonSubmitTask");

buttonBack.addEventListener("click",function(){
    window.open("/", "_self", "width=400,height=400");
});

buttonAddTask.addEventListener("click",function(event){
    const formData = new FormData(event.target);
    const data = {
      name: formData.get('name'),
      description: formData.get('description'),
      due_date: formData.get('due_date'),
      priority: formData.get('priority')
    };
  
    fetch('http://localhost:8080/api/addTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    .then(response => response.json())
    .then(data => {
        console.log("Recieved Data: ", data)
        displayData(data);
    })
    
    .catch(error => console.error("Error fetching data, "+error));
});