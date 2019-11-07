import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

class Landing extends Component {
   render() {
      return (
         <div>
            <Navbar />

            <div id="index-banner" class="parallax-container">
               <div class="section no-pad-bot">
                  <div class="container">
                     <br />
                     <br />
                     <h1 class="header center white-text text-lighten-2">
                        <b>Boost Your Business</b>
                     </h1>
                     <div class="row center">
                        <h5 class="header col s12 light">
                           Manage all your contacts, communications, activities
                           and sales in one single place.
                        </h5>
                     </div>
                     <div class="row center">
                        <Link to="/register">
                           <a
                              href="#foo"
                              id="download-button"
                              class="btn-large waves-effect waves-light blue"
                           >
                              Get Started
                           </a>
                        </Link>
                     </div>
                     <br />
                     <br />
                  </div>
               </div>
               <div class="parallax">
                  <img src="./assets/img/bg1.jpg" alt="Banner 1"></img>
               </div>
            </div>

            <div class="container">
               <div class="section">
                  <div class="row">
                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center blue-text">
                              <i class="material-icons">flash_on</i>
                           </h2>
                           <h5 class="center">Swift</h5>

                           <p class="light">
                              <center>
                                 Jump start your activity. Visualize your plan
                                 for your goals and execute fast.
                              </center>
                           </p>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center blue-text">
                              <i class="material-icons">group</i>
                           </h2>
                           <h5 class="center">Network</h5>
                           <p class="light">
                              <center>
                                 Start managing your contacts and leads. Reach
                                 out to more people, retain your customers, and
                                 make more of an impact in your community.
                              </center>
                           </p>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="icon-block">
                           <h2 class="center blue-text">
                              <i class="material-icons">settings</i>
                           </h2>
                           <h5 class="center">Intuitive</h5>
                           <p class="light">
                              <center>
                                 Developed with a modern design that is simple
                                 to understand and user friendly.
                              </center>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div class="parallax-container valign-wrapper">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center">
                        <h5 class="header col s12 light">
                           Reach out to prospects at the right moment and engage
                           them across every channel.
                        </h5>
                     </div>
                  </div>
               </div>
               <div class="parallax">
                  <img src="./assets/img/bg5.jpg" alt="Banner 2"></img>
               </div>
            </div>

            <div class="container">
               <div class="section">
                  <div class="row">
                     <div class="col s12 center">
                        <h3>
                           <i class="mdi-content-send brown-text"></i>
                        </h3>
                        <h4>Leads Are Important</h4>
                        <p class="left-align light">
                           Every business, big or small, depends on leads. Leads
                           are potential customers who have shown interest in
                           your solution but who have not yet made a purchase.
                           For businesses to grow, you have to convert leads to
                           loyal customers. And to do that right, you need to
                           manage sales leads in an organized manner. In this
                           page, you will learn everything you need to know
                           about lead management and how it can help close deals
                           faster.
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <div class="parallax-container valign-wrapper">
               <div class="section no-pad-bot">
                  <div class="container">
                     <div class="row center">
                        <h5 class="header col s12 light">
                           CRM application that helps you sell smarter, better,
                           faster.
                        </h5>
                     </div>
                  </div>
               </div>
               <div class="parallax">
                  <img src="./assets/img/bg4.jpg" alt="Banner 3"></img>
               </div>
            </div>
            
            <Footer />
         </div>
      );
   }
}

export default Landing;
