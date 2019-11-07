import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
   render() {
      return (
         <div>
            <div className="navbar-fixed">
               <nav className="z-depth-0"></nav>
               <nav class="white" role="navigation">
                  <div class="nav-wrapper container">
                     <a id="logo-container" class="brand-logo">
                        <Link to="/" onClick={this.forceUpdate}>
                           <font color="#212121">TSG CRM</font>
                        </Link>
                     </a>
                     <ul class="right hide-on-med-and-down">
                        <li>
                           <Link to="/login" class="waves-effect waves-light btn blue">
                                 Log In
                           </Link>
                        </li>
                     </ul>

                     <a
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
                  <Link to="/login">Login</Link>
               </li>
            </ul>
         </div>
      );
   }
}

export default Navbar;
