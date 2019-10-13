import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

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
               <nav class="green lighten-1" role="navigation">
                  <div class="nav-wrapper container">
                     <a href="#foo" id="logo-container" class="brand-logo">
                        <Link to="/" onClick={this.forceUpdate}>
                           TSG CRM
                        </Link>
                     </a>
                     <ul class="right hide-on-med-and-down">
                        <li>
                           <Link to="/contact">Contacts</Link>
                        </li>
                        <li>
                           <a href="#foo">Clients</a>
                        </li>
                        <li>
                           <a href="#foo">
                              <b>Welcome,</b> {user.name.split(" ")[0]}
                           </a>
                        </li>
                        <li>
                           <a
                              href="#foo"
                              onClick={this.onLogoutClick}
                              class="waves-effect waves-light btn blue"
                           >
                              <Link to="/" onClick={this.forceUpdate}>
                                 Logout
                              </Link>
                           </a>
                        </li>
                     </ul>

                     <a
                        href="#foo"
                        data-target="nav-mobile"
                        class="sidenav-trigger"
                     >
                        <i class="material-icons">menu</i>
                     </a>
                  </div>
               </nav>
            </div>

            <ul id="nav-mobile" class="sidenav">
               <li>
                  <a href="#foo">
                     <b>Welcome,</b> {user.name.split(" ")[0]}
                  </a>
               </li>
            </ul>
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
