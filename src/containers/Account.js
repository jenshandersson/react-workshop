import React from "react";
import { Route, Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Bookings from "../components/Bookings";
import Logout from "../components/Logout";

const Account = ({ user, match }) => {
  if (!user) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <ul className="menu">
        <li>
          <Link to={match.url}>Dashboard</Link>
        </li>
        <li>
          <Link to={`${match.url}/bookings`}>Bookings</Link>
        </li>
        <li>
          <Link to={`${match.url}/logout`}>Log out</Link>
        </li>
      </ul>
      <div className="account-content">
        <Route path={`${match.url}/bookings`} component={Bookings} />
        <Route path={`${match.url}/logout`} component={Logout} />
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  user: state.user.loggedInUser
});

export default connect(mapStateToProps)(Account);
