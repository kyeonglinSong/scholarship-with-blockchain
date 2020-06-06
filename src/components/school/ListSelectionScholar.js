import React from "react";
import { Table, Button } from "reactstrap";
import styled from 'styled-components';

import "./content2.css"
import { Link } from "react-router-dom";
import SearchContainer from "../../containers/common/SearchContainer";


const ListSelectionScholar = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total, searchWord, orderBase })=>{

  if(loading || !scholars){
    return null;
  }

  if(searchWord){
    scholars=scholars.filter((scholars)=>{
      return scholars.scholarName.indexOf(searchWord)>-1;
    })
  }

  if(orderBase){
    orderBase='content';
    scholars=scholars.sort(function(a,b){
      return a[orderBase]<b[orderBase]? -1:1;
    });
  }

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const applyList = scholars.slice(startIndex, endIndex).map((scholars, index)=>(
    <tr key={scholars.scholarId}>
    <th scope="row">{scholars.scholarId}</th>
    <td style={{width:'600px'}}>{scholars.scholarName}</td>
    <td style={{width:'100px'}}>{(scholars.state==='not possible')? "완료":"산정중"}</td>
    <td><Link to={`/selections/${scholars.scholarId}`}><button>자세히보기</button></Link></td>
    </tr>
  ));

  const pageStyle = {
    margin:'10px'
  }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span >
      <div className="container">
      <SearchContainer type="scholar"/>
      <Table striped>
        <thead>
          <tr>
            <th></th>
            <th style={{width:'500px'}}>이름</th>
            <th>현황</th>
            <th>자세히보기</th>
          </tr>
        </thead>
        <tbody>
          {applyList}
        </tbody>
      </Table>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </div>
      
      </span>
    </div>
  );
}

export default ListSelectionScholar;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;