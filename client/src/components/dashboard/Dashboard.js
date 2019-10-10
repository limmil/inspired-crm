import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import DashboardNavbar from "./DashboardNavbar"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;

   

    return (
      <div>

        <DashboardNavbar />
        <div class="section no-pad-bot" id="index-banner">
          <div class="container">
          <br /><br />
            <h1 class="header center green-text">Dashboard</h1>
              <div class="row center">
                <h5 class="header col s12 light">You are logged into the dashboard. 👏</h5>
              </div>

              <br /><br />

              </div>
          </div> 
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
