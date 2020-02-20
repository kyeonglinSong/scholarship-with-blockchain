import React, { useState, createRef } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from "react-router-dom";

const Student = ({ key, index, student, onChange, scholarId, onSelect }) => {
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
    const isSelect = (student.id%2 ===0)
  
      return [
        <tr key="main" onClick={toggleExpander}>
          <td className="uk-text-nowrap">{index}.</td>
          <td>{student.name}</td>
          <td>{student.name}</td>
          <td><Button onClick={modalToggle} type='button'>{isSelect? "선발하기":"선발취소" }</Button></td>
          <Modal isOpen={modal} toggle={modalToggle}>
            <ModalHeader toggle={modalToggle}>정말요??</ModalHeader>
            <ModalBody>
              {
                isSelect? 
                `${student.name} 학생을 선발하시겠습니까?`:`${student.name} 학생을 선발 취소 하시겠습니까?`
              }
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={selectToggle} name={student.id}>확인</Button>{' '}
              <Button color="secondary" onClick={modalToggle}>취소</Button>
            </ModalFooter>
          </Modal>
          <td><Link to={`/students/${student.id}/${scholarId}`}><Button>자세히보기</Button></Link></td>
        </tr>,
        isOpen && (
          <tr className="expandable" key="tr-expander">
            <td className="uk-background-muted" colSpan={6}>
              <div ref={expanderBody} className="inner uk-grid">
                <div className="uk-width-3-4">
                  <h3>{student.name.first}</h3>
                  <p>
                    Address:<br/>
                    <i>
                      {student.name}<br/>
                      {student.name}<br/>
                      {student.name}
                    </i>
                  </p>
                  <p>
                    E-mail: {student.name}<br/>
                    Phone: {student.name}
                  </p>
                  <p>Date of birth: {student.name}</p>
                </div>
              </div>
            </td>
          </tr>
        )
      ];
    
  }

  export default Student;