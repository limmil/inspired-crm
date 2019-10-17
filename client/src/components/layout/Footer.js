import React, { Component } from "react";

class Footer extends Component {
   render() {
      return (
         <footer class="page-footer green">
            <div class="container">
               <div class="row">
                  <div class="col l6 s12">
                     <h5 class="white-text">TSG</h5>
                     <p class="grey-text text-lighten-4">
                        We are a team of college students working on this
                        project like it's our full time job. Any amount would
                        help support and continue development on this project
                        and is greatly appreciated.
                     </p>
                  </div>
                  <div class="col l3 s12">
                     <h5 class="white-text">Company</h5>
                     <ul>
                        <li>
                           <a href="#foo" class="white-text">
                              About us
                           </a>
                        </li>
                        <li>
                           <a href="#foo" class="white-text">
                              Contact us
                           </a>
                        </li>
                     </ul>
                  </div>
                  <div class="col l3 s12">
                     <h5 class="white-text">Connect</h5>
                     <ul>
                        <li>
                           <a href="#foo" class="white-text">
                              <img
                                 src="./assets/img/instagram.svg"
                                 alt="Social media."
                                 width="30"
                              ></img>
                           </a>
                        </li>
                        <li>
                           <a href="#foo" class="white-text">
                              <img
                                 src="./assets/img/twitter.svg"
                                 alt="Social media."
                                 width="30"
                              ></img>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
            <div class="footer-copyright">
               <div class="container">
                  Made by{" "}
                  <a
                     class="orange-text text-lighten-3"
                     href="http://materializecss.com"
                  >
                     Materialize
                  </a>
               </div>
            </div>
         </footer>
      );
   }
}

export default Footer;
