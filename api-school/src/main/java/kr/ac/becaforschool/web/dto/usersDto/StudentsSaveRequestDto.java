package kr.ac.becaforschool.web.dto.usersDto;

import kr.ac.becaforschool.domain.users.Students;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

@Getter
@NoArgsConstructor
public class StudentsSaveRequestDto {

    private String userId;
    private String password;
    private String name;
    private String university;
    private String studentId;
    private String college;
    private String major;
    private Long grade;
    private Integer completeSemester;
    private Integer tuition;
    private List<String> role;

    @Builder
    public StudentsSaveRequestDto(String userId, String password, String name, String university, String studentId, String college, String major,
                                  Long grade, Integer completeSemester, Integer tuition){
        this.userId = userId;
        this.password = "{noop}" + password;
        this.name = name;
        this.university = university;
        this.studentId = studentId;
        this.college = college;
        this.major = major;
        this.grade = grade;
        this.completeSemester = completeSemester;
        this.tuition = tuition;
        this.role = Collections.singletonList("STUDENT");
    }

    public Students toEntity() {
        return Students.builder()
                .userId(userId)
                .password("{noop}" + password)
                .name(name)
                .university(university)
                .studentId(studentId)
                .college(college)
                .major(major)
                .grade(grade)
                .completeSemester(completeSemester)
                .tuition(tuition)
                .role(Collections.singletonList("STUDENT"))
                .build();

    }
}
