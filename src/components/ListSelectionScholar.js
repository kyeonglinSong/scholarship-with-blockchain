import React from "react";
import { Table, Button } from "reactstrap";
import "./content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchContainer from "../containers/SearchContainer";


const ListSelectionScholar = ({ scholars, tempPage, lastPage, loading, error, nextPage, prevPage, total, searchWord, orderBase })=>{

  if(loading || !scholars){
    return null;
  }
  console.log(orderBase);

  if(searchWord){
    console.log(searchWord)
    scholars=scholars.filter((scholars)=>{
      return scholars.title.indexOf(searchWord)>-1;
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
    <tr key={scholars.id}>
    <th scope="row">{scholars.id}</th>
    <td style={{width:'600px'}}>{scholars.title}</td>
    <td style={{width:'100px'}}>{(scholars.completed)? "완료":"산정중"}</td>
    <td><Link to={`/selections/${scholars.id}`}><button>자세히보기</button></Link></td>
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