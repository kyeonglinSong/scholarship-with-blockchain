import React, {useState, createRef} from 'react';
import {Link} from "react-router-dom";
import Progress from "react-sweet-progress";
const Apply=({ applies, scholarId, index})=>{
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
    function stateView(){ //내 신청의 스테이트에 따라 다른 결과를 리턴합니다. 
        if(applies.state==="returned")
         return <Progress type="circle" percent={100} status="error"/>
        else if(applies.state==="applyDone")
         return <Progress type="circle"/>
    }
    return[
        <tr key="main" onClick={toggleExpander}>
             <th className="th" scope="row">{applies.id}</th>
             <td><a className="applyId">{applies.id}<br/></a><a className="smalltitle">{applies.title}</a></td>
            <td style={{width:'80px'}}><a className="smallstate" style={{verticalAlign:"middle"}}>{(applies.completed)? "반려":"선정"}</a></td>
                </tr>
      ,
      
      (isOpen && (applies.completed%2===1 ))&& (
          //state가 returned반려면 출력하게 할게요. 하지만 여기에선 state가 없으니 (applies.id%4==1)로 대체.
          /*(isOpen &&(applies.state==="returned"))&&(
            
          )*/
        <tr className="expandable" key="tr-expander">
             <td classname="uk-background-muted" colSpan={6}>
                 <div ref={expanderBody} className="inner uk-grid">
                     <div className="uk-width3-4">
                         <h6>기준 성적 미달</h6>
                     </div>
                 </div>
             </td>
        </tr>
       
      )
    
]
}

export default Apply;