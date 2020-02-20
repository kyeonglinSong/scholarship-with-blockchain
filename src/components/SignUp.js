import React, { useState } from "react";
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Checkbox } from 'antd';
import "./content.css"


//form, onSubmit, onChange
const SignUp = ()=>{
  const [id, setId]=useState('');
  const [name, setName]=useState('');
  const [password, setPassword]=useState('');
  const [passwordCheck, setPasswordCheck]=useState('');
  const [term, setTerm]=useState(false);
  const [passwordError, setPasswordError]=useState(false);
  const [termError, setTermError] = useState(false);
  const [image, setImage]=useState('');
  const [loading, setLoading]=useState(false);
  const uploadImage=async e=>{
    const files=e.target.files
    const data=new FormData()
    data.append('file', files[0])
    data.append('upload_preset')
  }
const onSubmit=(e)=>{
    e.preventDefault();
    /*검증 로직 만들기
    1. 비번, 비번 체크가 다를 때 검증
    2. 약관 동의 확인.
    */
    if(password !==passwordCheck){
      return setPasswordError(true);
    }
    if(!term){
      return setTermError(true);
    }
    console.log({
      id,
      name,
      password,
      passwordCheck,
      term
    });
  };
  const onChangeId=(e)=>{
    setId(e.target.value);
  };
  const onChangeName=(e)=>{
    setName(e.target.value);
  };
  const onChangePassword=(e)=>{
    setPassword(e.target.value);
  };
  const onChangePasswordChk=(e)=>{ //비번 입력할때마다 패스워드를 검증하는 함수
    setPasswordError(e.target.value!==password);
    setPasswordCheck(e.target.vlue);
  };
  const onChangeTerm=(e)=>{
    setTermError(false);
    setTerm(e.target.checked);
  };


  return(
    <div>
    <Form onSubmit={onSubmit} style={{padding:100}}>
    <FormGroup row >
        <Label htmlFor="user-name" sm={2} >기관명</Label>
        <Col sm={10}>
        <Input placeholder="정확한 기관명 기입"name="user-name" value={name} required onChange={onChangeName} />
      </Col>
      </FormGroup>
      <FormGroup row>
        <Label htmlFor="user-id" sm={2}>아이디</Label>
        <Col sm={8}>
        <Input name="user-id" value={id} required onChange={onChangeId}/>

    </Col>
    <Col sm={2}><Button type="primary" htmltype="/">중복확인</Button></Col>
    </FormGroup>
      <FormGroup row>
        <Label htmlFor="user-password" sm={2}>비밀번호</Label>
        <Col sm={10}>
        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
    </Col>  </FormGroup>
      <FormGroup row>
        <Label htmlFor="user-password-check" sm={2}>비밀번호 확인</Label>
        <Col sm={10}>
        <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordChk} />
                {passwordError && <div style={{color : 'red'}}>비밀번호가 일치하지 않습니다.</div>}
 </Col> </FormGroup>
      <FormGroup row>
        <Label htmlFor="//" sm={2}>사업자등록증 제출</Label>
        <Col sm={10}>
       <Input type="file" onChange={uploadImage} name="file" placeholder="Upload an image"/>

       <FormText color="muted">
         재단 사업자 증명서를 스캔하여 제출해주세요. 심사에 이용됩니다.
       </FormText></Col>
      </FormGroup>
      <div className="center-col">

        어쩌구저쩌구웅앵웅앵
        제1장 총칙
제1조(목적)
본 약관은 정부24 (이하 "당 사이트")가 제공하는 모든 서비스(이하 "서비스")의 이용조건 및 절차, 이용자와 당 사이트의 권리, 의무, 책임사항과 기타 필요한 사항을 규정함을 목적으로 합니다.
제2조(용어의 정의)
본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
① 이용자 : 본 약관에 따라 당 사이트가 제공하는 서비스를 이용할 수 있는 자.
② 가 입 : 당 사이트가 제공하는 신청서 양식에 해당 정보를 기입하고, 본 약관에 동의하여 서비스 이용계약을 완료시키는 행위
③ 회 원 : 당 사이트에 개인정보 등 관련 정보를 제공하여 회원등록을 한 개인(재외국민, 국내거주 외국인 포함)또는 법인으로서 당 사이트의 정보를 제공 받으며, 당 사이트가 제공하는 서비스를 이용할 수 있는 자.
④ 아이디(ID) : 회원의 식별과 서비스 이용을 위하여 회원이 문자와 숫자의 조합으로 설정한 고유의 체계
⑤ 비밀번호 : 이용자와 아이디가 일치하는지를 확인하고 통신상의 자신의 비밀보호를 위하여 이용자 자신이 선정한 문자와 숫자의 조합.
⑥ 탈 퇴 : 회원이 이용계약을 종료 시키는 행위
⑦ 본 약관에서 정의하지 않은 용어는 개별서비스에 대한 별도 약관 및 이용규정에서 정의하거나 일반적인 개념에 의합니다.
제3조(약관의 효력과 변경)
① 당 사이트는 귀하가 본 약관 내용에 동의하는 것을 조건으로 귀하에게 서비스를 제공할 것이며, 귀하가 본 약관의 내용에 동의하는 경우, 당 사이트의 서비스 제공 행위 및 귀하의 서비스 사용 행위에는 본 약관이 우선적으로 적용됩니다.
② 당 사이트는 본 약관을 변경할 수 있으며, 변경된 약관은 당 사이트 내에 공지함으로써 이용자가 직접 확인하도록 할 것입니다. 약관을 변경할 경우에는 적용일자 및 변경사유를 명시하여 당 사이트 내에 그 적용일자 30일 전부터 공지합니다. 약관 변경 공지 후 이용자가 명시적으로 약관 변경에 대한 거부의사를 표시하지 아니하면, 이용자가 약관에 동의한 것으로 간주합니다. 이용자가 변경된 약관에 동의하지 아니하는 경우, 이용자는 본인의 회원등록을 취소(회원탈퇴)할 수 있습니다.
제4조(약관외 준칙)
① 본 약관은 당 사이트가 제공하는 서비스에 관한 이용규정 및 별도 약관과 함께 적용됩니다.
② 본 약관에 명시되지 않은 사항은 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법, 정보통신윤리위원회심의규정, 정보통신 윤리강령, 프로그램보호법 등 관계법령과 개인정보 처리방침 및 행정안전부가 별도로 정한 지침 등의 규정에 따릅니다.
제5조(회원정보의 통합관리)
당 사이트의 회원정보는 행정기관 타 사이트의 회원정보와 통합하여 관리될 수 있습니다.
제2장 서비스 제공 및 이용
제6조(이용 계약의 성립)
① 이용계약은 신청자가 온라인으로 당 사이트에서 제공하는 소정의 가입신청 양식에서 요구하는 사항을 기록하고, 이 약관에 대한 동의를 완료한 경우에 성립됩니다.ㅊㅊㅊㅊ
② 당 사이트는 다음 각 호에 해당하는 이용계약에 대하여는 가입을 취소할 수 있습니다.
   1. 다른 사람의 명의를 사용하여 신청하였을 때
   2. 이용 계약 신청서의 내용을 허위로 기재하였거나 신청하였을 때
   3. 사회의 안녕 질서 혹은 미풍양속을 저해할 목적으로 신청하였을 때
   4. 다른 사람의 당 사이트 서비스 이용을 방해하거나 그 정보를 도용하는 등의 행위를 하였을 때
   5. 당 사이트를 이용하여 법령과 본 약관이 금지하는 행위를 하는 경우
   6. 기타 당 사이트가 정한 이용신청요건이 미비 되었을 때
③ 당 사이트는 다음 각 호에 해당하는 경우 그 사유가 해소될 때까지 이용계약 성립을 유보할 수 있습니다.
   1. 기술상의 장애사유로 인한 서비스 중단의 경우(시스템관리자의 고의·과실 없는 디스크장애, 시스템 다운 등)
   2. 전기통신사업법에 의한 기간통신사업자가 전기통신 서비스를 중지하는 경우
   3. 전시. 사변, 천재지변 또는 이에 준하는 국가 비상사태가 발생하거나 발생할 우려가 있는 경우
   4. 긴급한 시스템 점검, 증설 및 교체설비의 보수 등을 위하여 부득이한 경우
   5. 서비스 설비의 장애 또는 서비스 이용의 폭주 등 기타 서비스를 제공할 수 없는 사유가 발생한 경우
④ 당 사이트가 제공하는 서비스는 아래와 같으며, 그 변경될 서비스의 내용을 이용자에게 공지하고 아래에서 정한 서비스를 변경하여 제공할 수 있습니다. 다만, 비회원에게는 서비스 중 일부만을 제공할 수 있습니다.
   1. 당 사이트가 자체 개발하거나 다른 기관과의 협의 등을 통해 제공하는 일체의 서비스
제7조(회원정보 사용에 대한 동의)
① 당 사이트가 처리하는 모든 개인정보는 개인정보 보호법 등 관련 법령상의 개인정보보호 규정을 준수하여 이용자의 개인정보 보호 및 권익을 보호합니다.
② 당 사이트는 다른 법령에 특별한 규정이 있는 경우를 제외하고 귀하가 당 사이트 서비스 가입시 동의하여 제공하는 정보에 한하여 최소한으로 수집합니다.
③ 당 사이트와 행정기관 타 사이트간의 회원정보 통합관리와 관련하여 본인이 동의한 경우에는 개인정보 등 관련정보를 행정기관 타 사이트에 제공할 수 있습니다.
④ 회원이 당 사이트에 본 약관에 따라 이용신청을 하는 것은 당 사이트가 본 약관에 따라 신청서에 기재된 회원정보를 수집, 이용하는 것에 동의하는 것으로 간주됩니다.
⑤ 당 사이트는 회원정보의 진위여부 및 소속기관의 확인 등을 위하여 확인절차를 거칠 수도 있습니다
      </div>
      <div className="signupbuttons">
        <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>동의합니다.</Checkbox>
        {termError && <div style={{color : 'red'}}>약관에 동의하셔야 합니다.</div>}

      </div>
      <div className="signupbuttons" style={{marginTop:10}}>
                <Button size="lg" type="primary" htmltype="/">취소</Button>&nbsp;&nbsp;&nbsp;
                <Button size="lg" type="primary" htmltype="submit" >가입하기</Button>
            </div>

</Form>

    </div>
  );
}


export default SignUp;