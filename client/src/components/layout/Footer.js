import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
   render() {
      return (
         <footer class="page-footer green">
         <div class="footer-copyright">
            <div class="container">
               <span>
                  Copyright ©
                  <script type="text/javascript">
                     document.write(new Date().getFullYear());
                  </script>{" "}
                  <Link
                     to="/"
                     onClick={this.forceUpdate}
                     class="grey-text text-lighten-2"
                  >
                     TSG
                  </Link>{" "}
                  All rights reserved.
               </span>
              
            </div>
         </div>
      </footer>
      );
   }
}

export default Footer;
