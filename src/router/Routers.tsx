import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routerPathProtectedUser, routerPathPublic, routerPathProtectedAdmin } from './RouterPath';

import Login from '../screen/auth/login/Login'
import { systemConfig } from '../config/System';
import ProtectedRoutesAdmin from './ProtectedRoutesAdmin';
import ProtectedRoutesUser from './ProtectedRoutesUser';
import Paperbase from '../components/template/Paperbase';

function Routers() {

    return (
        <Router basename={systemConfig.BaseRouter}>
            <Paperbase Children={
                <Switch>
                    <Route exact path={`/`} component={Login} />
                    <Route exact path={`${routerPathPublic.Login}`} component={Login} />
                    <Route path={Object.values(routerPathProtectedUser)} component={ProtectedRoutesUser} />
                    <Route path={Object.values(routerPathProtectedAdmin)} component={ProtectedRoutesAdmin} />
                </Switch>
            } />
        </Router>
    )
}

export default Routers