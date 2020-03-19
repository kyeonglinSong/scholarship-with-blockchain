package kr.ac.becaforschool.web.dto.usersDto;

import kr.ac.becaforschool.domain.users.Employees;
import kr.ac.becaforschool.domain.users.Students;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Collections;
import java.util.List;


@Getter
@NoArgsConstructor
public class EmployeesSaveRequestDto {

    private String userId;
    private String password;
    private String name;
    private String university;
    private String position;
    private List<String> role;

    @Builder
    public EmployeesSaveRequestDto(String userId, String password, String name, String university, String position){
        this.userId = userId;
        this.password = "{noop}" + password;
        this.name = name;
        this.university = university;
        this.position = position;
        this.role = Collections.singletonList("ADMIN");
    }

    public Employees toEntity() {
        return Employees.builder()
                .userId(userId)
                .password("{noop}" + password)
                .name(name)
                .university(university)
                .position(position)
                .role(Collections.singletonList("ADMIN"))
                .build();

    }
}
