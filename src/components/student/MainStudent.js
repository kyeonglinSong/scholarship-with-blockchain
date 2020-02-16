import React from "react";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";

import NavigationStudnet from "../common/NavigaionStudent";
import NoticeViewer from "../../containers/NoticeViewer";
import NoticeListContainer from "../../containers/NoticeListContainer";
import ApplyListContainer from "../../containers/ApplyListContainer";
import ApplyViewer from "../../containers/ApplyViewer";
import ScholarListContainer from "../../containers/ScholarListContainer";
import ScholarViewer from "../../containers/ScholarViewer";
import Main from './Main';
import styled from 'styled-components';

const MainStudent = ({ history }) => {

    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <BrowserRouter>
                <NavigationStudnet />
                <Switch>
                    <Route path="/student" component={Main} />
                    <Route path="/notices/:id" component={NoticeViewer}/>
                    <Route path="/notices" component={NoticeListContainer}/>
                    <Route path="/scholars/:id" component={ScholarViewer}/>
                    <Route path="/scholars" component={ScholarListContainer} />
                    <Route path="/applies/:id" component={ApplyViewer}/> 
                    <Route path="/applies" component={ApplyListContainer} />
                </Switch>
            </BrowserRouter>

        </div>
    );
}

export default withRouter(MainStudent);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;