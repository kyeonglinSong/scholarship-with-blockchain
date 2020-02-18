import React,{useState, useEffect} from "react";
import "./content2.css"
import { Link, Route, Switch, BrowserRouter } from "react-router-dom";
import Search from "./Search";
import Scholar from "./Scholar.js";
import styled from 'styled-components';

const SAMPLE_URL="https://koreanjson.com/posts";
//"https://api.jikan.moe/v3/top/anime/1/upcoming";

const ScholarList = ()=>{
  const [scholars, setScholars]=useState([]);
  const [sortedScholarses, setSortedScholarses]=useState([]);
  const [searchValue, setSearchValue]=useState("");
  const [filterByState, setFilterByState]=useState("");

 useEffect(()=>{
   fetch(SAMPLE_URL)
   .then(response=>{
     if(response.ok){
       return response.json();
     } else {
       throw new Error("Something is wrong!!Check again!!");
     }
   })
   .then(jsonResponse=>{
     setScholars(jsonResponse);
   })
   .catch(error=>{
     console.log(error);
   });
 }, []);

    useEffect(() => {
      const searchRegex=searchValue && new RegExp(`${searchValue}`, "gi");
      const result=scholars.filter(
        scholar =>
        (!searchRegex || searchRegex.test(scholar.title)) &&
        (!filterByState || scholar.UserId===filterByState)
        );
      setSortedScholarses(result);
  },[searchValue, scholars, filterByState]);
    
  return(
    <div style={{textAlign: 'center'}}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <Search
     searchValue={searchValue}
     setSearchValue={setSearchValue}
     filterByState={filterByState}
     setFilterByState={setFilterByState}
    />
    <br/>
    {sortedScholarses.length> 0 ? ( //일치하는 정보가 있을  때 출력. 
      sortedScholarses.map((scholar, index)=>{
        return (<div ><Scholar key={index} scholar={scholar} /><br/></div>);
      })
      ): (
        <span><strong>일치하는 장학금이 없습니다.</strong><br/></span>
      )}
    </div>
  );
};

export default ScholarList;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;
