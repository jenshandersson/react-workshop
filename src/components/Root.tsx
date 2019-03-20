import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import UncontrolledInput from "./UncontrolledInput";
import ControlledInput from "./ControlledInput";
import MaterialLogin from "./MaterialLogin";
import Bookings from "./Bookings";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import Account from '../containers/Account';
import Calc from "./Calc";
import Nav from "../containers/Nav";

const Root = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/account" component={Account} />
        <Nav />
      </Switch>
      <Route exact path="/" component={Calc} />
      <Route path="/uncontrolled" component={UncontrolledInput} />
      <Route path="/controlled" component={ControlledInput} />
      <Route path="/login" component={MaterialLogin} />
      <Route path="/bookings" component={Bookings} />
      <Switch>
        <Route path="/users/4" render={() => <h1>Jens</h1>} />
        <Route path="/users/:userId" component={UserProfile} />
        <Route path="/users" component={UserList} />
      </Switch>
    </div>
  </Router>
);
export default Root;
