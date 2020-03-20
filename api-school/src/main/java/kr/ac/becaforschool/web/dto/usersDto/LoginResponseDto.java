package kr.ac.becaforschool.web.dto.usersDto;

import lombok.Getter;

@Getter
public class LoginResponseDto {

    private String token;
    private String role;

    public LoginResponseDto(String token, String role) {
        this.token = token;
        this.role = role;
    }

}


