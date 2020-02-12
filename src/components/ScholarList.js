import React from "react";
import { Table, Button } from "reactstrap";
import "./content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';


const ScholarList = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total })=>{

  if(loading || !scholars){
    return null;
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);
  
    const scholarList = scholars.slice(startIndex, endIndex).map((scholars, index)=>(
      <tr key={scholars.id}>
        <th style={{width:'50px'}} scope="row">{scholars.id}</th>
        <td style={{width:'1000px'}} >{scholars.title}</td>
        <td style={{width:'150px'}} ><Link to={`/scholars/${scholars.id}`}><button>신청하기</button></Link></td>
      </tr>
    ));

    const pageStyle = {
      margin:'10px'
    }
  

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span className="content">
      <div className="container">
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>이름</th>
            <th>신청하기</th>
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
      </span>
    </div>
  );
}

export default ScholarList;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;