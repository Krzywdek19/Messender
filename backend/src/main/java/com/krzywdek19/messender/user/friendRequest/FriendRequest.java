package com.krzywdek19.messender.user.friendRequest;

import com.krzywdek19.messender.user.User;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class FriendRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    @ManyToOne
    private User sender;
    @ManyToOne
    private User receiver;
}
