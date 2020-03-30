package kr.ac.becaforfoundation.web.dto.usersDto;

import kr.ac.becaforfoundation.domain.users.Employees;
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
    private String foundation;
    private String position;
    private List<String> role;

    @Builder
    public EmployeesSaveRequestDto(String userId, String password, String name, String foundation, String position){
        this.userId = userId;
        this.password = "{noop}" + password;
        this.name = name;
        this.foundation = foundation;
        this.position = position;
        this.role = Collections.singletonList("ADMIN");
    }

    public Employees toEntity() {
        return Employees.builder()
                .userId(userId)
                .password("{noop}" + password)
                .name(name)
                .foundation(foundation)
                .position(position)
                .role(Collections.singletonList("ADMIN"))
                .build();

    }
}
