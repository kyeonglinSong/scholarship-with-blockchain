import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom'

import HeaderLogin from '../../components/common/HeaderLogin';
import HeaderNotLogin from '../../components/common/HeaderNotLogin';

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
        return <HeaderNotLogin/>
    }
    else{
        return <HeaderLogin user={user} onClick={onLogout}/>
    }
}

export default withRouter(HeaderContainer);