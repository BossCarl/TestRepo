package com.teamc.teamcid.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.teamc.teamcid.model.user;
import com.teamc.teamcid.repository.UserRepository;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;


@RestController
public class UserController {

   @Autowired
   private UserRepository userRepository;

   @PostMapping("/testuser")
   user newUser(@RequestBody user newUser) {
    return userRepository.save(newUser);

   }
   
}
