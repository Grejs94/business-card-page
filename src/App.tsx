import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { mainRoutes } from "assets/index";
import { Menu } from "components";

import * as Styled from "./styled";

function App() {
  return (
    <>
      <Router>
        <Styled.AppWrapper>
          <Menu />
          <Switch>
            {mainRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                component={route.component}
              />
            ))}
          </Switch>
        </Styled.AppWrapper>
      </Router>
    </>
  );
}

export default App;
