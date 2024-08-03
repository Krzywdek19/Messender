package com.krzywdek19.messender.user.controller;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.dto.UserDto;
import com.krzywdek19.messender.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService service;

    @GetMapping("/me")
    public ResponseEntity<UserDto> getAuthenticatedUser(){
        return ResponseEntity.ok(service.getAuthenticatedUser());
    }

    @GetMapping("/nofriends")
    public ResponseEntity<List<UserDto>> getNoFriends(){
        return ResponseEntity.ok(service.findNoFriendUsers());
    }
}
