import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../modules/auth';
import { withRouter } from 'react-router-dom'

import HeaderStudentLogin from '../../components/common/HeaderStudentLogin';
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
        if(user.id===1)
            return <HeaderStudentLogin user={user} onClick={onLogout}/>
        else
            return <HeaderStudentLogin user={user} onClick={onLogout}/>
    }
}

export default withRouter(HeaderContainer);