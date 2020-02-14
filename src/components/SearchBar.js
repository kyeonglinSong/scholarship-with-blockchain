import React from 'react'
import { Input, Button, Row } from 'reactstrap';

const SearchBar = ({ onChange }) => {
    const containerStyle = {
        padding:'50px auto 50px',
        margin:'10px',
    }

    const searchBoxStyle = {
        padding:'10px auto 10px',
        width:'900px',
    }

    const ButtonStyle={
        padding:'10px',
    }
    return (
        <div style={containerStyle}>
            <Row>
                <Input style={searchBoxStyle} type="text" onChange={onChange} placeholder="검색어를 입력하세요"></Input>
            </Row>
        </div>
        
    );
}

export default SearchBar;