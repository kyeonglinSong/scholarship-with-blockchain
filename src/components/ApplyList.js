import React from "react";
import { Table, Button } from "reactstrap";
import "./content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';


const ApplyList = ({ applies, tempPage, lastPage, loading, error, nextPage, prevPage, total })=>{

  if(loading || !applies){
    return null;
  }

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const applyList = applies.slice(startIndex, endIndex).map((applies, index)=>(
    <tr key={applies.id}>
    <th scope="row">{applies.id}</th>
    <td>{applies.title}</td>
    <td>{(applies.completed)? "완료":"산정중"}</td>
    <td><Link to={`/applies/${applies.id}`}><button>자세히보기</button></Link></td>
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
            <th>현황</th>
            <th>자세히보기</th>
          </tr>
        </thead>
        <tbody>
          {applyList}
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

export default ApplyList;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;