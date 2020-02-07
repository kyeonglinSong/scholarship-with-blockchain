import React, {Component} from "react";
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import { Table, Button, Pagination, PaginationItem } from "reactstrap";
import "./content.css"



const NoticeList = ({ notices, tempPage, lastPage, loading, error, prevPage, nextPage, total })=>{

  if(loading || !notices){
    return null;
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const noticeList = notices.slice(startIndex, endIndex).map((notice)=>(
    <tr key={notice.id}>
      <th style={{width:'50px'}} scope="row">{notice.id}</th>
      <td style={{width:'1000px'}}><Link to={`/notice/${notice.id}`}>{notice.title}</Link></td>
      <td style={{width:'150px'}}>2020.02.01</td>
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
            <th>제목</th>
            <th>작성날짜</th>
          </tr>
        </thead>
        <tbody>
          {noticeList}
        </tbody>
      </Table>
      </div>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </span>
    </div>
  );
}

export default NoticeList;