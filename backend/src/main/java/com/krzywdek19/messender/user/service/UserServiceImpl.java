package com.krzywdek19.messender.user.service;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.UserRepository;
import com.krzywdek19.messender.user.dto.CredentialsDto;
import com.krzywdek19.messender.user.dto.SignUpDto;
import com.krzywdek19.messender.user.dto.UserDto;
import com.krzywdek19.messender.user.exception.AppException;
import com.krzywdek19.messender.user.mapper.UserMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService{
    private final UserRepository repository;
    private final UserMapper userMapper;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDto getAuthenticatedUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto currentUser = (UserDto) authentication.getPrincipal();
        return currentUser;
    }
    @Override
    public UserDto findByLogin(String login) {
        var user = repository.findByEmail(login)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(user);
    }

    public UserDto login(CredentialsDto credentialsDto){
        var user = repository.findByEmail(credentialsDto.getEmail())
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if(passwordEncoder.matches(CharBuffer.wrap(credentialsDto.getPassword()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }

        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);
    }

    public UserDto register(SignUpDto userDto){
        Optional<User> optionalUser = repository.findByEmail(userDto.getEmail());
        if(optionalUser.isPresent()){
            throw new AppException("Email is taken", HttpStatus.BAD_REQUEST);
        }
        User user = userMapper.signUpToUser(userDto);
        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.getPassword())));
        User savedUser = repository.save(user);
        return userMapper.toUserDto(savedUser);
    }

    @Override
    public List<UserDto> findNoFriendUsers() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        UserDto userDto = (UserDto) authentication.getPrincipal();
        User user = repository.findByEmail(userDto.getEmail()).orElseThrow(()-> new AppException("Internal Error", HttpStatus.INTERNAL_SERVER_ERROR));
        var users = repository.findAll();
        users.remove(user);
        return users.stream().filter(guest -> !isFriend(user,guest)).map(userMapper::toUserDto).toList();
    }

    private boolean isFriend(User user, User guest){
        return user.getFriends().contains(guest);
    }
}
