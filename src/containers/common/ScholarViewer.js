import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { readScholar, unloadScholar, setToken } from '../../modules/scholarDetail';
import { setOriginal } from '../../modules/school/scholarship';
import ScholarDetail from '../../components/common/ScholarDetail';
import { removeScholarship } from '../../lib/api/scholar';

const ScholarViewer = ({ match, history })=>{
    const scholarId  = match.params;
    const dispatch = useDispatch();
    const { scholar, error, loading, user, token } = useSelector(({ scholarDetail, loading, auth })=>({
        scholar:scholarDetail.scholar,
        error:scholarDetail.error,
        loading:loading['scholar/READ_SCHOLAR'],
        user:auth.auth,
        token:scholarDetail.token,
    }));

    useEffect(()=>{
        const tempuser=JSON.parse(localStorage.getItem("user"));
        const temptoken=tempuser.data.token;
        const tempauthor=tempuser.data.role;
        console.log(temptoken);
        dispatch(setToken(temptoken, tempauthor));
    }, [dispatch]);

    useEffect(()=>{
        dispatch(readScholar(scholarId.id, token));
        return()=>{
            dispatch(unloadScholar());
        };
    }, [dispatch, scholarId, token]);

    const onRemove = async() => {
        try{
            await removeScholarship(scholarId);
            history.push('/scholarships');
        }catch(e){
            console.log(e)
        }
    }

    const onEdit = () =>{
        dispatch(setOriginal(scholar));
        history.push('/scholarships/new');
    }

    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <ScholarDetail scholar={scholar} loading={loading} error={error} user={user} onRemove={onRemove} onEdit={onEdit}/></div>;
};

export default withRouter(ScholarViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;