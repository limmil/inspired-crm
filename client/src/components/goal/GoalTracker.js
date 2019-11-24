// -------------------------------------------------------------------
// GoalTracker.js
// --
// ReachOuts, FollowUps, TeamReachOuts goal tracker cards.
// This is the CRM homepage.
// -------------------------------------------------------------------

import React, { Component } from "react";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

// Goal tracker modals.
import CompleteReachOut from "../goal/CompleteReachOut.js";

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

//
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ReachOutsRow from "./ReachOutsRow";
import { getContacts } from "../../actions/contactActions";

class GoalTracker extends Component {
   componentDidMount() {
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash")
      };

      this.props.getContacts(user);
   }

   // ReachOutsRow
   roRow() {
      return this.props.contacts.map(function(object, i) {
         return <ReachOutsRow obj={object} key={i} />;
      });
   }

   render() {
      return (
         <div>
            <DashboardNavbar />
            <div class="section" style={{ marginTop: "-35px" }}>
               <div class="row"></div>

               <div class="row" style={{ marginBottom: "-30px" }}>
                  <div class="col s12">
                     <div
                        class="card-panel center"
                        style={{
                           paddingBottom: "5px"
                        }}
                     >
                        <div class="row">
                           <div class="input-field col s12 m3">
                              <select
                                 id="adjust_my_graph"
                                 value="" // this.state.graph
                                 onChange="" // this.onChangeGraph
                                 class="validate"
                              >
                                 <option value="" disabled selected></option>
                                 <option value="Daily % Complete">
                                    Daily % Complete
                                 </option>
                                 <option value="Weekly % Complete">
                                    Weekly % Complete
                                 </option>
                                 <option value="Monthly % Complete">
                                    Monthly % Complete
                                 </option>
                                 <option value="Custom Date Range">
                                    Custom Date Range
                                 </option>
                              </select>
                              <label for="adjust_my_graph">
                                 Adjust My Graphs
                              </label>
                           </div>

                           <div
                              style={{
                                 paddingTop: "20px"
                              }}
                           >
                              Current goal plan ::{" "}
                              <a href="#!">Keep the Lights On</a>{" "}
                              <a
                                 class="modal-trigger waves-effect waves-light btn-small"
                                 href="#goalsettingmenu"
                                 style={{ marginLeft: "30px" }}
                              >
                                 Goal Options
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

               <div class="section">
                  <div class="row">
                     <div class="col s12 m4">
                        <div
                           class="card-panel center"
                           style={{ height: "100vh" }}
                        >
                           <i
                              class="material-icons small"
                              style={{ marginTop: "-5px" }}
                           >
                              record_voice_over
                           </i>{" "}
                           <b>Reach Outs</b> (Weekly % Complete)
                           <ReachOuts />
                           <h6 class="light">Target: 15</h6>
                           <h6 class="light">Completed: 1</h6>
                           <h6 class="light">Percentage: 0.06%</h6>
                           <div class="row"></div>
                           <div class="row">
                              <div class="col s6 m6">
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
                           <div class="row">
                              <div class="col s12">
                                 <table
                                    id="myTable"
                                    class="highlight"
                                    style={{ width: "100%", margin: "auto" }}
                                 >
                                    <thead>
                                       <tr></tr>
                                    </thead>

                                    <tbody>{this.roRow()}</tbody>
                                 </table>
                              </div>
                           </div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div
                           class="card-panel center"
                           style={{ height: "100vh" }}
                        >
                           <i
                              class="material-icons small"
                              style={{ marginTop: "-5px" }}
                           >
                              insert_emoticon
                           </i>
                           <b>Follow Ups</b> (Weekly % Complete)
                           <FollowUps />
                           <h6 class="light">Target: 10</h6>
                           <h6 class="light">Completed: 1</h6>
                           <h6 class="light">Percentage: 0.1%</h6>
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
                        <div
                           class="card-panel center"
                           style={{ height: "100vh" }}
                        >
                           <i
                              class="material-icons small"
                              style={{ marginTop: "-5px" }}
                           >
                              people
                           </i>
                           <b>Team Reachouts</b> (Weekly % Complete)
                           <TeamReachOuts />
                           <h6 class="light">Target: 5</h6>
                           <h6 class="light">Completed: 1</h6>
                           <h6 class="light">Percentage: 0.2%</h6>
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

            <div
               id="goalsettingmenu"
               class="modal"
               style={{ width: "70%", padding: "0", left: "0", right: "0" }}
            >
               <GoalSettingMenu />
            </div>

            <div
               id="completereachout"
               class="modal"
               style={{ width: "30%", padding: "0", left: "0", right: "0" }}
            >
               <CompleteReachOut />
            </div>

            <DashboardFooter />
         </div>
      );
   }
}
GoalTracker.propTypes = {
   getContacts: PropTypes.func.isRequired,
   contacts: PropTypes.array.isRequired,
   contact: PropTypes.object,
   update: PropTypes.object,
   delete: PropTypes.object
};

const mapStateToProps = state => ({
   contacts: state.contacts.contacts,
   contact: state.contacts.contact,
   update: state.contacts.update,
   delete: state.contacts.delete
});

export default connect(mapStateToProps, { getContacts })(GoalTracker);
