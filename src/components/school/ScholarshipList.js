import React from "react";
import { Table, Button } from "reactstrap";
import "../content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchContainer from "../../containers/SearchContainer";



const ScholarshipList = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total, searchWord })=>{

  if(loading || !scholars){
    return null;
  }

  if(searchWord){
    console.log(searchWord)
    scholars=scholars.filter((scholars)=>{
    return scholars.title.indexOf(searchWord)>-1;
    })
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);
  
    const scholarList = scholars.slice(startIndex, endIndex).map((scholars, index)=>(
      <tr key={scholars.id}>
        <th style={{width:'50px'}} scope="row">{scholars.id}</th>
        <td style={{width:'1000px'}} ><Link to={`/scholarships/${scholars.id}`}>{scholars.title}</Link></td>
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
      <SearchContainer type="addScholar"/>
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
        <br/>
        
      </div>
      </span>
    </div>
  );
}

export default ScholarshipList;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;