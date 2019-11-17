import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Modals.
import AddContact from "../contact/AddContact.js";
import EditContact from "../contact/EditContact.js";
import DeleteContact from "../contact/DeleteContact.js";
import ModificationLog from "../log/ModificationLog.js";

class DashboardNavbar extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.reload(false);
   };

   render() {
      const { user } = this.props.auth;

      return (
         <div>
            <div className="navbar-fixed">
               <nav className="z-depth-1"></nav>

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
                              data-target="main-dropdown4"
                           >
                              <i class="large material-icons">notifications</i>
                           </a>
                        </li>
                        <li>
                           <a
                              class="dropdown-trigger"
                              data-target="main-dropdown3"
                           >
                              <i class="large material-icons">account_circle</i>
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
                  <center>
                     <b>Welcome</b>, {user.name.split(" ")[0]}
                     <br />
                     {user.email}
                  </center>
               </li>
               <li>
                  <Link to="/account" onClick={this.forceUpdate}>
                     <i class="material-icons">account_circle</i>My Account
                  </Link>
               </li>
               <li class="divider"></li>
               <li>
                  {" "}
                  <center>
                     <b>My Business</b>
                  </center>
               </li>
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

               <li class="divider"></li>
               <li>
                  <center>
                     <b>Contact Management</b>
                  </center>
               </li>
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
               <li>
                  <Link to="/pipeline" onClick={this.forceUpdate}>
                     <i class="material-icons">assessment</i>Pipeline
                  </Link>
               </li>

               <li class="divider"></li>
               <li>
                  <a onClick={this.onLogoutClick}>
                     <i class="material-icons">arrow_forward</i>Logout
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
               <li>
                  <Link to="/pipeline" onClick={this.forceUpdate}>
                     <i class="material-icons">assessment</i>Pipeline
                  </Link>
               </li>
            </ul>

            <ul id="main-dropdown3" class="dropdown-content">
               <li>
                  <center>
                     <b>Welcome</b>, {user.name.split(" ")[0]}
                     <br />
                     {user.email}
                  </center>
               </li>

               <li>
                  <Link to="/account" onClick={this.forceUpdate}>
                     <i class="large material-icons">account_box</i>My Account
                  </Link>
               </li>

               <li>
                  <a onClick={this.onLogoutClick}>
                     <i class="material-icons">arrow_forward</i>Logout
                  </a>
               </li>
            </ul>

            <ul id="main-dropdown4" class="dropdown-content">
               <li>
                  <center>
                     <b>Notifications</b>
                  </center>
               </li>
            </ul>

            <div id="addcontact" class="modal">
               <AddContact />
            </div>
            <div id="editcontact" class="modal">
               <EditContact />
            </div>

            <div id="deletecontact" class="modal">
               <DeleteContact />
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

export default connect(mapStateToProps, { logoutUser })(DashboardNavbar);
