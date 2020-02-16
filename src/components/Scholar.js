import React from "react";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import styled from 'styled-components';

const Scholar=({scholar})=>{
    //흑흑 난 한계야...어케 글의 아이디 값을 가져와서 저 링크에 넣을 수 있을까??...
    //누군가 답을 알고 있다면~~~알려주세요ㅜㅜㅜㅜㅜㅜㅜ해결햇슴다^^
    return(
        <Row>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Col>
                <Card body className="text-center">
                <CardTitle><strong>{scholar.title}</strong></CardTitle>
                <CardText>{scholar.content}</CardText>
                <Link to={`/scholars/${scholar.id}`}><Button color="success" >자세히보기/신청하기</Button></Link>
                </Card>
            </Col>
        </Row>
    );
};
export default Scholar;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;
