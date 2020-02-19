import React from "react";
import "./ApplyList.css"
import { Table, Button } from "reactstrap";
import "./content2.css"
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { AutoComplete } from "antd";


const ApplyList = ({ applies, tempPage, lastPage, loading, error, nextPage, prevPage, total })=>{

  if(loading || !applies){
    return null;
  }

  var startIndex = (tempPage - 1) * 10;
  var endIndex = Math.min(startIndex + 10, total - 1);

  const applyList = applies.slice(startIndex, endIndex).map((applies, index)=>(
    <tr key={applies.id}>
    <th className="th" scope="row">{applies.id}</th>
    <td><a className="applyId">{applies.id}<br/></a><a className="smalltitle">{applies.title}</a></td>
    <td style={{width:'80px', verticalAlign:"middle"}}><a className="smallstate">{(applies.completed)? "완료":"산정중"}</a></td>
  {/* <td>  
  {(function(){ //이제 신청내용의 스테이트에 대해서 가져온다.
     if(applies.state==="applyDone") return "산정중"
     else if(applies.state==="returned") return "자격미달"
     else if(applies.state==="selected") return "지급"
     else return "지급 거절"
   })
   }</td>*/}
    <td className="detail"><Link to={`/applies/${applies.id}`}><button>자세히보기</button></Link></td>
    </tr>
  ));

  const pageStyle = {
    margin:'10px'
  }

  return(
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <span>
      <div className="divStyle">
      <Table striped>
        <thead>
          <tr className="thead">
            <th></th>
            <th>이름</th>
            <th className="thstate">현황</th>
            <th>자세히보기</th>
          </tr>
        </thead>
        <tbody>
          {applyList}
        </tbody>
      </Table>
      <div className="container">
      <Button disabled={tempPage<=1} onClick={prevPage}>이전</Button>
      <span style={pageStyle}>{tempPage}</span>
      <Button disabled={tempPage>=lastPage} onClick={nextPage}>다음</Button>
      </div>
      </div>
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