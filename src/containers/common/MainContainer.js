import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { logout } from '../../modules/auth';
import {  Redirect } from 'react-router-dom'


const MainContainer = ( { history } ) =>{

    const { user } = useSelector(({auth})=>({user:auth.auth}));


    
    if(!user){
        return (
        <Redirect to='/login'></Redirect>
        )
    }
    else{
        if(user.id===1){
            console.log("in student")
            return <Redirect to='/student'></Redirect>
        }
        else{
            console.log("in school")
            return <Redirect to='/school'></Redirect>
        }
    }
}

export default MainContainer;