import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom'

import LoginContainer from '../LoginContainer';
import NavigationStudent from '../../components/common/NavigaionStudent';
import NavigationSchool from '../../components/common/NavigaionSchool';
import styled from 'styled-components';


const NavigationContainer = ( { history } ) =>{
    const dispatch = useDispatch();
    const { user } = useSelector(({auth})=>({user:auth.auth}));

    if(user && !localStorage.getItem('user')){
        console.log("in user set");
        try{
            localStorage.setItem('user', JSON.stringify(user));
        }catch(e){
            console.log('localStorage is not working');
        }
    }
    
    if(!user){
        return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><LoginContainer/></div>
    }
    else{
        console.log(user);
        if(user.id===1){
            console.log("in student")
            return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><NavigationStudent user={user}/></div>
        }
        else{
            console.log("in school")
            return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><NavigationSchool user={user}/></div>
        }
    }
}

export default NavigationContainer;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;