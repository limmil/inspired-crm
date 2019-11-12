import React, { Component } from "react";
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Pipeline extends Component {
  render() {
    return (
      <div>
        <DashboardNavbar />

        <div class="container">
          <h5>Pipeline</h5>
          <hr />

          <table class="responsive-table">
            <thead>
              <tr>
                <th>Not Contacted (0)</th>
                <th>Contacted (0)</th>
                <th>Needs Follow Up (0)</th>
                <th>All Info Sent (0)</th>
                <th>Followed Up (0)</th>
                <th>Closed/Signed (0)</th>
                <th>Not Right Now (0)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John Doe</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <DashboardFooter />
      </div>
    );
  }
}
export default Pipeline;
