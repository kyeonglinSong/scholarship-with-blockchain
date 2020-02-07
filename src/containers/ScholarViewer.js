import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readScholar, unloadScholar } from '../modules/scholarDetail';
import ScholarDetail from '../components/ScholarDetail';

const ScholarViewer = ({ match })=>{
    const scholarId  = match.params;
    const dispatch = useDispatch();
    const { scholar, error, loading } = useSelector(({ scholarDetail, loading })=>({
        scholar:scholarDetail.scholar,
        error:scholarDetail.error,
        loading:loading['scholar/READ_SCHOLAR'],
    }));

    console.log(scholarId.id);
    useEffect(()=>{
        dispatch(readScholar(scholarId.id));
        return()=>{
            dispatch(unloadScholar());
        };
    }, [dispatch, scholarId]);

    console.log(scholar);

    return <ScholarDetail scholar={scholar} loading={loading} error={error} />;
};

export default withRouter(ScholarViewer);