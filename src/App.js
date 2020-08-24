import React from "react";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import "./styles.css";
import Page1 from "./Pages/Page1";
import Page2 from "./Pages/Page2";
import Home from "./Pages/Home";
import { StateProvider } from './Context';

export default function App() {
  return (
    <div className="App">
      <StateProvider>
        <Router>
        <div className="leftDiv">
        <ul>
        <li>
          <NavLink exact activeClassName="selected" to="/" >Home</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="selected" to="/page1">Page1</NavLink>
        </li>
        <li>
          <NavLink exact activeClassName="selected" to="/page2">Page2</NavLink>
        </li>
      </ul>
        </div>
        <div className="rightBg floatLeft" >
          <Switch>
            <Route exact path="/page1">
              <Page2 />
            </Route>
            <Route exact path="/page2">
              <Page1 />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        </Router>
        </StateProvider>
    </div>
  );
}
