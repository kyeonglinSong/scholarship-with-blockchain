import React, { useState } from "react";
import { Table, Button, Modal, ModalHeader, ModalFooter, ModalBody, Input } from "reactstrap";
import "./content.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';


const StudentList = ({ students, tempPage, lastPage, loading, error, nextPage, prevPage, total, onChange, onSubmit })=>{

const [modal, setModal] = useState(false);

  if(loading || !students){
    return null;
  }

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={toggle}>&times;</button>;

  const applyList = students.slice(startIndex, endIndex).map((students, index)=>(
    <tr key={students.id}>
    <th scope="row">{students.id}</th>
    <td>{students.name}</td>
    <td><input type="checkbox" name={students.id} onChange={onChange} checked="true"/></td>
    <td><button onClick={toggle}>자세히보기</button></td>
    <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>{students.name}</ModalHeader>
        <ModalBody>
          <b>Look at the top right of the page/viewport!</b><br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
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