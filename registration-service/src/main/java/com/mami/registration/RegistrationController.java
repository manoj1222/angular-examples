package com.mami.registration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping({"/userDetails"})
@CrossOrigin("*")
public class RegistrationController {
	
	@Autowired
	private RegistrationService registrationService;
	
	@GetMapping("/allUsers")
	@ApiOperation(value = "Finds all registered users",
					notes = "Provide nothing cause it takes nothing",
					response = List.class)
	public List<User> getUsers() {
		return registrationService.getUsers();
	}
	
	@PostMapping("/register")
	public String addUser(@RequestBody User user) {
		return registrationService.addUser(user);
	}
	
	@GetMapping("/searchByEmail/{email}")
	public List<User> getUserByEmail(@PathVariable String email) {
		return registrationService.getUserByEmail(email);
	}
	
	@DeleteMapping("/deleteUser/{userId}")
	public List<User> deleteUser(@PathVariable int userId) {
		registrationService.deleteUser(userId);
		return getUsers();
	}

}
