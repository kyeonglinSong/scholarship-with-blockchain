import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { readApplyDetail, unloadApplyDetail } from '../modules/applyDetail';
import ApplyDetail from '../components/ApplyDetail';
import styled from 'styled-components';

const ApplyViewer = ({ match })=>{
    const applyId  = match.params;
    const dispatch = useDispatch();
    const { apply, error, loading } = useSelector(({ applyDetail, loading })=>({
        apply:applyDetail.apply,
        error:applyDetail.error,
        loading:loading['apply/READ_APPLYDETAIL'],
    }));

    useEffect(()=>{
        dispatch(readApplyDetail(applyId.id));
        return()=>{
            dispatch(unloadApplyDetail());
        };
    }, [dispatch, applyId]);


    return <div><meta name="viewport" content="width=device-width, initial-scale=1.0" /><ApplyDetail apply={apply} loading={loading} error={error} /></div>;
};

export default withRouter(ApplyViewer);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;