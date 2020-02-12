import React, {Component} from "react";
import { Table, Button } from "reactstrap";
import "../content.css"
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";


const ScholarshipList = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total })=>{

  if(loading || !scholars){
    return null;
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);
  
    const scholarList = scholars.slice(startIndex, endIndex).map((scholars, index)=>(
      <tr key={scholars.id}>
        <th style={{width:'50px'}} scope="row">{scholars.id}</th>
        <td style={{width:'1000px'}} ><Link to={`/scholarDetail/${scholars.id}`}>{scholars.title}</Link></td>
        <td style={{width:'150px'}} ><Link to={`/scholarDetail/${scholars.id}`}><button>신청하기</button></Link></td>
      </tr>
    ));

    const pageStyle = {
      margin:'10px'
    }
  

  return(
    <div>
      <span className="content">
      <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          {scholarList}
        </tbody>
      </Table>
      </div>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      <div>
          <Button><Link to={'scholarships/new'}></Link>등록</Button>
      </div>
      </span>
    </div>
  );
}

export default ScholarshipList;
