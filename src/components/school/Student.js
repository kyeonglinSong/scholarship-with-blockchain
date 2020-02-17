import React, { useState, createRef } from 'react'
import { slideDown, slideUp } from '../animation';

const Student = ({key, index, student, onChange}) => {
    let expanderBody = createRef();
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

  
    const toggleExpander = e => {
      if (e.target.type === 'checkbox') return;
  
      if (!isOpen) {
        toggle();
        }
        else {
        toggle();
      }
    }
  
      return [
        <tr key="main" onClick={toggleExpander}>
          <td className="uk-text-nowrap">{index}.</td>
          <td>{student.name}</td>
          <td>{student.id}</td>
          <td><input className="uk-checkbox" type="checkbox" name={student.id} onChange={onChange}/></td>
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