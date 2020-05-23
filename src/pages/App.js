// react-hot-loader를 사용하기 위한 import
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Loading from '../components/Loading';

import Home from './join/Home';
import UserJoin from './join/UserJoin';
import CongurateJoin from './join/CongurateJoin';
import Privacy from './Privacy';

const AsyncDynamicPage = importedComponent(
  () => import(/* webpackChunkName: "Dynamic" */ './DynamicPage'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncCalculatorPage = importedComponent(
  () => import(/* webpackChunkName: "Calculator" */ './Calculator'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncNoMatch = importedComponent(
  () => import(/* webpackChunkName: "NoMatch" */ './NoMatch'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncGoalSettingPage = importedComponent(
  () => import(/* webpackChunkName: "GoalSettingPage" */ './GoalSettingPage'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncMainDashboardPage = importedComponent(
  () => import(/* webpackChunkName: "MainDashboardPage" */ './MainDashboardPage'),
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
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/userJoin" component={UserJoin} />
          <Route exact path="/congurateJoin" component={CongurateJoin} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route exact path="/calculator" component={AsyncCalculatorPage} />
          <Route exact path="/goalSetting" component={AsyncGoalSettingPage} />
          <Route exact path="/mainDashboard" component={AsyncMainDashboardPage} />
          <Route exact component={AsyncNoMatch} />
        </Switch>
      </div>
    </Router>
  );
};

// export 할 때 hot 함수를 실행시켜 내보낸다
export default hot(App);
