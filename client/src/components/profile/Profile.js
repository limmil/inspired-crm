import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Profile extends Component {
   onLogoutClick = e => {
      e.preventDefault();
      this.props.logoutUser();
      window.location.reload(false);
   };

   render() {
      const { user } = this.props.auth;

      return (
         <div>
            <DashboardNavbar />

            <div class="container">
               <div class="row">
                  <div class="col s12 m6 l4">
                     <div id="profile-card" class="card">
                        <div class="card-image waves-effect waves-block waves-light">
                           <img
                              class="activator"
                              src="http://demo.geekslabs.com/materialize/v2.1/layout03/images/user-bg.jpg"
                              alt="user background"
                           />
                        </div>
                        <div class="card-content">
                           <img
                              src="./assets/img/useravatar.svg"
                              alt=""
                              class="circle responsive-img activator card-profile-image"
                           />
                           <a class="btn-floating activator btn-move-up waves-effect waves-light darken-2 right">
                              <i class="mdi-action-account-circle"></i>
                           </a>

                           <span class="card-title activator grey-text text-darken-4">
                              {user.name}
                           </span>
                           <p>
                              <i class="mdi-communication-email cyan-text text-darken-2"></i>{" "}
                              [Company Name]
                           </p>
                           <p>
                              <i class="mdi-communication-email cyan-text text-darken-2"></i>{" "}
                              {user.email}
                           </p>
                        </div>
                        <div class="card-reveal">
                           <span class="card-title grey-text text-darken-4">
                              {user.name}{" "}
                              <i class="mdi-navigation-close right"></i>
                           </span>

                           <p>
                              <i class="mdi-communication-email cyan-text text-darken-2"></i>{" "}
                              {user.email}
                           </p>
                           <p>Here is some more information about this card.</p>
                           <p>
                              <i class="mdi-action-perm-identity cyan-text text-darken-2"></i>{" "}
                              [Company Name]
                           </p>
                           <p>
                              <i class="mdi-action-perm-phone-msg cyan-text text-darken-2"></i>{" "}
                              [User phone #]
                           </p>

                           <p>
                              <i class="mdi-social-cake cyan-text text-darken-2"></i>{" "}
                              [Birthdate]
                           </p>
                           <p>
                              <i class="mdi-device-airplanemode-on cyan-text text-darken-2"></i>{" "}
                              [Location]
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <DashboardFooter />
         </div>
      );
   }
}

Profile.propTypes = {
   logoutUser: PropTypes.func.isRequired,
   auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
   auth: state.auth
});

export default connect(
   mapStateToProps,
   { logoutUser }
)(Profile);
