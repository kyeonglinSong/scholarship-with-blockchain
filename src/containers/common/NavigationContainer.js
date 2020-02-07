import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom'

import LoginContainer from '../LoginContainer';
import NavigationStudent from '../../components/common/NavigaionStudent';
import NavigationSchool from '../../components/common/NavigaionSchool';


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
        return <LoginContainer/>
    }
    else{
        console.log(user);
        if(user.id===1){
            console.log("in student")
            return <NavigationStudent user={user}/>
        }
        else{
            console.log("in school")
            return <NavigationSchool user={user}/>
        }
    }
}

export default NavigationContainer;