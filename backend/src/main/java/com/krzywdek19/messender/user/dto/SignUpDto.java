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
public class SignUpDto {
    private long id;
    private String name;
    private String lastName;
    private char[] password;
    private char[] confirmPassword;
    private String email;
    private LocalDate birthDate;
}
