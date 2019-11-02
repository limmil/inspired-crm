import React, { Component } from "react";
import DashboardNavbar from "./DashboardNavbar";
import DashboardFooter from "./DashboardFooter";

import ReachOutsHelp from "../help/ReachOutsHelp.js";
import FollowUpsHelp from "../help/FollowUpsHelp.js";
import TeamReachOutsHelp from "../help/TeamReachOutsHelp.js";

class Dashboard extends Component {
   render() {
      return (
         <div>
            <DashboardNavbar />
            <div class="container">
               <div class="row"></div>

               <div class="row">
                  <div class="col s12">
                     <div class="card-panel center">
                        <h6 align="right">
                           Current goal plan :: {" "}
                           <a href="#!">Keep the Lights On</a> {" "}
                           <a class="waves-effect waves-light btn-small">
                              Goal Options
                           </a>
                        </h6>
                     </div>
                  </div>
               </div>

               <div class="divider"></div>

               <div class="section">
                  <h5 class="black-text">Overview</h5>

                  <div class="row">
                     <div class="col s12 m4">
                        <div class="card-panel center">
                           <i class="material-icons medium">insert_emoticon</i>
                           <h5>Reach Outs</h5>
                           <h6>Target: 15</h6>
                           <h6>Completed: 0</h6>
                           <h6>Percentage: 0%</h6>
                           <h3 class="count">5</h3>
                           <div class="progress grey lighten-1">
                              <div
                                 class="determinate white"
                                 mapStyle="width: 40%;"
                              ></div>
                           </div>
                           <p>
                              New Reach Outs{" "}
                              <a class="modal-trigger" href="#reachoutshelp">
                                 <i class="material-icons">help</i>
                              </a>
                           </p>
                           <p class="light"></p>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel center">
                           <i class="material-icons medium">mode_edit</i>
                           <h5>Follow Ups</h5>
                           <h6>Target: 10</h6>
                           <h6>Completed: 0</h6>
                           <h6>Percentage: 0%</h6>
                           <h3 class="count">5</h3>
                           <div class="progress grey lighten-1">
                              <div
                                 class="determinate blue"
                                 mapStyle="width: 20%;"
                              ></div>
                           </div>
                           <p>
                              Follow Ups
                              <a class="modal-trigger" href="#followupshelp">
                                 <i class="material-icons">help</i>
                              </a>
                           </p>
                           <p class="light"></p>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel center">
                           <i class="material-icons medium">mode_comment</i>
                           <h5>Team Reach Outs</h5>
                           <h6>Target: 5</h6>
                           <h6>Completed: 0</h6>
                           <h6>Percentage: 0%</h6>
                           <h3 class="count">2</h3>
                           <div class="progress grey lighten-1">
                              <div
                                 class="determinate white"
                                 mapStyle="width: 40%;"
                              ></div>
                           </div>
                           <p>
                              Team Reach Outs{" "}
                              <a
                                 class="modal-trigger"
                                 href="#teamreachoutshelp"
                              >
                                 <i class="material-icons">help</i>
                              </a>
                           </p>
                           <p class="light"></p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div id="reachoutshelp" class="modal bottom-sheet">
               <ReachOutsHelp />
            </div>

            <div id="followupshelp" class="modal bottom-sheet">
               <FollowUpsHelp />
            </div>

            <div id="teamreachoutshelp" class="modal bottom-sheet">
               <TeamReachOutsHelp />
            </div>

            <DashboardFooter />
         </div>
      );
   }
}
export default Dashboard;
