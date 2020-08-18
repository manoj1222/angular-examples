package com.mami.registration;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RegistrationService {
	
	@Autowired
	private RegistrationRepository repository;

	public List<User> getUsers() {
		return repository.findAll();
	}

	public String addUser(User user) {
		if(repository.save(user) != null) {
			return "New User Registration Successfully";
		}
		return "User Registration Failed";
	}

	public List<User> getUserByEmail(String email) {
		return repository.getUserByEmail(email);
	}

	public String deleteUser(int id) {
		repository.deleteById(id);
		return "User Deleted Successfully";
	}

}
