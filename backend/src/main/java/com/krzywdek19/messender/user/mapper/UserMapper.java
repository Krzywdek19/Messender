package com.krzywdek19.messender.user.mapper;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.dto.SignUpDto;
import com.krzywdek19.messender.user.dto.UserDto;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserDto toUserDto(User user);
    User toUser(UserDto userDto);

    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto userDto);
}
