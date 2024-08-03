package com.krzywdek19.messender.user.friendRequest.service;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.UserRepository;
import com.krzywdek19.messender.user.exception.AppException;
import com.krzywdek19.messender.user.friendRequest.FriendRequest;
import com.krzywdek19.messender.user.friendRequest.FriendRequestRepository;
import com.krzywdek19.messender.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

import java.util.List;

@RequiredArgsConstructor
public class FriendRequestServiceImpl implements FriendRequestService{
    private final UserService userService;
    private final UserRepository userRepository;
    private final FriendRequestRepository friendRequestRepository;

    private User getAuthUser(){
        return userRepository.findByEmail(userService.getAuthenticatedUser().getEmail()).orElseThrow(()-> new AppException("Internal error", HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Override
    public FriendRequest createRequest( User receiver) {
        var user = getAuthUser();
        return friendRequestRepository.save(FriendRequest
                .builder()
                .receiver(receiver)
                .sender(user).build());
    }


}
