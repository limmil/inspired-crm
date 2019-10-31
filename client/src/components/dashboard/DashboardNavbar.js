import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Modals.
import AddContact from "../contact/AddContact.js";
import EditContact from "../contact/EditContact.js";
import ModificationLog from "../modificationlog/ModificationLog.js";

/* eslint-disable no-console */

class DashboardNavbar extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
   };

   render() {
      const { user } = this.props.auth;

      return (
         <div>
            <div className="navbar-fixed">
               <nav className="z-depth-0"></nav>

               <nav class="blue-grey" role="navigation">
                  <div class="nav-wrapper container">
                     <ul class="left hide-on-med-and-down">
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown1"
                           >
                              My Business
                           </a>
                        </li>
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown2"
                           >
                              Contact Management
                           </a>
                        </li>
                     </ul>
                     <ul class="right hide-on-med-and-down">
                        <li>
                           <a class="modal-trigger" href="#modificationlog">
                              <i class="large material-icons">assessment</i>
                           </a>
                        </li>

                        <li>
                           <a class="modal-trigger" href="#addcontact">
                              <i class="large material-icons">add_circle</i>
                           </a>
                        </li>
                        <li>
                           <a
                              href="https://tomato-timer.com/"
                              target="_blank"
                              alt="Tomato Timer"
                              rel="noopener noreferrer"
                           >
                              <i class="large material-icons">timer</i>
                           </a>
                        </li>
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown3"
                           >
                              <b>Welcome</b>, {user.name.split(" ")[0]}
                              <i class="material-icons right">
                                 arrow_drop_down
                              </i>
                           </a>
                        </li>
                     </ul>

                     <a data-target="nav-mobile" class="sidenav-trigger">
                        <i class="material-icons">menu</i>
                     </a>
                  </div>
               </nav>
            </div>

            <ul id="nav-mobile" class="sidenav">
               <li>
                  <b>Welcome</b>, {user.name.split(" ")[0]}
               </li>
               <li>
                  <a class="dropdown-trigger" data-target="mobile-dropdown1">
                     My Business
                  </a>
               </li>
               <li>
                  <a class="dropdown-trigger" data-target="mobile-dropdown2">
                     Contact Management
                  </a>
               </li>
               <li class="divider"></li>
               <li>
                  <a onClick={this.onLogoutClick}>Logout</a>
               </li>
            </ul>

            <ul id="mobile-dropdown1" class="dropdown-content">
               <li>
                  <Link to="/dashboard" onClick={this.forceUpdate}>
                     <i class="material-icons">dashboard</i>Dashboard
                  </Link>
               </li>
               <li>
                  <Link to="/calendar" onClick={this.forceUpdate}>
                     <i class="material-icons">event</i>Calendar
                  </Link>
               </li>
               <li>
                  <a class="modal-trigger" href="#modificationlog">
                     <i class="material-icons">assessment</i>Modification Log
                  </a>
               </li>
            </ul>

            <ul id="mobile-dropdown2" class="dropdown-content">
               <li>
                  <Link to="/contacts" onClick={this.forceUpdate}>
                     <i class="material-icons">contacts</i>Contact List
                  </Link>
               </li>
               <li>
                  <a class="modal-trigger" href="#addcontact">
                     <i class="material-icons">add_box</i>Add Contact
                  </a>
               </li>
            </ul>

            <ul id="main-dropdown1" class="dropdown-content">
               <li>
                  <Link to="/dashboard" onClick={this.forceUpdate}>
                     <i class="material-icons">dashboard</i>Dashboard
                  </Link>
               </li>
               <li>
                  <Link to="/calendar" onClick={this.forceUpdate}>
                     <i class="material-icons">event</i>Calendar
                  </Link>
               </li>
            </ul>

            <ul id="main-dropdown2" class="dropdown-content">
               <li>
                  <Link to="/contacts" onClick={this.forceUpdate}>
                     <i class="material-icons">contacts</i>Contact List
                  </Link>
               </li>
               <li>
                  <a class="modal-trigger" href="#addcontact">
                     <i class="material-icons">add_box</i>Add Contact
                  </a>
               </li>
            </ul>

            <ul id="main-dropdown3" class="dropdown-content">
               <li>
                  <a href="#!">My Profile</a>
               </li>
               <li class="divider"></li>
               <li>
                  <a onClick={this.onLogoutClick}>Logout</a>
               </li>
            </ul>

            <div id="addcontact" class="modal">
               <AddContact />
            </div>
            <div id="editcontact" class="modal">
               <EditContact />
            </div>
            <div id="modificationlog" class="modal">
               <ModificationLog />
            </div>
         </div>
      );
   }
}

DashboardNavbar.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(
   mapStateToProps,
   { logoutUser }
)(DashboardNavbar);
