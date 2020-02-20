import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Input, Button, Row, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import styled from 'styled-components';

const SearchBar = ({ onChange, onDropChange, type, onSemesterChange }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const containerStyle = {
        padding:'50px auto 50px',
        margin:'10px',
    }

    const searchBoxStyle = {
        width:'700px',
        margin:'5px',
    }

    const onlysearchBoxStyle = {
        width:'1000px',
        margin:'5px',
    }

    const semesterBoxStyle = {
        width:'200px',
        margin:'5px',
    }

    const ButtonStyle={
        padding:'5px',
    }

    if(type==="notice"){
        return(
            <div style={containerStyle}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Row>
                <Input style={onlysearchBoxStyle} type="text" onChange={onChange} placeholder="검색어를 입력하세요"></Input>
            </Row>
        </div>
        )
    }
    else if(type==="scholar"){
        return(
            <div style={containerStyle}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Row>
                <Input style={searchBoxStyle} type="text" onChange={onChange} placeholder="검색어를 입력하세요"></Input>
                <Input style={semesterBoxStyle} type="text" onChange={onSemesterChange} placeholder="학기를 입력하세요"></Input>
            </Row>
        </div>
        )
    }
    else if(type==="addScholar"){
        return(
            <div style={containerStyle}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Row>
                <Input style={searchBoxStyle} type="text" onChange={onChange} placeholder="검색어를 입력하세요"></Input>
                <Link to={'/scholarships/new'}><Button color="success" style={{margin:'5px'}}>등록</Button></Link>
            </Row>
        </div>
        )
    }

    else if(type==="student"){
        return(
            <div style={containerStyle}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Row>
                <Input style={searchBoxStyle} type="text" onChange={onChange} placeholder="검색어를 입력하세요"></Input>
            </Row>
        </div>
        )
    }
    return (
        <div style={containerStyle}>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Row>
                <Input style={searchBoxStyle} type="text" onChange={onChange} placeholder="검색어를 입력하세요"></Input>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} style={ButtonStyle}>
                <DropdownToggle caret >정렬기준</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem name="grade" onClick={onDropChange}>학점</DropdownItem>
                    <DropdownItem name="semester" onClick={onDropChange}>이수학기</DropdownItem>
                </DropdownMenu>
                </Dropdown>
            </Row>
        </div>
    );
}

export default SearchBar;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;

