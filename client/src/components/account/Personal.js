import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";


class Personal extends Component {
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
                     value={user.fname}
                     id="first_name"
                     type="text"
                     class="validate"
                  />
                  <label for="first_name">First Name</label>
               </div>
               <div class="input-field col s6">
                  <input
                     value={user.lname}
                     id="last_name"
                     type="text"
                     class="validate"
                  />
                  <label for="last_name">Last Name</label>
               </div>
            </div>
            <div class="row">
               <div class="input-field col s6">
                  <input
                     value={user.email}
                     id="email"
                     type="text"
                     class="validate"
                  />
                  <label for="email">E-mail</label>
               </div>
               <div class="input-field col s6">
                  <input id="company" type="text" class="validate" />
                  <label for="company">Company</label>
               </div>
            </div>
            <div class="modal-footer">
               <button
                  type="submit"
                  class="modal-close waves-effect waves-light btn"
               >
                  Update Profile
               </button>
            </div>
         </header>
      );
   }
}

Personal.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(
   mapStateToProps,
   { logoutUser }
)(Personal);
