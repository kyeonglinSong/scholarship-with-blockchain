import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changeField, initializeForm, login } from '../modules/auth';
import { check } from '../modules/user';
import SignIn from '../components/SignIn';

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError, user } = useSelector(({ auth, user })=>({
        form:auth.form,
        auth:auth.auth,
        authError:auth.authError,
        user:user.user
    }));

    //change input handler
    const onChange = e =>{
        const { value, name } = e.target;
        dispatch(
            changeField({
                key:name,
                value
            })
        );
    };

    useEffect(()=>{
        dispatch(initializeForm());
    }, [dispatch]);

    useEffect(()=>{
        console.log("in useEffect")
        console.log(auth)
        if(authError){
            //그냥 일단 로그인 실패하면 홈으로 돌아가게 해놓음 로그인 실패 페이지 만들자!
            history.push('/');
            console.log('auth error!');
            console.log(authError);
        }
        if(auth){
            console.log('login success');
            try{
                localStorage.setItem('user', JSON.stringify(auth));
            }catch(e){
                console.log('localStorage is not working');
            }
            //dispatch(check());
        }
    }, [auth, authError, dispatch, history]);

     //form submit handler
     const onSubmit = e => {
        e.preventDefault();
        const { email, password } = form;
        console.log(form);
        dispatch(login({ email, password }));
    };

    return(
        <SignIn 
        form={form}
        onChange={onChange}
        onSubmit={onSubmit} />
    );
};

export default withRouter(LoginForm);