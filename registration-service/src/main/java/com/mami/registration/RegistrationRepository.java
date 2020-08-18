package com.mami.registration;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RegistrationRepository extends JpaRepository<User, Integer> {

	List<User> getUserByEmail(String email);

}
