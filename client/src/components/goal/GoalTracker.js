import React, { Component } from "react";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

// Help modals.
import ReachOutsHelp from "../help/ReachOutsHelp.js";
import FollowUpsHelp from "../help/FollowUpsHelp.js";
import TeamReachOutsHelp from "../help/TeamReachOutsHelp.js";

// Goal tracker modals.
import GoalSettingMenu from "./GoalSettingMenu.js";

// Chart.js visualizations.
import ReachOuts from "../chart/ReachOuts.js";
import FollowUps from "../chart/FollowUps.js";
import TeamReachOuts from "../chart/TeamReachOuts.js";

class GoalTracker extends Component {
   render() {
      return (
         <div>
            <DashboardNavbar />
            <div class="container">
               <div class="row"></div>

               <div class="row" style={{ marginBottom: "-30px" }}>
                  <div class="col s12">
                     <div class="card-panel center">
                        <h6 align="right">
                           Current goal plan ::{" "}
                           <a href="#!">Keep the Lights On</a>{" "}
                           <a
                              class="modal-trigger waves-effect waves-light btn-small"
                              href="#goalsettingmenu"
                              style={{ marginLeft: "20px" }}
                           >
                              Goal Options
                           </a>
                        </h6>
                     </div>
                  </div>
               </div>

               <div class="section">
                  <div class="row">
                     <div class="col s12 m4">
                        <div class="card-panel center">
                           <i class="material-icons medium">
                              record_voice_over
                           </i>
                           <h5>Reach Outs</h5>
                           <h6>(Weekly % Complete)</h6>
                           <ReachOuts />

                           
                           <h6>Target: 15</h6>
                           <h6>Completed: 1</h6>
                           <h6>Percentage: 0.06%</h6>
                           <div class="row"></div>
                           <div class="row">
                              <div class="col s6">
                                 Reach Outs{" "}
                                 <a class="modal-trigger" href="#reachoutshelp">
                                    <i
                                       class="material-icons"
                                       style={{ color: "#e5e600" }}
                                    >
                                       help
                                    </i>
                                 </a>
                              </div>
                              <div class="col s1 push-s4">
                                 <a class="modal-trigger" href="#reachoutshelp">
                                    <i
                                       class="material-icons tooltipped"
                                       data-position="bottom"
                                       data-tooltip="Future Scheduled Reach Outs"
                                       style={{ color: "#c16152" }}
                                    >
                                       highlight
                                    </i>
                                 </a>
                              </div>
                           </div>
                           <div class="divider"></div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel center">
                           <i class="material-icons medium">insert_emoticon</i>
                           <h5>Follow Ups</h5>
                           <h6>(Weekly % Complete)</h6>
                           <FollowUps />

                       
                           <h6>Target: 10</h6>
                           <h6>Completed: 1</h6>
                           <h6>Percentage: 0.1%</h6>
                           <div class="row"></div>
                           <div class="row">
                              <div class="col s6">
                                 Follow Ups{" "}
                                 <a class="modal-trigger" href="#followupshelp">
                                    <i
                                       class="material-icons"
                                       style={{ color: "#e5e600" }}
                                    >
                                       help
                                    </i>
                                 </a>
                              </div>
                              <div class="col s1 push-s4">
                                 <a class="modal-trigger" href="#followupshelp">
                                    <i
                                       class="material-icons tooltipped"
                                       data-position="bottom"
                                       data-tooltip="Future Scheduled Follow Ups"
                                       style={{ color: "#c16152" }}
                                    >
                                       highlight
                                    </i>
                                 </a>
                              </div>
                           </div>
                           <div class="divider"></div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel center">
                           <i class="material-icons medium">people</i>
                           <h5>Team Reach Outs</h5>
                           <h6>(Weekly % Complete)</h6>
                           <TeamReachOuts />
                   
                           <h6>Target: 5</h6>
                           <h6>Completed: 1</h6>
                           <h6>Percentage: 0.2%</h6>
                           <div class="row"></div>
                           <div class="row">
                              <div class="col s8">
                                 Team Reach Outs{" "}
                                 <a
                                    class="modal-trigger"
                                    href="#teamreachoutshelp"
                                 >
                                    <i
                                       class="material-icons"
                                       style={{ color: "#e5e600" }}
                                    >
                                       help
                                    </i>
                                 </a>
                              </div>
                              <div class="col s1 push-s2">
                                 <a
                                    class="modal-trigger"
                                    href="#teamreachoutshelp"
                                 >
                                    <i
                                       class="material-icons tooltipped"
                                       data-position="bottom"
                                       data-tooltip="Future Scheduled Team Reach Outs"
                                       style={{ color: "#c16152" }}
                                    >
                                       highlight
                                    </i>
                                 </a>
                              </div>
                           </div>

                           <div class="divider"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <br />
            <br />

            <div id="reachoutshelp" class="modal bottom-sheet">
               <ReachOutsHelp />
            </div>

            <div id="followupshelp" class="modal bottom-sheet">
               <FollowUpsHelp />
            </div>

            <div id="teamreachoutshelp" class="modal bottom-sheet">
               <TeamReachOutsHelp />
            </div>

            <div id="goalsettingmenu" class="modal">
               <GoalSettingMenu />
            </div>

            <DashboardFooter />
         </div>
      );
   }
}
export default GoalTracker;
