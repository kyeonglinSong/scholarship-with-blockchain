/*
 * SPDX-License-Identifier:
 */

package kr.ac.becaforschool.domain.hyperledger;

import static java.nio.charset.StandardCharsets.UTF_8;

import kr.ac.becaforschool.domain.hyperledger.ledgerapi.State;
import org.hyperledger.fabric.contract.annotation.DataType;
import org.hyperledger.fabric.contract.annotation.Property;
import org.json.JSONArray;
import org.json.JSONObject;
import org.json.JSONPropertyIgnore;

import java.util.ArrayList;
import java.util.List;

@DataType()
public class Scholarship extends State {

    // Enumerate scholarship state values
    public final static String PROCESSING = "PROCESSING"; // 선발전
    public final static String FINISHED = "FINISHED";  // 산정완료
    public final static String EXPIRED = "EXPIRED";  // 최종마감

    @Property()
    private String state="";

    public String getState() {
        return state;
    }

    public Scholarship setState(String state) {
        this.state = state;
        return this;
    }

    @JSONPropertyIgnore()
    public boolean isProcessing() {
        return this.state.equals(Scholarship.PROCESSING);
    }

    @JSONPropertyIgnore()
    public boolean isFinished() {
        return this.state.equals(Scholarship.FINISHED);
    }

    @JSONPropertyIgnore()
    public boolean isExpired() {
        return this.state.equals(Scholarship.EXPIRED);
    }

    public Scholarship setProcessing() {
        this.state = Scholarship.PROCESSING;
        return this;
    }

    public Scholarship setFinished() {
        this.state = Scholarship.FINISHED;
        return this;
    }

    public Scholarship setExpired() {
        this.state = Scholarship.EXPIRED;
        return this;
    }

    @Property()
    private String scholarshipId; // 장학금 고유번호

    @Property()
    private String scholarshipName; // 장학금 이름

    @Property()
    private String semester; // 금학기

    @Property()
    private String maturityDateTime; // 신청마감일

    @Property()
    private String foundation; // 재단

    @Property()
    private int faceValue; // 금액

    @Property()
    private int semesterLimitMin; // 최소 신청가능학기

    @Property()
    private int semesterLimitMax; // 최대 신청가능학기

    @Property()
    private float gradeLimit; // 제한 성적
    
    @Property()
    private String majorLimit; // 단과대학/학과/전공제한

    @Property()
    private int totalNum; // 총 선발인원
    
    @Property()
    private int currentNum; // 현재 선발인원


    public Scholarship() {
        super();
    }

    public Scholarship setKey() {
        this.key = State.makeKey(new String[] { this.scholarshipId });
        return this;
    }

    public String getScholarshipName() {
        return scholarshipName;
    }

    public Scholarship setScholarshipName(String scholarshipName) {
        this.scholarshipName = scholarshipName;
        return this;
    }

    public String getScholarshipId() {
        return scholarshipId;
    }

    public Scholarship setScholarshipId(String scholarshipId) {
        this.scholarshipId = scholarshipId;
        return this;
    }

    // 금학기
    public String getSemester() {
        return semester;
    }

    public Scholarship setSemester(String semester) {
        this.semester = semester;
        return this;
    }


    // 신청마감일

    public String getMaturityDateTime() {
        return maturityDateTime;
    }

    public Scholarship setMaturityDateTime(String maturityDateTime) {
        this.maturityDateTime = maturityDateTime;
        return this;
    }

   public String getFoundation() {
        return foundation;
    }

    public Scholarship setFoundation(String foundation) {
        this.foundation = foundation;
        return this;
    }


    public int getFaceValue() {
        return faceValue;
    }

    public Scholarship setFaceValue(int faceValue) {
        this.faceValue = faceValue;
        return this;
    }

    //최소신청가능학기
    
    public int getSemesterLimitMin() {
        return semesterLimitMin;
    }

    public Scholarship setSemesterLimitMin(int semesterLimitMin) {
        this.semesterLimitMin = semesterLimitMin;
        return this;
    }
    //최대가능학기
    public int getSemesterLimitMax() {
        return semesterLimitMax;
    }

    public Scholarship setSemesterLimitMax(int semesterLimitMax) {
        this.semesterLimitMax = semesterLimitMax;
        return this;
    }
    // 성적제한
    public float getGradeLimit() {
        return gradeLimit;
    }

    public Scholarship setGradeLimit(float gradeLimit) {
        this.gradeLimit = gradeLimit;
        return this;
    }

    // 단과대 제한
    public String getMajorLimit() {
        return majorLimit;
    }

    public Scholarship setMajorLimit(String majorLimit) {
        this.majorLimit = majorLimit;
        return this;
    }
    //총인원
    public int getTotalNum() {
        return totalNum;
    } 
    /**
     * @param totalNum the totalNum to set
     */
    public Scholarship setTotalNum(int totalNum) {
        this.totalNum = totalNum;
        return this;
    }
    //현재인원
    /**
     * @return the currentNum
     */
    public int getCurrentNum() {
        return currentNum;
    }
    /**
     * @param currentNum the currentNum to set
     */
    public Scholarship setCurrentNum(int currentNum) {
        this.currentNum = currentNum;
        return this;
    }


    @Override
    public String toString() {
        return "Scholarship::" + this.key + "   " + this.getScholarshipId() + " " + getScholarshipName() 
        + " " + getSemester() + " " + getMaturityDateTime() + " " +getFoundation() + " " + getFaceValue() 
        + " " + getSemesterLimitMin() + " " + getGradeLimit() + " " + getMajorLimit() + " " + getTotalNum() + " " + getCurrentNum();
    }
    

    public static List<Scholarship> listDeserialize(byte[] data) {

        List<Scholarship> result = new ArrayList<Scholarship>();
        Scholarship scholarship;

        JSONArray jsonArray = new JSONArray(new String(data, UTF_8));
        for(int i=0 ; i<jsonArray.length() ; i++){
            JSONObject jsonObj = jsonArray.getJSONObject(i);
            scholarship = jsonDeserialize(jsonObj);
            result.add(scholarship);
        }
        return result;
    }

    /**
     * Deserialize a state data to commercial paper
     *
     * @param {Buffer} data to form back into the object
     */
    public static Scholarship deserialize(byte[] data) {

        JSONObject json = new JSONObject(new String(data, UTF_8));
        String scholarshipId = json.getString("scholarshipId");
        String state = json.getString("state");  
        String scholarshipName = json.getString("scholarshipName");
        String semester = json.getString("semester");
        String maturityDateTime = json.getString("maturityDateTime");
        String foundation = json.getString("foundation");
        int faceValue = json.getInt("faceValue");   
        int semesterLimitMin = json.getInt("semesterLimitMin");
        int semesterLimitMax = json.getInt("semesterLimitMax");
        float gradeLimit = json.getFloat("gradeLimit");   
        String majorLimit = json.getString("majorLimit");
        int totalNum = json.getInt("totalNum");
        int currentNum = json.getInt("currentNum");

        // scholarship 객체 반환
        return createInstance(scholarshipName, semester, maturityDateTime, foundation, scholarshipId, faceValue, semesterLimitMin, semesterLimitMax, gradeLimit, majorLimit, totalNum, currentNum, state);
    }

    public static Scholarship jsonDeserialize(JSONObject json) {
        String scholarshipId = json.getString("scholarshipId");
        String state = json.getString("state");
        String scholarshipName = json.getString("scholarshipName");
        String semester = json.getString("semester");
        String maturityDateTime = json.getString("maturityDateTime");
        String foundation = json.getString("foundation");
        int faceValue = json.getInt("faceValue");
        int semesterLimitMin = json.getInt("semesterLimitMin");
        int semesterLimitMax = json.getInt("semesterLimitMax");
        float gradeLimit = json.getFloat("gradeLimit");
        String majorLimit = json.getString("majorLimit");
        int totalNum = json.getInt("totalNum");
        int currentNum = json.getInt("currentNum");

        // scholarship 객체 반환
        return createInstance(scholarshipName, semester, maturityDateTime, foundation, scholarshipId, faceValue, semesterLimitMin, semesterLimitMax, gradeLimit, majorLimit, totalNum, currentNum, state);

    }

    
    public static byte[] serialize(Scholarship scholarship) {
        
        JSONObject obj = new JSONObject();
        obj.put("currentNum", scholarship.getCurrentNum());
        obj.put("totalNum", scholarship.getTotalNum());   
        obj.put("majorLimit", scholarship.getMajorLimit()); 
        obj.put("gradeLimit", scholarship.getGradeLimit());    
        obj.put("semesterLimitMax", scholarship.getSemesterLimitMax());
        obj.put("semesterLimitMin", scholarship.getSemesterLimitMin());
        obj.put("faceValue", scholarship.getFaceValue());
        obj.put("foundation", scholarship.getFoundation());
        obj.put("maturityDateTime", scholarship.getMaturityDateTime());
        obj.put("semester", scholarship.getSemester());
        obj.put("scholarshipName", scholarship.getScholarshipName());
        obj.put("state", scholarship.getState());
        obj.put("scholarshipId", scholarship.getScholarshipId());

        String jsonStr = obj.toString();
        System.out.println(jsonStr);
        return jsonStr.getBytes(UTF_8);

    } 

    /**
     * Factory method to create a commercial paper object
     */
    public static Scholarship createInstance(String scholarshipName, String semester, String maturityDateTime, 
    String foundation, String scholarshipId, int faceValue, int semesterLimitMin, int semesterLimitMax, 
    float gradeLimit, String majorLimit, int totalNum, int currentNum, String state) {
        return new Scholarship().setScholarshipName(scholarshipName).setSemester(semester).setMaturityDateTime(maturityDateTime).
        setFoundation(foundation).setScholarshipId(scholarshipId).setFaceValue(faceValue).setSemesterLimitMin(semesterLimitMin).
        setSemesterLimitMax(semesterLimitMax).setGradeLimit(gradeLimit).setMajorLimit(majorLimit).setTotalNum(totalNum).
        setCurrentNum(currentNum).setState(state).setKey();
    }


}



   