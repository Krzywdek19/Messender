package com.krzywdek19.messender.user.dto;

import com.krzywdek19.messender.user.User;
import com.krzywdek19.messender.user.friendRequest.FriendRequest;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserDto {
    private long id;
    private String name;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String token;
    private List<User> friends;
    private List<FriendRequest> sentRequests;
    private List<FriendRequest> receivedRequests;
}
