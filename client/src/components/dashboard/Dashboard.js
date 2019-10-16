import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardFooter from "./DashboardFooter";

class Dashboard extends Component {

render() {
return (
<div>
   <DashboardNavbar />
   <section class="section section-stats center">
      <div class="row">
         <div class="col s12 m6 l3">
            <div class="card-panel blue lighten-1 white-text center">
               <i class="material-icons medium">insert_emoticon</i>
               <h5>Follow Ups</h5>
               <h3 class="count">0</h3>
               <div class="progress grey lighten-1">
                  <div class="determinate white" mapStyle="width: 40%;"></div>
               </div>
            </div>
         </div>
         <div class="col s12 m6 l3">
            <div class="card-panel center">
               <i class="material-icons medium">mode_edit</i>
               <h5>Notes</h5>
               <h3 class="count">0</h3>
               <div class="progress grey lighten-1">
                  <div class="determinate blue" mapStyle="width: 20%;"></div>
               </div>
            </div>
         </div>
         <div class="col s12 m6 l3">
            <div class="card-panel blue lighten-1 white-text center">
               <i class="material-icons medium">mode_comment</i>
               <h5>Not Contacted</h5>
               <h3 class="count">0</h3>
               <div class="progress grey lighten-1">
                  <div class="determinate white" mapStyle="width: 40%;"></div>
               </div>
            </div>
         </div>
         <div class="col s12 m6 l3">
            <div class="card-panel center">
               <i class="material-icons medium">supervisor_account</i>
               <h5>Contacts</h5>
               <h3 class="count">0</h3>
               <div class="progress grey lighten-1">
                  <div class="determinate blue lighten-1" mapStyle="width: 10%;"></div>
               </div>
            </div>
         </div>
      </div>
   </section>


  <section class="section section-visitors blue lighten-4">
   
  </section>

  <DashboardFooter />

</div>
);
}
}
export default Dashboard;