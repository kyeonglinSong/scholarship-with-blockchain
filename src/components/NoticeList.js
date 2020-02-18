import React from "react";
import { Link, withRouter } from "react-router-dom";
import { Table, Button } from "reactstrap";
import "./content2.css"
import styled from 'styled-components';
import SearchContainer from '../containers/SearchContainer';
import search from "../modules/search";
import  moment from 'moment';



const NoticeList = ({ notices, tempPage, lastPage, loading, error, prevPage, nextPage, user, searchWord, onSubmit })=>{

  if(loading || !notices){
    return null;
  }

  if(searchWord){
    console.log(searchWord)
    notices=notices.filter((notices)=>{
    return notices.title.indexOf(searchWord)>-1;
    })
  }
  
  var total=notices.length;
  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const noticeList = notices.slice(startIndex, endIndex).map((notice)=>(
    <tr key={notice.id}>
      <th style={{width:'50px'}} scope="row">{notice.id}</th>
      <td style={{width:'1000px'}}><Link to={`/notices/${notice.id}`}><a style={{color:'black'}}>{notice.title}</a></Link></td>
      <td style={{width:'150px'}}>{notice.createdAt}</td>
    </tr>
  ));

  const pageStyle = {
    margin:'10px'
  }

  const buttonStyle={
    padding:'auto',
  }

  const usertype = (user.id===1)


  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span className="content2">
      <div className="container">
      <SearchContainer type="notice"/>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th>제목</th>
            <th>작성날짜</th>
          </tr>
        </thead>
        <tbody>
          {noticeList}
        </tbody>
      </Table>
      <div style={{textAlign: 'right'}}>
        {
          !usertype &&
          <Link to='/notices/write'><Button style={buttonStyle} outline color="secondary">공지등록</Button></Link>
        }
      </div>
      </div>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </span>
    </div>
  );
}

export default withRouter(NoticeList);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;