import React, { useState } from "react";
import { Table, Button, Collapse, CardBody, CardTitle, Card, Input } from "reactstrap";
import "./content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchContainer from "../../containers/SearchContainer";


const StudentList = ({ students, tempPage, lastPage, loading, error, nextPage, prevPage, onChange, onSubmit })=>{

  const [isOpen, setIsOpen] = useState(false);

  if(loading || !students){
    return null;
  }

  const total=parseInt(students.length);

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);


  const toggle = () => setIsOpen(!isOpen);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

  const applyList = students.slice(startIndex, endIndex).map((students, index)=>(
    <tr key={students.id}>
    <th scope="row">{students.id}</th>
    <td>{students.name}</td>
    <td><input type="checkbox" name={students.id} onChange={onChange}/></td>
    <td><button onClick={toggle}>자세히보기</button></td>
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
            <th>선발</th>
            <th>자세히보기</th>
          </tr>
        </thead>
        <tbody>
          {applyList}
        </tbody>
      </Table>
      <SearchContainer />
      </div>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </span>
      <Button onClick={onSubmit}>저장하기</Button>      
    </div>
  );
}

export default StudentList;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;