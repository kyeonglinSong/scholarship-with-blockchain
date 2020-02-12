import React from "react";
import { Route, Switch, BrowserRouter, withRouter } from "react-router-dom";

import SchoolMain from "./SchoolMain";
import NavigationSchool from "../common/NavigaionSchool";
import NoticeViewer from "../../containers/NoticeViewer";
import NoticeListContainer from "../../containers/NoticeListContainer";
import ApplyListContainer from "../../containers/ApplyListContainer";
import ApplyViewer from "../../containers/ApplyViewer";
import ScholarshipsContainer from "../../containers/school/ScholarshipsContainer";
import ScholarViewer from "../../containers/ScholarViewer";

import EditorContainer from "../../containers/EditorContainer";

const MainSchool = () => {

    return(
        <div>
            <BrowserRouter>
            <NavigationSchool />
            <Switch>
                <Route path="/school" component={SchoolMain} />
                <Route exact path="/notices/write" component={EditorContainer} />
                <Route path="/notices/:id" component={NoticeViewer}/>
                <Route path="/notices" component={NoticeListContainer}/>
                <Route path="/scholarships/:id" component={ScholarViewer}/>
                <Route path="/scholarships" component={ScholarshipsContainer} />
                <Route path="/selections/:id" component={ApplyViewer}/>
                <Route path="/selections" component={ApplyListContainer} />
            </Switch>

            </BrowserRouter>
            
            
        </div>
    );
}

export default withRouter(MainSchool);