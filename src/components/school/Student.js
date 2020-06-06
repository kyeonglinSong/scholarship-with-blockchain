import React, { useState, createRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const Student = ({ key, index, student, onChange, scholarId, onSelect, scholarState }) => {
    let expanderBody = createRef();
    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const modalToggle = () => setModal(!modal);
    const selectToggle = e => {
      onSelect(e);
      setModal(!modal);
    }

  
    const toggleExpander = e => {
      if (e.target.type === 'button') return;
  
      if (!isOpen) {
        toggle();
        }
        else {
        toggle();
      }
    }

    // isSelect는 student안의 어떤 값 읽어오겠찌??
    const isSelect = (student.state==='선발')
  
      return [
        <tr key="main" onClick={toggleExpander}>
          <td className="uk-text-nowrap">{student.studentId}.</td>
          <td>{student.name}</td>
          <td>{student.state}</td>
          <td>
            {
              scholarState==="close"? 
                <Button type='button' disabled
                style={{backgroundColor:"gray", border:"none"}}>
                  닫혔음</Button>
                  :
               <Button onClick={modalToggle} type='button' 
                style={!isSelect? {backgroundColor:"#0B7527", border:"none"}:{backgroundColor:"#941216", border:"none"}}>
                 {!isSelect? "선발하기":"선발취소" }</Button>
            }
            </td>
          <Modal isOpen={modal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>정말요??</ModalHeader>
            <ModalBody>
              {
                !isSelect? 
                `${student.name} 학생을 선발하시겠습니까?`:`${student.name} 학생을 선발 취소 하시겠습니까?`
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={selectToggle} name={student.studentId}>확인</Button>{' '}
              <Button color="secondary" onClick={modalToggle}>취소</Button>
            </ModalFooter>
          </Modal>
          <td><Link to={`/students/${student.studentId}/${scholarId}`}><Button>자세히보기</Button></Link></td>
        </tr>,
      ];
    
  }

  export default Student;