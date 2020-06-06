import React from "react";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";
import styled from 'styled-components';

import SchoolMain from "./SchoolMain";
import NavigationSchool from "../common/NavigaionSchool";
import NoticeViewer from "../../containers/common/NoticeViewer";
import NoticeListContainer from "../../containers/common/NoticeListContainer";
import ScholarshipsContainer from "../../containers/school/ScholarshipsContainer";
import ScholarViewer from "../../containers/common/ScholarViewer";
import EditorContainer from "../../containers/school/EditorContainer";
import ScholarEditorContainer from "../../containers/school/ScholarEditorContainer";
import SelectionContainer from "../../containers/school/SelectionContainer";
import StudentListContainer from "../../containers/school/StudentListContainer";
import StudentDetailContainer from "../../containers/school/StudentDetailContainer";

const MainSchool = () => {

    return(
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <BrowserRouter>
            <NavigationSchool />
            <Switch>
                <Route path="/school" component={SchoolMain} />
                <Route exact path="/notices/write" component={EditorContainer} />
                <Route path="/notices/:id" component={NoticeViewer}/>
                <Route path="/notices" component={NoticeListContainer}/>
                <Route exact path="/scholarships/new" component={ScholarEditorContainer} />
                <Route path="/scholarships/:id" component={ScholarViewer}/>
                <Route path="/scholarships" component={ScholarshipsContainer} />
                <Route path="/selections/:id" component={StudentListContainer}/>
                <Route path="/selections" component={SelectionContainer} />
                <Route path="/students/:id/:scholarId" component={StudentDetailContainer}/>
            </Switch>

            </BrowserRouter>
            
            
        </div>
    );
}

export default withRouter(MainSchool);

const Appcontainer = styled.div`
    &,
    & * {
        box-sizing: border-box;
    }
`;