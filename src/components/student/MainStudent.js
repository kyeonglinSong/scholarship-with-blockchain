import React from "react";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import styled from 'styled-components';

import NavigationStudnet from "../common/NavigaionStudent";
import NoticeViewer from "../../containers/common/NoticeViewer";
import NoticeListContainer from "../../containers/common/NoticeListContainer";
import ApplyListContainer from "../../containers/student/ApplyListContainer";
import ApplyViewer from "../../containers/student/ApplyViewer";
import ScholarListContainer from "../../containers/student/ScholarListContainer";
import ScholarViewer from "../../containers/common/ScholarViewer";
import StudentMain from './StudentMain';

const MainStudent = ({ history }) => {

    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <BrowserRouter>
                <NavigationStudnet />
                <Switch>
                    <Route path="/student" component={StudentMain} />
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