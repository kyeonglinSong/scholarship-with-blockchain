/*
SPDX-License-Identifier: Apache-2.0
*/
package org.example;

import java.util.ArrayList;
import java.util.List;
//import java.util.logging.Logger;

import org.hyperledger.fabric.contract.Context;
import org.hyperledger.fabric.contract.ContractInterface;
import org.hyperledger.fabric.contract.annotation.Contract;
import org.hyperledger.fabric.contract.annotation.Default;
import org.hyperledger.fabric.contract.annotation.Info;
import org.hyperledger.fabric.contract.annotation.License;
import org.hyperledger.fabric.contract.annotation.Transaction;
import org.hyperledger.fabric.shim.ChaincodeStub;



@Contract(name = "org.scholarnet.scholarContract", info = @Info(title = "Scholar Contract", description = "", version = "0.0.1", license = @License(name = "SPDX-License-Identifier: ", url = "")))
@Default
public class ScholarContract implements ContractInterface {

    // use the classname for the logger, this way you can refactor
    //private final static Logger LOG = Logger.getLogger(ScholarContract.class.getName());

    @Override
    public Context createContext(ChaincodeStub stub) {
        return new ScholarContext(stub);
    }

    public ScholarContract() {
        
    }

    @Transaction()
    public void initLedger(ScholarContext ctx) {
        Scholarship scholarship = Scholarship.createInstance("GENESIS SCHOLARSHIP", "", "", 
        "", "S000000", 0, 0, 0, 0, "", 0, 0, "GENESIS");
        ctx.scholarList.addScholarship(scholarship); 

        Applying applying = Applying.createInstance("A000000", "", "GENESIS APPLYING", "", 
        "", "", "", 0, 0, 0, scholarship, "GENESIS");
        ctx.applyingList.addApplying(applying);
        
    }

    /**
     * 1. enroll scholarship 
     * 장학금 등록
     *
     * @param {Context} ctx the transaction context
     * @param {String} scholarshipId
     * @param {String} scholarshipName
     * @param {String} semester
     * @param {String} maturityDateTime
     * @param {String} foundation
     * @param {Integer} faceValue 
     * @param {Integer} semesterLimitMin
     * @param {Integer} semesterLimitMax
     * @param {Float} gradeLimit
     * @param {String} majorLimit
     * @param {Integer} totalNum
     */
    @Transaction
    public Scholarship enrollScholarship(ScholarContext ctx, String scholarshipName, String semester, String maturityDateTime, 
    String foundation, int faceValue, int semesterLimitMin, int semesterLimitMax, 
    float gradeLimit, String majorLimit, int totalNum) {

       
        Scholarship initialScholarship = ctx.scholarList.getScholarship("S000000");
        int serial = initialScholarship.getTotalNum() + 1;
        
        String scholarshipId = String.format("S%06d", serial);

        // create an instance of the paper
        Scholarship scholarship = Scholarship.createInstance(scholarshipName, semester, maturityDateTime, 
        foundation, scholarshipId, faceValue, semesterLimitMin, semesterLimitMax, gradeLimit, majorLimit, totalNum, 0, "");

        // 장학금을 processing 상태로 만듦
        scholarship.setProcessing();

        // world state
        ctx.scholarList.addScholarship(scholarship);
        initialScholarship.setTotalNum(initialScholarship.getTotalNum()+1);
        ctx.scholarList.updateScholarship(initialScholarship);
        // Must return a serialized scholarship
        return scholarship;
    }

    /**
     * 2. apply to scholarship
     * 장학금에 지원
     *
     * @param {Context} ctx the transaction context
     * @param {String} applyingId
     * @param {String} semester
     * @param {String} name
     * @param {String} studentId
     * @param {String} university
     * @param {String} college     
     * @param {String} major
     * @param {Integer} completeSemester
     * @param {Float} grade
     * @param {Integer} tuition
     * @param {String} scholarshipId
     */
    @Transaction
    public Applying applyToScholarship(ScholarContext ctx, String semester, String name, String studentId, 
    String university, String college, String major, int completeSemester, float grade, int tuition, 
    String scholarshipId) {

        // scholarship 불러옴. 없으면 에러
        // 후에 이름으로 장학금 찾는 함수 추가
        String scholarshipKey = Scholarship.makeKey(new String[] { scholarshipId });
        Scholarship scholarship = ctx.scholarList.getScholarship(scholarshipKey);
        if (scholarship == null) {
            throw new RuntimeException("장학금 번호 " + scholarship + "는 존재하지 않는 장학금 번호입니다.");
        }
        
        Applying initialApplying = ctx.applyingList.getApplying("A000000");
        int serial = initialApplying.getTuition() + 1;
        String applyingId = String.format("A%06d", serial);

        // applying 객체 생성
        Applying applying = Applying.createInstance(applyingId, semester, name, studentId, 
        university, college, major, completeSemester, grade, tuition, 
        scholarship, "");

        // 디폴트 상태 APPLYDONE. 만약 if 조건에 하나라도  걸리면 state를 RETURNED로 변환.
        // 성적 조건, 등록금액 조건, 학기 조건
        applying.setApplyDone();

        final float gradeLimit = scholarship.getGradeLimit();
        final int maxValue = scholarship.getFaceValue();
        final int semesterLimitMin = scholarship.getSemesterLimitMin();
        final int semesterLimitMax = scholarship.getSemesterLimitMax();


        // 이미 지원한 학생이면 returned
        if (isAlreadyApply(ctx, scholarshipId, university, studentId)) {
            applying.setReturned()
            ;
        }

        // 지원조건, 마감일자 확인
        if ((gradeLimit > grade)
            || (maxValue > tuition)
            || (semesterLimitMax < completeSemester || completeSemester < semesterLimitMin)
            || !scholarship.isProcessing()) {
            applying.setReturned();
        }
    
        // world state에 반영
        ctx.applyingList.addApplying(applying);
        initialApplying.setTuition(initialApplying.getTuition()+1);
        ctx.applyingList.updateApplying(initialApplying);

        // serialized applying 반환
        return applying;
    }

    // 
    /**
     * 3. close scholarship 
     * 지원자 선발/선발취소
     *
     * @param {Context} ctx the transaction context
     * @param {String} applyingId
     */
    @Transaction
    public Applying updateSelection(ScholarContext ctx, String applyingId) {
        
        // 지원id로 지원 불러오기, 없으면 에러
        String applyingKey = Applying.makeKey(new String[] { applyingId });
        Applying applying = ctx.applyingList.getApplying(applyingKey);
        if (applying == null) {
            throw new RuntimeException("지원번호 " + applying + "는 존재하지 않는 지원번호 입니다.");
        }


        // 장학금 최대 인원수 불러옴
        String scholarshipKey = Scholarship.makeKey(new String[] { applying.getScholarship().getScholarshipId() });
        Scholarship scholarship = ctx.scholarList.getScholarship(scholarshipKey);
        int totalNum = scholarship.getTotalNum();
        int currentNum = scholarship.getCurrentNum();

        // 지원자 상태 변경
        final String nowState = applying.getState();
        if (nowState.equals("APPLYDONE") || nowState.equals("UNSELECTED")) {
            // 최대 선발인원을 넘지 않았다면 선발
            if (totalNum > currentNum) {
                applying.setSelected();
                currentNum += 1;
            } else {
                // 최대 선발인원이 넘었다면
                throw new RuntimeException("이미 최대 선발인원만큼 선발했습니다.");
            }
        } else if (nowState.equals("SELECTED")) {
            applying.setUnselected();
            currentNum -= 1;
        }
        
        // world state에 상태 반영
        scholarship.setCurrentNum(currentNum);
        ctx.scholarList.updateScholarship(scholarship);
        ctx.applyingList.updateApplying(applying);

        return applying;

    }

    /**
    * 4. modify scholarship Info
    * 장학금 정보 수정
    *
    * @param {Context} ctx the transaction context
    * @param {String} scholarshipId
    */
   @Transaction
   public Scholarship updateScholarship (ScholarContext ctx, String scholarshipName, String semester, String maturityDateTime, 
   String foundation, int faceValue, int semesterLimitMin, int semesterLimitMax, 
   float gradeLimit, String majorLimit, int totalNum, String scholarshipId) {
       //장학금 불러옴
       String scholarshipKey = Scholarship.makeKey(new String[] { scholarshipId });
       Scholarship scholarship = ctx.scholarList.getScholarship(scholarshipKey);
       if (scholarship == null) {
           throw new RuntimeException("장학금 번호 " + scholarship + "는 존재하지 않는 장학금 번호입니다.");
       }

       // processing 상태가 아니라면 에러
       if (!scholarship.isProcessing()) {
           throw new RuntimeException("해당 장학금은 이미 종료된 상태입니다.");
       }

       scholarship.setScholarshipName(scholarshipName);
       scholarship.setSemester(semester);
       scholarship.setMaturityDateTime(maturityDateTime);
       scholarship.setFaceValue(faceValue);
       scholarship.setFoundation(foundation);
       scholarship.setSemesterLimitMax(semesterLimitMax);
       scholarship.setSemesterLimitMin(semesterLimitMin);
       scholarship.setTotalNum(totalNum);

       scholarship.setMajorLimit(majorLimit);
       ctx.scholarList.updateScholarship(scholarship);
       return scholarship;
   }

    /**
    * 5. finish Scholarship 
    * 지원자 선정 종료
    *
    * @param {Context} ctx the transaction context
    * @param {String} scholarshipId
    */
   @Transaction
   public Scholarship finishScholarship (ScholarContext ctx, String scholarshipId) {
       //장학금 불러옴
       String scholarshipKey = Scholarship.makeKey(new String[] { scholarshipId });
       Scholarship scholarship = ctx.scholarList.getScholarship(scholarshipKey);

       // processing 상태라면 finished로
       if (scholarship.getState().equals("PROCESSING")) {
            scholarship.setFinished();
       } else {
           throw new RuntimeException("해당 장학금은 이미 만료되었습니다.");
       }
       
       ctx.scholarList.updateScholarship(scholarship);
       return scholarship;
   }


    /**
    * 7. read all scholarships
    * 모든 장학금 쿼링 
    *
    * @param {Context} ctx the transaction context
    */
    @Transaction
    public Scholarship[] readAllScholarships(ScholarContext ctx) {
        
        int lastNum = ctx.scholarList.getScholarship("S000000").getTotalNum();
        List<Scholarship> tempList = new ArrayList<Scholarship>();
        for (int i=1 ; i<=lastNum ; i++) {
			int serial = i;
            String scholarshipId = String.format("S%06d", serial);
            String scholarshipKey = Scholarship.makeKey(new String[] { scholarshipId });
            Scholarship scholarship = ctx.scholarList.getScholarship(scholarshipKey);
            if (scholarship == null) break;
            
            tempList.add(scholarship);
        }
        
        Scholarship[] result = tempList.toArray(new Scholarship[tempList.size()]);
        return result;

    }


    /**
    * 8. read a scholarship
    * 장학금 하나 쿼링 
    *
    * @param {Context} ctx the transaction context
    * @param {String} scholarshipId
    */
    @Transaction
    public Scholarship readScholarship(ScholarContext ctx, String scholarshipId) {
        String scholarshipKey = Scholarship.makeKey(new String[] { scholarshipId });
        Scholarship scholarship = ctx.scholarList.getScholarship(scholarshipKey);
        if (scholarship == null) {
            //throw new RuntimeException("해당 번호의 장학금은 존재하지 않습니다. ");
            return null;
        }
        return scholarship;
    }

  /**
    * 9. read all Applyings by scholarshipId
    * 해당 장학금의 모든 유효한 지원 쿼링 
    *
    * @param {Context} ctx the transaction context
    * @param {String} scholarshipId
  */  
    @Transaction
    public Applying[] readAllApplyingsbyScholarship(ScholarContext ctx, String scholarshipId) {
        int lastNum = ctx.applyingList.getApplying("A000000").getTuition();
        List<Applying> tempList = new ArrayList<Applying>();
        for (int i=1 ; i<=lastNum ; i++) {
			int serial = i;
            String applyingId = String.format("A%06d", serial);
            String applyingKey = Applying.makeKey(new String[] { applyingId });
            Applying applying = ctx.applyingList.getApplying(applyingKey);
            // 지원 장학금과 해당 장학금이 일치하고, 지원상태가 APPLYDONE 이라면 리스트에 추가.
            if (applying.getScholarship().getScholarshipId().equals(scholarshipId)
                && applying.getState().equals("APPLYDONE")) {
                tempList.add(applying);
            } 
        }
        
        Applying[] result = tempList.toArray(new Applying[tempList.size()]);
        return result;
    }

    

    /**
    * 10. read all Applyings with studentInfo
    * 해당 학생의 모든 지원 쿼링
    *
    * @param {Context} ctx the transaction context
    * @param {String} university
    * @param {String} studentId
    */

    @Transaction
    public Applying[] readAllApplyingsbyStudent(ScholarContext ctx, String university, String studentId) {
       
        int lastNum = ctx.applyingList.getApplying("A000000").getTuition();
        List<Applying> tempList = new ArrayList<Applying>();
        for (int i=1 ; i<=lastNum ; i++) {
			int serial = i;
            String applyingId = String.format("A%06d", serial);
            String applyingKey = Applying.makeKey(new String[] { applyingId });
            Applying applying = ctx.applyingList.getApplying(applyingKey);
            if (applying == null) {
                break;
            }
            if (applying.getStudentId().equals(studentId) && applying.getUniversity().equals(university)) {
                tempList.add(applying);
            } 
        }
        
        Applying[] result = tempList.toArray(new Applying[tempList.size()]);
        return result;
    }

    
        /** 
    * 14. 
    * 중복지원여부 확인
    *
    * @param {Context} ctx the transaction context
    * @param {String} scholarshipName
    * @param {String} semester
    */
    @Transaction
    public boolean isAlreadyApply(ScholarContext ctx, String scholarshipId, String university, String studentId) {
        
        boolean result = false;
        int lastNum = ctx.applyingList.getApplying("A000000").getTuition();
        for (int i=1 ; i<=lastNum ; i++) {
			int serial = i;
            String applyingId = String.format("A%06d", serial);
            String applyingKey = Applying.makeKey(new String[] { applyingId });
            Applying applying = ctx.applyingList.getApplying(applyingKey);
            if (applying == null) {
                break;
            }
            if (applying.getStudentId().equals(studentId) && applying.getUniversity().equals(university) 
            && applying.getScholarship().getScholarshipId().equals(scholarshipId)) {
                result = true;
            } 
        }
    
        return result;
    }
    

}


