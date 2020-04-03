import React from "react";
import { Table, Button } from "reactstrap";
import styled from 'styled-components';

import "./content2.css"
import { Link } from "react-router-dom";
import SearchContainer from "../../containers/common/SearchContainer";



const ScholarshipList = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total, searchWord })=>{

  if(loading || !scholars){
    return null;
  }

  if(searchWord){
    scholars=scholars.filter((scholars)=>{
    return scholars.scholarshipName.indexOf(searchWord)>-1;
    })
  }

  var startIndex = (tempPage - 1) * 10 ;
  var endIndex = Math.min(startIndex + 10, total - 1);
  
    const scholarList = scholars.slice(startIndex, endIndex).map((scholars, index)=>(
      <tr key={scholars.id}>
        <th style={{width:'50px'}} scope="row">{scholars.scholarshipId}</th>
        <td style={{width:'1000px'}} ><Link to={`/scholarships/${scholars.id}`}><a style={{color:'black'}}>{scholars.scholarshipName}</a></Link></td>
      </tr>
    ));

    const pageStyle = {
      margin:'10px'
    }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span>
      <div className="container">
      <SearchContainer type="addScholar"/>
      <Table striped>
        <thead>
          <tr>
            <th> </th>
            <th>이름</th>
          </tr>
        </thead>
        <tbody>
          {scholarList}
        </tbody>
      </Table>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </div>
      
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