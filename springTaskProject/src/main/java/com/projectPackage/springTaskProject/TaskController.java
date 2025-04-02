package com.projectPackage.springTaskProject;

import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TaskController {
	@Autowired
	TaskRepository taskRespository;

	// Create
	@PostMapping("/api/addTask")
	public Task create(@RequestBody Map<String, String> body) {
		String name = body.get("name");
		String desc = body.get("description");
		LocalDate date = LocalDate.parse(body.get("due_date"));
		Priority priority = Priority.valueOf(body.get("priority"));
		return taskRespository.save(new Task(name, desc, date, priority));
	}

	// Read
	@GetMapping("/api/showTasks")
	public List<Task> index() {
		return taskRespository.findAll();
	}
	
	// Update
	@PutMapping("/tasks/{id}")
    public Task update(@PathVariable String id, @RequestBody Map<String, String> body){
        int taskId = Integer.parseInt(id);
        Optional<Task> taskFound = taskRespository.findById(taskId);
        if(taskFound.isEmpty()) {
        	return null;
        }else {
        	Task task=taskFound.get();
        	task.setName(body.get("name"));
            task.setDescription(body.get("description"));
            task.setDue_date(LocalDate.parse(body.get("due_date")));
            task.setPriority(Priority.valueOf(body.get("priority")));
            return taskRespository.save(task);
        }
    }
	
	// Delete
	@DeleteMapping("/api/deleteTask/{id}")
    public boolean delete(@PathVariable String id){
        int taskId = Integer.parseInt(id);
        taskRespository.deleteById(taskId);
        return true;
    }
}