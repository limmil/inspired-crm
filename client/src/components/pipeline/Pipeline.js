import React, { Component } from "react";
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Pipeline extends Component {
   render() {
      return (
         <div>
            <DashboardNavbar />

            <div class="container">
               <h3>Pipeline</h3>
               <hr />
            </div>

            <div class="row">
               <div class="col s12 m6 l2">
                  <span class="flow-text">Not Contacted</span>
               </div>
               <div class="col s12 m6 l2">
                  <span class="flow-text">Contacted</span>
               </div>
               <div class="col s12 m6 l2">
                  <span class="flow-text">Needs Follow Up</span>
               </div>
               <div class="col s12 m6 l2">
                  <span class="flow-text">All Info Sent</span>
               </div>
               <div class="col s12 m6 l2">
                  <span class="flow-text">Followed Up</span>
               </div>
               <div class="col s12 m6 l2">
                  <span class="flow-text">Closed/Signed</span>
               </div>
               <div class="col s12 m6 l2">
                  <span class="flow-text">Not Right Now</span>
               </div>

            </div>
           
            <DashboardFooter />
         </div>
      );
   }
}
export default Pipeline;
