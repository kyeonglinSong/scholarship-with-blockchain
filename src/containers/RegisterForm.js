import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm} from '../modules/resgister';
import SignUp from '../components/SignUp';
import styled from 'styled-components';

const RegisterForm = () => {
    const dispatch = useDispatch();
    const { form } = useSelector(({ register })=>({
        form:register
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

    //form submit handler
    const onSubmit = e => {
        e.preventDefault();
    };

    useEffect(()=>{
        dispatch(initializeForm());
    }, [dispatch]);

    return(
        <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <SignUp
        form={form}
        onChange={onChange}
        onSubmit={onSubmit} />
        </div>
    );
};

export default RegisterForm;

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;