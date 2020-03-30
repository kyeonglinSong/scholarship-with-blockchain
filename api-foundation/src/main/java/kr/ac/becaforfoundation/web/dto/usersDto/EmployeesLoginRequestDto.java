package kr.ac.becaforfoundation.web.dto.usersDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class EmployeesLoginRequestDto {

    private String userId;
    private String password;

    @Builder
    public EmployeesLoginRequestDto(String userId, String password){
        this.userId = userId;
        this.password = password;
    }



}
