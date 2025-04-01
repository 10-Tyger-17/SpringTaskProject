const buttonBack=document.getElementById("backButton");
const buttonAddTask=document.getElementById("buttonSubmitTask");

buttonBack.addEventListener("click",function(){
    window.open("/", "_self", "width=400,height=400");
});

buttonAddTask.addEventListener("click",function(event){
	event.preventDefault();
	const form = event.currentTarget.form;
	const formData = new FormData(form);
	
    const data = {
      name: formData.get('fname'),
      description: formData.get('fdescription'),
      due_date: formData.get('fdate'),
      priority: formData.get('priority').toUpperCase()
    };
  
    fetch('/api/addTask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    .then(response => response.json())
    .then(data => {
        console.log("Recieved Data: ", data)
		window.open("/", "_self");
    })
    
    .catch(error => console.error("Error fetching data, "+error));
});