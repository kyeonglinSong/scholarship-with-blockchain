package kr.ac.becaforschool.web.dto.hyperledgerDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ApplyingDto {

    private String semester;
    private String name;
    private String studentId;
    private String university;
    private String college;
    private String major;
    private int completeSemester;
    private float grade;
    private int tuition;
    private String scholarshipId;

    @Builder
    public ApplyingDto (String semester, String name, String studentId, String university, String college, String major,
                        int completeSemester, float grade, int tuition, String scholarshipId) {
        this.semester = semester;
        this.name = name;
        this.studentId = studentId;
        this.university = university;
        this.college = college;
        this.major = major;
        this.completeSemester = completeSemester;
        this.grade = grade;
        this.tuition = tuition;
        this.scholarshipId = scholarshipId;

    }
}
