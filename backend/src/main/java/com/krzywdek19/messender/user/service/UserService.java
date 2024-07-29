package com.krzywdek19.messender.user.service;

import com.krzywdek19.messender.user.dto.UserDto;

public interface UserService {
    UserDto findByLogin(String login);
}
