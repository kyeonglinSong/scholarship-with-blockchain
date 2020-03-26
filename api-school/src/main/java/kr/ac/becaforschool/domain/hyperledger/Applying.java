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
public class Applying extends State {

    // Enumerate scholarship state values
    public final static String APPLYDONE = "APPLYDONE"; // 신청완료
    public final static String RETURNED = "RETURNED"; // 반려됨
    public final static String SELECTED = "SELECTED";  // 선발됨
    public final static String UNSELECTED = "UNSELECTED";  // 선발안됨

    @Property()
    private String state="";

    public String getState() {
        return state;
    }

    public Applying setState(String state) {
        this.state = state;
        return this;
    }

    @JSONPropertyIgnore()
    public boolean isApplyDone() {
        return this.state.equals(Applying.APPLYDONE);
    }

    @JSONPropertyIgnore()
    public boolean isReturned() {
        return this.state.equals(Applying.RETURNED);
    }

    
    @JSONPropertyIgnore()
    public boolean isSelected() {
        return this.state.equals(Applying.SELECTED);
    }

    @JSONPropertyIgnore()
    public boolean isUnseledted() {
        return this.state.equals(Applying.UNSELECTED);
    }
    
    public Applying setApplyDone() {
        this.state = Applying.APPLYDONE;
        return this;
    }

    public Applying setReturned() {
        this.state = Applying.RETURNED;
        return this;
    }

    public Applying setSelected() {
        this.state = Applying.SELECTED;
        return this;
    }

    public Applying setUnselected() {
        this.state = Applying.UNSELECTED;
        return this;
    }
    
    @Property()
    private String applyingId; // 지원번호

    @Property()
    private String semester; // 지원학기

    @Property()
    private String name; // 이름

    @Property
    private String studentId; //학번

    @Property()
    private String university; // 대학

    @Property()
    private String college; // 단과대학

    @Property()
    private String major; // 전공

    @Property()
    private int completeSemester; // 이수학기

    @Property()
    private float grade; // 학점

    @Property()
    private int tuition; // 등록금액

    @Property()
    private Scholarship scholarship; // 신청장학금
    

    public Applying() {
        super();
    }

    public Applying setKey() {
        this.key = State.makeKey(new String[] { this.applyingId });
        return this;
    }

    public String getApplyingId() {
        return applyingId;
    }
    public Applying setApplyingId(String applyingId) {
        this.applyingId = applyingId;
        return this;
    }

    // 신청학기

    public String getName() {
        return name;
    }

    public Applying setName(String name) {
        this.name=name;
        return this;
    }

    public String getSemester() {
        return semester;
    }

    public Applying setSemester(String semester) {
        this.semester = semester;
        return this;
    }

    public String getStudentId() {
        return studentId;
    }

    public Applying setStudentId(String studentId) {
        this.studentId = studentId;
        return this;
    }

    public String getUniversity() {
        return university;
    }

    public Applying setUniversity(String university) {
        this.university=university;
        return this;
    }

    // 단대
    public String getCollege() {
        return college;
    }
    
    public Applying setCollege(String college) {
        this.college = college;
        return this;
    }
    //전공
    public String getMajor() {
        return major;
    }
    
    public Applying setMajor(String major) {
        this.major = major;
        return this;
    }
    // 이수학기
    public int getCompleteSemester() {
        return completeSemester;
    }
    
    public Applying setCompleteSemester(int completeSemester) {
        this.completeSemester = completeSemester;
        return this;
    }
    //학점
    public float getGrade() {
        return grade;
    }
    
    public Applying setGrade(float grade) {
        this.grade = grade;
        return this;
    }
    // 등록금액
    public int getTuition() {
        return tuition;
    }
    
    public Applying setTuition(int tuition) {
        this.tuition = tuition;
        return this;
    }

    public Scholarship getScholarship() {
        return scholarship;
    }
    public Applying setScholarship(Scholarship scholarship) {
        this.scholarship = scholarship;
        return this;
    }




    
    @Override
    public String toString() {
        return "Applying::" + this.key + "   " + this.getApplyingId() + " " + getSemester() + " " + 
        getName() + " " + getStudentId() + "" + getUniversity() + "" + getCollege() + "" + getMajor() + "" + 
        getCompleteSemester()+ "" + getGrade() + "" + getTuition() + "" + getScholarship();
    }


    /**
     * Deserialize a state data to commercial paper
     *
     * @param {Buffer} data to form back into the object
     */

    public static Applying jsonDeserialize(JSONObject json) {
        String applyingId =  json.getString("applyingId");
        String semester = json.getString("semester");
        String state = json.getString("state");
        String name = json.getString("name");
        String studentId = json.getString("studentId");
        String university = json.getString("university");
        String college = json.getString("college");
        String major = json.getString("major");
        int completeSemester = json.getInt("completeSemester");
        float grade = json.getFloat("grade");
        int tuition = json.getInt("tuition");

        // scholarship
        JSONObject innerObject = json.getJSONObject("scholarship");
        String scholarshipId = innerObject.getString("scholarshipId");
        String scholarState = innerObject.getString("state");
        String scholarshipName = innerObject.getString("scholarshipName");
        String scholarSemester = innerObject.getString("semester");
        String maturityDateTime = innerObject.getString("maturityDateTime");
        String foundation = innerObject.getString("foundation");
        int faceValue = innerObject.getInt("faceValue");
        int semesterLimitMin = innerObject.getInt("semesterLimitMin");
        int semesterLimitMax = innerObject.getInt("semesterLimitMax");
        float gradeLimit = innerObject.getFloat("gradeLimit");
        String majorLimit = innerObject.getString("majorLimit");
        int totalNum = innerObject.getInt("totalNum");
        int currentNum = innerObject.getInt("currentNum");
        Scholarship scholarship = Scholarship.createInstance(scholarshipName, scholarSemester, maturityDateTime, foundation, scholarshipId, faceValue, semesterLimitMin, semesterLimitMax, gradeLimit, majorLimit, totalNum, currentNum, scholarState);
        // scholarship 객체 반환
        return createInstance(applyingId, semester, name, studentId, university, college, major, completeSemester, grade, tuition, scholarship, state);
    }

    public static List<Applying> listDeserialize(byte[] data) {

        List<Applying> result = new ArrayList<Applying>();
        Applying applying;

        JSONArray jsonArray = new JSONArray(new String(data, UTF_8));
        for(int i=0 ; i<jsonArray.length() ; i++){
            JSONObject jsonObj = jsonArray.getJSONObject(i);
            applying = jsonDeserialize(jsonObj);
            result.add(applying);
        }
        return result;
    }

    public static Applying deserialize(byte[] data) {

        JSONObject jsonObject = new JSONObject(new String(data, UTF_8));
        return jsonDeserialize(jsonObject);
    } 

    
    public static byte[] serialize(Applying applying) {

        Scholarship scholarship = applying.getScholarship();
        JSONObject innerObj = new JSONObject(scholarship);
        JSONObject obj = new JSONObject();
        obj.put("scholarship", innerObj);
        obj.put("tuition", applying.getTuition());
        obj.put("grade", applying.getGrade());
        obj.put("completeSemester", applying.getCompleteSemester());
        obj.put("major", applying.getMajor());
        obj.put("college", applying.getCollege());
        obj.put("university", applying.getUniversity());
        obj.put("studentId", applying.getStudentId());
        obj.put("name", applying.getName());
        obj.put("state", applying.getState());
        obj.put("semester", applying.getSemester());
        obj.put("applyingId", applying.getApplyingId());



        String jsonStr = obj.toString();
        System.out.println(jsonStr);
        return jsonStr.getBytes(UTF_8);

    } 

    /**
     * Factory method to create a commercial paper object
     */
    public static Applying createInstance(String applyingId, String semester, String name, String studentId, 
    String university, String college, String major, int completeSemester, float grade, int tuition, 
    Scholarship scholarship, String state) {
        return new Applying().setApplyingId(applyingId).setSemester(semester).setName(name).setStudentId(studentId)
        .setUniversity(university).setCollege(college).setMajor(major).setCompleteSemester(completeSemester).setGrade(grade)
        .setTuition(tuition).setScholarship(scholarship).setState(state).setKey();    
    }


}



   