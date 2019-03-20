import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Nav = ({ user }) => (
  <ul className="menu">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/uncontrolled">Uncontrolled input</Link>
    </li>
    <li>
      <Link to="/controlled">Controlled input</Link>
    </li>
    {user && user.name}
  </ul>
);

const mapStateToProps = state => ({
  user: state.user.loggedInUser
});

export default connect(mapStateToProps)(Nav);
