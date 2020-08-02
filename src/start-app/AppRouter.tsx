import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import LoginPageContainer from "../login/LoginPageContainer";
import { DashboardContainer } from "../dashboard/DashboardContainer";
import { INITIAL_APP_ROUTES } from "./AppService";

export const AppRouter: React.FC = () => (
  <HashRouter hashType="noslash" basename={INITIAL_APP_ROUTES.BASE}>
    <Redirect to={{ pathname: INITIAL_APP_ROUTES.LOGIN }} />
    <Switch>
      <Route path={INITIAL_APP_ROUTES.LOGIN}>
        <LoginPageContainer />
      </Route>
      <Route path={INITIAL_APP_ROUTES.OVERVIEW}>
        <DashboardContainer />
      </Route>
    </Switch>
  </HashRouter>
);
