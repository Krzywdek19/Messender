package com.krzywdek19.messender.auth;

import com.krzywdek19.messender.config.UserAuthProvider;
import com.krzywdek19.messender.user.dto.CredentialsDto;
import com.krzywdek19.messender.user.dto.SignUpDto;
import com.krzywdek19.messender.user.dto.UserDto;
import com.krzywdek19.messender.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
@RequiredArgsConstructor
public class AuthController {
    private final UserService userService;
    private final UserAuthProvider userAuthProvider;
    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto){
        var user = userService.login(credentialsDto);
        user.setToken(userAuthProvider.createToken(user.getEmail()));
        return ResponseEntity.ok(user);
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto){
        var user = userService.register(signUpDto);
        user.setToken(userAuthProvider.createToken(user.getEmail()));
        System.out.println(user.getToken());
        return ResponseEntity.created(URI.create("/users/" + user.getId()))
                .body(user);
    }
}
