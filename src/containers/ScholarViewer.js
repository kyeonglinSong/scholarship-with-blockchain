import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readScholar, unloadScholar } from '../modules/scholarDetail';
import ScholarDetail from '../components/ScholarDetail';
import styled from 'styled-components';

const ScholarViewer = ({ match })=>{
    const scholarId  = match.params;
    const dispatch = useDispatch();
    const { scholar, error, loading } = useSelector(({ scholarDetail, loading })=>({
        scholar:scholarDetail.scholar,
        error:scholarDetail.error,
        loading:loading['scholar/READ_SCHOLAR'],
    }));

    useEffect(()=>{
        dispatch(readScholar(scholarId.id));
        return()=>{
            dispatch(unloadScholar());
        };
    }, [dispatch, scholarId]);


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ScholarDetail scholar={scholar} loading={loading} error={error} /></div>;
};

export default withRouter(ScholarViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;