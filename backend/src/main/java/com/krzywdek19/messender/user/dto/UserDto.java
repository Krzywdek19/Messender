package com.krzywdek19.messender.user.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;


@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data
public class UserDto {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
    private LocalDate birthDate;
    private String token;
}
