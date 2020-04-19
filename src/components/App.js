// react-hot-loader를 사용하기 위한 import
import { hot } from "react-hot-loader/root";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import importedComponent from "react-imported-component";
import Home from "./Home";
import Loading from "./Loading";
//import DynamicPage from "./DynamicPage";
//import NoMatch from "./NoMatch";

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName: "Dynamic" */ "./DynamicPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncCalculatorPage = importedComponent(
  () => import(/* webpackChunkName: "Calculator" */ "./CalculatorPage"),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName: "NoMatch" */ "./NoMatch"),
  {
    LoadingComponent: Loading,
  }
);
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route exact path="/calculator" component={AsyncCalculatorPage} />
          <Route exact component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

// export 할 때 hot 함수를 실행시켜 내보낸다
export default hot(App);
