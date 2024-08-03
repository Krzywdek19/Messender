package com.krzywdek19.messender.user.service;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.dto.CredentialsDto;
import com.krzywdek19.messender.user.dto.SignUpDto;
import com.krzywdek19.messender.user.dto.UserDto;

import java.util.List;

public interface UserService {
    UserDto getAuthenticatedUser();
    UserDto findByLogin(String login);
    UserDto login(CredentialsDto credentialsDto);
    UserDto register(SignUpDto userDto);
    List<UserDto> findNoFriendUsers();
}
