import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { changeField, initializeForm, student_login, employee_login, initialize } from '../../modules/auth';
import SignIn from '../../components/common/SignIn';

const LoginForm = ({ history }) => {
    const dispatch = useDispatch();
    const { form, auth, authError } = useSelector(({ auth })=>({
        form:auth.form,
        auth:auth.auth,
        authError:auth.authError,
    }));

    //change input handler
    const onChange = e =>{
        if(e.target.id==="student"||e.target.id==="employee"){
            console.log("in radio")
            const id=e.target.id;
            const name=e.target.name;
            dispatch(
                changeField({
                    key:name,
                    value:id
                })
            )
        }
        else{
            const { value, name } = e.target;
        dispatch(
            changeField({
                key:name,
                value
            })
        );
        }
    };


    useEffect(()=>{
        dispatch(initializeForm());
    }, [dispatch]);

    useEffect(()=>{
        console.log(auth)
        if(authError){
            //그냥 일단 로그인 실패하면 홈으로 돌아가게 해놓음 로그인 실패 페이지 만들자!
            history.push('/');
            console.log('auth error!');
            console.log(authError);
        }
        if(auth){
            try{
                localStorage.setItem('user', JSON.stringify(auth));
                dispatch(initialize());
            }catch(e){
                console.log('localStorage is not working');
            }
        }
    }, [auth, authError, dispatch, history]);

     //form submit handler
     const onSubmit = e => {
        e.preventDefault();
        const type=form.type;
        const { userId, password } = form;
        if(type==='student'){
            dispatch(student_login({ userId, password }));
        }
        else{
            dispatch(employee_login({ userId, password }))
        }
    };

    return(
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SignIn 
        form={form}
        onChange={onChange}
        onSubmit={onSubmit} />
        </div>
    );
};

export default withRouter(LoginForm);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;