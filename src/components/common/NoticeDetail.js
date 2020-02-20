import React from "react";
import { Link, withRouter } from "react-router-dom"
import styled from 'styled-components';
import img from '../../images/background.png';
import { Container, Row, Button } from 'reactstrap';
import { WiNightCloudyHigh } from "react-icons/wi"


const Notice = ({ notice, loading, error, history, user, onRemove, onEdit })=>{

  const NoticeStyle={
      borderBottom: "3px solid #444444",
      
      paddingTop: '50px',
      paddingBottom:'60px',
      height: '50px',
  }
  const titleSubStyle={
      fontSize: '12px',
      weight: '750px',
      marginLeft: '20px',
      marginTop:'5px',
      textAlign: 'right',
  }
  const titleStyle={
    fontSize: '20px',
    fontWeight: 'bold',
    weight: '750px',
    textAlign: 'left',
    marginTop:'5px',
}
  const bodyStyle = {
    margin:'10px',
    textAlign:'left'
  }
  const cardStyle = {
      width: '83%',
      marginLeft: 'auto',
      marginRight: 'auto',
      paddingBottom:'50px'
  }
  const NoticeTextStyle = {
      fontSize: '30px',
      paddingBottom:'30px'
  }

  const imgStyle = {
    margin:'auto',
  }


if(loading || !notice){
  return null;
}

const { userId, id, title, content } = notice;
const usertype = (user.id===1)

const onClick = e =>{
  history.push('/notices');
}


return(
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <Container style={cardStyle}>
      <Row style={NoticeStyle}>
        <div style={{fontSize:'30px', textAlign: 'left'}}><WiNightCloudyHigh style={{marginBottom:'10px'}}/> 공지사항</div>
      </Row>
      <div style={titleStyle}>{title}</div>
      <div style={titleSubStyle}>작성날짜: {userId}</div>
      <div style={titleSubStyle}>첨부파일: 파일제목.hwp</div>
      <hr size="3" noshade></hr>
      <Row style={bodyStyle}>
        {content}
        <img src={img}  height='auto' width='80%' style={imgStyle}/>
        </Row>
      <hr size="5" noshade></hr>
      <div style={{textAlign: 'center'}}>
        <Link to='/notices'><Button outline color="secondary">목록으로</Button></Link>
      </div>
      <div style={{textAlign: 'right'}}>
        {
          !usertype &&
          <div>
          <Button outline color="secondary" onClick={onEdit} style={{margin:'5px'}}>수정하기</Button>
          <Button outline color="secondary" onClick={onRemove} style={{margin:'5px'}}>삭제하기</Button>
          </div>
        }
      </div>
    </Container>
  </div>
  );

}

export default withRouter(Notice);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;