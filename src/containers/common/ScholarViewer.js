import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import { readScholar, unloadScholar } from '../../modules/scholarDetail';
import { setOriginal } from '../../modules/school/scholarship';
import ScholarDetail from '../../components/common/ScholarDetail';
import { removeScholarship } from '../../lib/api/scholar';

const ScholarViewer = ({ match, history })=>{
    const scholarId  = match.params;
    const dispatch = useDispatch();
    const { scholar, error, loading, user } = useSelector(({ scholarDetail, loading, auth })=>({
        scholar:scholarDetail.scholar,
        error:scholarDetail.error,
        loading:loading['scholar/READ_SCHOLAR'],
        user:auth.auth,
    }));

    useEffect(()=>{
        dispatch(readScholar(scholarId.id));
        return()=>{
            dispatch(unloadScholar());
        };
    }, [dispatch, scholarId]);

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