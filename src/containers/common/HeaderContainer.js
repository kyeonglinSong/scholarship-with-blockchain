import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom'

import HeaderStudentLogin from '../../components/common/HeaderStudentLogin';
import HeaderNotLogin from '../../components/common/HeaderNotLogin';
import styled from 'styled-components';

const HeaderContainer = ( { history } ) =>{
    const dispatch = useDispatch();
    const { user } = useSelector(({auth})=>({user:auth.auth}));
    
    const onLogout = e => {
        e.preventDefault();
        dispatch(logout());
        localStorage.removeItem('user');
        history.push('/');
    };

    if(!user){
        return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><HeaderNotLogin/></div>
    }
    else{
        if(user.id===1)
            return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><HeaderStudentLogin user={user} onClick={onLogout}/></div>
        else
            return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><HeaderStudentLogin user={user} onClick={onLogout}/></div>
    }
}

export default withRouter(HeaderContainer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;