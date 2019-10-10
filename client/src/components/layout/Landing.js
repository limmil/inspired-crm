import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"

class Landing extends Component {
  render() {
    return (
      <div>
         <Navbar />

 <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br /><br />
      <h1 class="header center green-text">Boost Your Business</h1>
      <div class="row center">
        <h5 class="header col s12 light">Manage all your contacts, communications, activities and sales in one single place.</h5>
      </div>
      <div class="row center">
        <Link to="/register"><a href="#foo" id="download-button" class="btn-large waves-effect waves-light blue">Get Started</a></Link>
      </div>
      <br /><br />

    </div>
  </div>


  <div class="container">
    <div class="section">

    
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Swift</h5>

            <p class="light" align="center">Jump start your activity right away.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">Network</h5>

            <p class="light" align="center">Start keeping track of agents, prospects and clients.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Intuitive</h5>

            <p class="light" align="center">Simple and easy design to get used to.</p>
          </div>
        </div>
      </div>

    </div>
    <br /><br />
  </div>

  <footer class="page-footer green">
    <div class="container">
      <div class="row">
        <div class="col l6 s12">
          <h5 class="white-text">Company Bio</h5>
          <p class="grey-text text-lighten-4">We are a team of college students working on this project like it's our full time job. Any amount would help support and continue development on this project and is greatly appreciated.</p>


        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Settings</h5>
          <ul>
            <li><a href="#foo" class="white-text">Link 1</a></li>
            <li><a href="#foo" class="white-text">Link 2</a></li>
            <li><a href="#foo" class="white-text">Link 3</a></li>
            <li><a href="#foo" class="white-text">Link 4</a></li>
          </ul>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text">Connect</h5>
          <ul>
            <li><a href="#foo" class="white-text">Link 1</a></li>
            <li><a href="#foo" class="white-text">Link 2</a></li>
            <li><a href="#foo"class="white-text">Link 3</a></li>
            <li><a href="#foo" class="white-text">Link 4</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
      </div>
    </div>
  </footer>






      </div>
    );
  }
}

export default Landing;
