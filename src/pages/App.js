// react-hot-loader를 사용하기 위한 import
import { hot } from 'react-hot-loader/root';
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import importedComponent from 'react-imported-component';
import Loading from '../components/Loading';

import Privacy from './Privacy';

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html{
    font-size: 62.5% !important;
    font-family: 'Noto Sans KR' !important;
  }
  body{
    padding: 0;
    margin: 0;
  }
  .showing{
    margin-left:-4.5rem;
  
  .re-showing{
    margin-left: 0%;
  }
`;
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

/* join */
const AsyncHomePage = importedComponent(
  () => import(/* webpackChunkName: "MainDashboardPage" */ './join/Home'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncUserJoinPage = importedComponent(
  () => import(/* webpackChunkName: "MainDashboardPage" */ './join/UserJoin'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncCongurateJoinPage = importedComponent(
  () => import(/* webpackChunkName: "MainDashboardPage" */ './join/CongurateJoin'),
  {
    LoadingComponent: Loading,
  }
);

/* goalSearch */
const AsyncSearchGoalPage = importedComponent(
  () => import(/* webpackChunkName: "MainDashboardPage" */ './goalSearch/searchGoal'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncSearchResultPage = importedComponent(
  () => import(/* webpackChunkName: "MainDashboardPage" */ './goalSearch/searchResult'),
  {
    LoadingComponent: Loading,
  }
);

const AsyncGoalSettingPage = importedComponent(
  () => import(/* webpackChunkName: "GoalSettingPage" */ './GoalSettingPages/GoalSettingPage'),
  {
    LoadingComponent: Loading,
  }
);
const AsyncMainDashboardPage = importedComponent(
  () =>
    import(/* webpackChunkName: "MainDashboardPage" */ './MainDashboardPages/MainDashboardPage'),
  {
    LoadingComponent: Loading,
  }
);

const AsyncMainDashboardBlankPage = importedComponent(
  () =>
    import(
      /* webpackChunkName: "MainDashboardBlankPage" */ './MainDashboardPages/MainDashboardBlankPage'
    ),
  {
    LoadingComponent: Loading,
  }
);
const AsyncGoalListPage = importedComponent(
  () => import(/* webpackChunkName: "GoalListPage" */ './MainDashboardPages/GoalListPage'),
  {
    LoadingComponent: Loading,
  }
);

const AsyncMainGoalDetailPage = importedComponent(
  () =>
    import(/* webpackChunkName: "MainGoalDetailPage" */ './mainGoalDetailPages/mainGoalDetailPage'),
  {
    LoadingComponent: Loading,
  }
);
const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route exact path="/" component={AsyncHomePage} />
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/userJoin" component={AsyncUserJoinPage} />
          <Route exact path="/congurateJoin" component={AsyncCongurateJoinPage} />
          <Route exact path="/searchGoal" component={AsyncSearchGoalPage} />
          <Route exact path="/searchResult" component={AsyncSearchResultPage} />
          <Route exact path="/dynamic" component={AsyncDynamicPage} />
          <Route exact path="/calculator" component={AsyncCalculatorPage} />
          <Route exact path="/goalSetting" component={AsyncGoalSettingPage} />
          <Route exact path="/goalSetting/:goalId" component={AsyncGoalSettingPage} />
          <Route exact path="/mainDashboard" component={AsyncMainDashboardPage} />
          <Route exact path="/mainDashboardBlank" component={AsyncMainDashboardBlankPage} />
          <Route exact path="/mainGoalDetail" component={AsyncMainGoalDetailPage} />
          <Route exact path="/goalList" component={AsyncGoalListPage} />
          <Route exact component={AsyncNoMatch} />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

// export 할 때 hot 함수를 실행시켜 내보낸다
export default hot(App);
