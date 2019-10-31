import React, { Component } from "react";
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Pipeline extends Component {
   render() {
      return (
         <div>
            <DashboardNavbar />
            
            
               
            <div class="section">
                  <h5 class="black-text"></h5>

                  <div class="row">
                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">insert_emoticon</i>
                           <h6>Not Contacted (0)</h6>
                        </div>
                     </div>

                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">mode_edit</i>
                           <h6>Contacted (0)</h6>
                        </div>
                     </div>

                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">mode_comment</i>
                           <h6>Needs Follow Up (0)</h6>
                        </div>
                     </div>

                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">mode_comment</i>
                           <h6>All Info Sent (0)</h6>
                        </div>
                     </div>
    
                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">mode_comment</i>
                           <h6>Followed Up (0)</h6>
                        </div>
                     </div>

                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">mode_comment</i>
                           <h6>Closed/Signed (0)</h6>
                        </div>
                     </div>

                     <div class="col s2 m6 l3">
                        <div class="card-panel center">
                           <i class="material-icons small">mode_comment</i>
                           <h6>Not Right Now (0)</h6>
                        </div>
                     </div>
                  </div>


               </div>
            <DashboardFooter />
         </div>
      );
   }
}
export default Pipeline;
