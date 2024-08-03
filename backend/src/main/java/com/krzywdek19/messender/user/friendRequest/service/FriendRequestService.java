package com.krzywdek19.messender.user.friendRequest.service;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.friendRequest.FriendRequest;

import java.util.List;

public interface FriendRequestService {
     FriendRequest createRequest( User receiver);
}
