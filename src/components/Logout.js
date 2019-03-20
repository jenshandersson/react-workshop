import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router";
import { logoutUser } from "../actions/user";
import PropTypes from "prop-types";

class Logout extends Component {
  componentWillMount() {
    this.props.dispatch(logoutUser());
  }

  render() {
    return <Redirect to="/login" />;
  }
}
Logout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired
};

export default withRouter(connect()(Logout));
