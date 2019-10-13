import React, { Component } from "react";

import DashboardNavbar from "./DashboardNavbar"

class Dashboard extends Component {
render() {
    return (
      <div>

        <DashboardNavbar />
        <div class="section no-pad-bot" id="index-banner">
          <div class="container">
          <br /><br />
            <h1 class="header center green-text">Dashboard</h1>
              <div class="row center">
                <h5 class="header col s12 light">You are logged into the dashboard.</h5>
              </div>

              <br /><br />

              </div>
          </div> 
      </div>
    );
  }
}

export default Dashboard;
