import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
// import { Router } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import {axiosGet, axiosPost} from './utils/axiosRequest';
import store from "./store/initState";
import { Provider } from 'react-redux'
import "./style/index.less";

import App from "./App";
import Home from "./views/home/home.js";
import Aside from "./views/aside/aside.js";
import ModuleFirst from "./views/module/moduleFirst.js";
import ModuleSecond from "./views/module/moduleSecond.js";
import ModuleThird from "./views/module/moduleThird.js";

const createHistory = createBrowserHistory();

window.$get = axiosGet;
window.$post = axiosPost;

ReactDOM.render(
  <Provider store={store}>
    <Router history={createHistory}>
      <Switch >
        <App>
          <Route component={Aside} ></Route>
        </App>
      </Switch>
    </Router>
  </Provider>, document.getElementById('app')
);