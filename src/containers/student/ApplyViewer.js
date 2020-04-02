import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { readApplyDetail, unloadApplyDetail, setToken } from '../../modules/applyDetail';
import ApplyDetail from '../../components/student/ApplyDetail';

const ApplyViewer = ({ match })=>{
    const applyId  = match.params;
    const dispatch = useDispatch();
    const { apply, error, loading, token } = useSelector(({ applyDetail, loading })=>({
        apply:applyDetail.apply,
        error:applyDetail.error,
        loading:loading['apply/READ_APPLYDETAIL'],
        token:applyDetail.token,
    }));

    useEffect(()=>{
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        console.log(temptoken);
        dispatch(setToken(temptoken, tempauthor));
    }, [dispatch]);

    useEffect(()=>{
        dispatch(readApplyDetail(applyId.id, token));
        return()=>{
            dispatch(unloadApplyDetail());
        };
    }, [dispatch, applyId, token]);


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ApplyDetail apply={apply} loading={loading} error={error} /></div>;
};

export default withRouter(ApplyViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;