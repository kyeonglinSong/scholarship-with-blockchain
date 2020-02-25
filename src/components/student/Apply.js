import React, {useState, createRef} from 'react';
import {Link} from "react-router-dom";
import {Badge} from 'reactstrap';
import {Alert} from 'reactstrap';
const Apply=({ applies, scholarship, scholarId, index})=>{
    let expanderBody=createRef();
    const [isOpen, setIsOpen]= useState(false);
    const toggle=()=>setIsOpen(!isOpen);
    
    const toggleExpander=e=>{
        if(e.target.type==='button') return;
        if(!isOpen){
            toggle();
        }
        else{
            toggle();
        }
    }
    function returnedWhy(){ //내 신청이 왜 반려되었는지 이유를 리턴합니다.  
        if(applies.state==="returned")
         {
             if(applies.priorGrade<scholarship.gradeLimit)
              return <Alert color="danger">성적 미달</Alert>;
         }
    }
    
    return[
        <tr key="main" onClick={toggleExpander}>
            
             <th className="th" scope="row">{applies.id}</th>
             <td><a className="applyId">{applies.id}<br/></a><a className="smalltitle">{applies.title}</a></td>
    <td style={{width:'80px', verticalAlign:'middle'}}><a className="smallstate">
        {(applies.completed)? (<Badge color="danger">반려</Badge>):(<Badge color="success">선정</Badge>)}
           
    </a></td>
                </tr>
      ,
      
      (isOpen && (applies.completed%2===1 ))&& (
          //state가 returned반려면 출력하게 할게요. 하지만 여기에선 state가 없으니 (applies.id%4==1)로 대체.
          /*(isOpen &&(applies.state==="returned"))&&(
            
          )*/
        <tr className="expandable" key="tr-expander">
             <td classname="uk-background-muted" colSpan={6}>
                 <div ref={expanderBody} className="inner uk-grid">
                     <div className="uk-width3-4" style={{textAlign: 'center', marginLeft: '30%', marginRight: '30%'}}>
                         {/*반려의 근거를 서술합니다. 기준 성적, 학기 제한, 전공 제한 */}
                         <h6>
                         <Alert color="danger">성적 미달</Alert><br/>
                        <Alert color="danger">전공 제한</Alert><br/>
                        <Alert color="danger">학기 제한</Alert>
                        </h6> 
                         
                         {/*stateView*/}
    
                        
                     </div>
                 </div>
             </td>
        </tr>
       
      )
    
]
}

export default Apply;