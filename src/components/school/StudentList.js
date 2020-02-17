import React, { useState } from "react";
import { Table, Button, Collapse, CardBody, CardTitle, Card, Input } from "reactstrap";
import "./content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import SearchContainer from "../../containers/SearchContainer";
import Student from "./Student";


const StudentList = ({ students, tempPage, lastPage, loading, error, nextPage, prevPage, onChange, onSubmit, searchWord })=>{

  if(loading || !students){
    return null;
  }

  if(searchWord){
    console.log(searchWord)
    students=students.filter((students)=>{
    return students.name.indexOf(searchWord)>-1;
    })
  }

  const total=parseInt(students.length);

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);


  const pageStyle = {
    margin:'10px'
  }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span className="content">
      <div className="container">
      <SearchContainer />
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
          {
            students.map((student, index) =>
            <Student key={index} index={index + 1} student={student}/>
                    )
          }
        </tbody>
      </Table>
      </div>
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      <br /><Button onClick={onSubmit} style={{margin:'10px'}}>저장하기</Button>
      </span>
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