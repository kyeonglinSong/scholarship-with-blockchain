import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm} from '../modules/resgister';
import SignUp from '../components/SignUp';

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
        <SignUp
        form={form}
        onChange={onChange}
        onSubmit={onSubmit} />
    );
};

export default RegisterForm;