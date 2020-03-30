package kr.ac.becaforfoundation.web.dto.hyperledgerDto;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
public class ScholarshipEnrollDto {

    private String scholarshipName;
    private String semester;
    private String maturityDateTime;
    private String foundation;
    private int faceValue;
    private int semesterLimitMin;
    private int semesterLimitMax;
    private float gradeLimit;
    private String majorLimit;
    private int totalNum;


    @Builder
    public ScholarshipEnrollDto(String scholarshipName, String semester, String maturityDateTime,
                                String foundation, int faceValue, int semesterLimitMin, int semesterLimitMax,
                                float gradeLimit, String majorLimit, int totalNum) {
        this.scholarshipName = scholarshipName;
        this.semester = semester;
        this.maturityDateTime = maturityDateTime;
        this.foundation = foundation;
        this.faceValue = faceValue;
        this.semesterLimitMin = semesterLimitMin;
        this.semesterLimitMax = semesterLimitMax;
        this.gradeLimit = gradeLimit;
        this.majorLimit = majorLimit;
        this.totalNum = totalNum;
    }
}


