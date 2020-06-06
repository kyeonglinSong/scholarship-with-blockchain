import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  Redirect } from 'react-router-dom'
import styled from 'styled-components';


const MainContainer = ( { history } ) =>{

    const { user } = useSelector(({auth})=>({user:auth.auth}));
    //const user = localStorage.getItem('user');

    
    if(!user){
        return (
            <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><Redirect to='/login'></Redirect></div>
        )
    }
    else{
        if(user.type==="ADMIN"){
            return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><Redirect to='/school'></Redirect></div>
        }
        else{
            return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><Redirect to='/student'></Redirect></div>
        }
    }
}

export default MainContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;