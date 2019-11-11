import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class ChangePassword extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.reload(false);
   };

   render() {
      const { user } = this.props.auth;

      return (
         <header>
            <div class="row">
               <div class="input-field col s6">
                  <input
                     id="current_password"
                     type="password"
                     class="validate"
                  />
                  <label for="current_password">Current Password</label>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s6">
                  <input id="new_password" type="password" class="validate" />
                  <label for="new_password">New Password</label>
               </div>
               <div class="input-field col s6">
                  <input
                     id="confirm_password"
                     type="password"
                     class="validate"
                  />
                  <label for="confirm_password">Confirm Password</label>
               </div>
            </div>

            <div class="modal-footer">
               <button
                  type="submit"
                  class="modal-close waves-effect waves-light btn"
               >
                  Update Password
               </button>
               <br />
               <br />
            </div>
         </header>
      );
   }
}

ChangePassword.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(
   mapStateToProps,
   { logoutUser }
)(ChangePassword);
