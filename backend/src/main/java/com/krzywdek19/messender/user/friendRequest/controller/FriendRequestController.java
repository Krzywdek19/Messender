package com.krzywdek19.messender.user.friendRequest.controller;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.friendRequest.FriendRequest;
import com.krzywdek19.messender.user.friendRequest.service.FriendRequestService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.net.URISyntaxException;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users/requests")
public class FriendRequestController {
    private final FriendRequestService service;

    @PostMapping
    public ResponseEntity<FriendRequest> createFriendRequest(@RequestBody User user) throws URISyntaxException {
        FriendRequest friendRequest = service.createRequest(user);
        return ResponseEntity.created(new URI("/users/requests/" + friendRequest.getId())).body(friendRequest);
    }
}
