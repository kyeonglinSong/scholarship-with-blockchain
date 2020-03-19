package kr.ac.becaforschool.web.dto.usersDto;

import kr.ac.becaforschool.domain.users.Students;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class StudentsLoginRequestDto {

    private String userId;
    private String password;

    @Builder
    public StudentsLoginRequestDto(String userId, String password){
        this.userId = userId;
        this.password = password;
    }

}
