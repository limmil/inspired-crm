import React, { Component } from "react";

class DashboardFooter extends Component {
   render() {
      return (
         <footer class="page-footer blue-grey">
            <div class="footer-copyright">
               <div class="container">
                  <span>
                     Copyright ©
                     <script type="text/javascript">
                        document.write(new Date().getFullYear());
                     </script>{" "}
                     <a
                        class="grey-text text-lighten-2"
                        href="http://themeforest.net/user/pixinvent/portfolio?ref=pixinvent"
                     >
                        PIXINVENT
                     </a>{" "}
                     All rights reserved.
                  </span>
                  <span class="right hide-on-small-only">
                     {" "}
                     Design and Developed by{" "}
                     <a
                        class="grey-text text-lighten-2"
                        href="https://pixinvent.com/"
                     >
                        PIXINVENT
                     </a>
                  </span>
               </div>
            </div>
         </footer>
      );
   }
}

export default DashboardFooter;
