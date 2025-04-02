package com.projectPackage.springTaskProject;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GeneralController {
	@RequestMapping("/addTask")
    public String showAddTaskPage() {
        return "addTask"; 
    }
	
	@RequestMapping("/deleteTask")
    public String showDeleteTaskPage() {
        return "deleteTask"; 
    }
}
