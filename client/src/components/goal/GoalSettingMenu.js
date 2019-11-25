// -------------------------------------------------------------------
// GoalTrackerMenu.js
// --
// User selects goals.
// -------------------------------------------------------------------

import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateContact } from "../../actions/contactActions";

class GoalSettingMenu extends Component {
   constructor(props) {
      super(props);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onChangeEmailAddr = this.onChangeEmailAddr.bind(this);
      this.onChangeTemp = this.onChangeTemp.bind(this);
      this.onChangeLastReachOut = this.onChangeLastReachOut.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         id: "",
         lname: "",
         fname: "",
         phone: "",
         emailaddr: "",
         temp: "",
         lastreachout: "",
         date: ""
      };
   }

   componentDidUpdate(prevProps) {
      if (prevProps.edit !== this.props.edit) {
         this.setState({
            id: this.props.edit._id,
            lname: this.props.edit.lname,
            fname: this.props.edit.fname,
            phone: this.props.edit.phone,
            emailaddr: this.props.edit.emailaddr,
            temp: this.props.edit.temp,
            lastreachout: this.props.edit.lastreachout,
            date: this.props.edit.date
         });
      }
   }

   onChangeLastName(e) {
      this.setState({
         lname: e.target.value
      });
   }
   onChangeFirstName(e) {
      this.setState({
         fname: e.target.value
      });
   }
   onChangePhoneNumber(e) {
      this.setState({
         phone: e.target.value
      });
   }
   onChangeEmailAddr(e) {
      this.setState({
         emailaddr: e.target.value
      });
   }
   onChangeTemp(e) {
      this.setState({
         temp: e.target.value
      });
   }
   onChangeLastReachOut(e) {
      this.setState({
         lastreachout: e.target.value
      });
   }

   onSubmit(e) {
      e.preventDefault();
      const contactData = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         id: this.state.id,
         lname: this.state.lname,
         fname: this.state.fname,
         phone: this.state.phone,
         emailaddr: this.state.emailaddr,
         temp: this.state.temp,
         lastreachout: this.state.lastreachout,
         date: this.state.date
      };
      this.props.updateContact(contactData);
   }

   render() {
      return (
         <header>
            <div class="modal-content">
               <font class="col s12" onSubmit={this.onSubmit}>
                  <h5>Goal Setting Menu</h5>
                  <p>
                     Choose how hard you would like to run. Pick a plan from
                     below and we will track your Goals according to your plan.
                     Don’t worry, you can always change the plan at another
                     time!
                  </p>

                  <p align="center">
                     <b>Selected Plan</b>: Keep the Lights On
                  </p>

                  <div class="row">
                     <div class="col s12 m4">
                        <div class="card-panel blue lighten-2 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Keep the Lights On</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              
                              <h6 align="left">Weekly Targets</h6>

                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#64b5f6" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 New Reach Outs: 15
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#64b5f6" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Follow Ups: 10
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#64b5f6" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Team Reach Outs: 5
                              </h6>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small blue" style={{marginTop: '10px'}}>
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel light-green darken-3 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Positioned for Growth</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              <h6 align="left">Weekly Targets</h6>

                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#558b2f" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 New Reach Outs: 25
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#558b2f" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Follow Ups: 15
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#558b2f" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Team Reach Outs: 10
                              </h6>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small green darken-3" style={{marginTop: '10px'}}>
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>

                     <div class="col s12 m4">
                        <div class="card-panel red lighten-2 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Watch Out World</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              <h6 align="left">Weekly Targets</h6>

                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#e57373" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 New Reach Outs: 35
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#e57373" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Follow Ups: 25
                              </h6>
                              <h6 align="left">
                                 <i
                                    class="material-icons tiny"
                                    style={{ color: "#e57373" }}
                                 >
                                    check_circle
                                 </i>{" "}
                                 Team Reach Outs: 15
                              </h6>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small red" style={{marginTop: '10px'}}>
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div class="row">
                     <h6>
                        <font color="red">*</font> None of the plans above suit
                        your needs? Set your targets and create your own custom
                        plan below:
                     </h6>
                  </div>

                  <div class="row">
                     <div class="col s6 offset-s3">
                        <div class="card-panel yellow accent-4 hoverable z-depth-6">
                           <div class="card-content center">
                              <h6>
                                 <font color="white">
                                    <b>Custom Plan</b>
                                 </font>
                              </h6>
                           </div>

                           <div class="card-content white" style={{padding: '10px'}}>
                              <form>
                                 <div class="row">
                                    <div class="col s12">
                                       <i
                                          class="material-icons prefix"
                                          style={{
                                             color: "#ffd600",
                                             marginTop: "30px",
                                             paddingRight: "5px"
                                          }}
                                       >
                                          check_circle
                                       </i>
                                       Weekly New Reach Outs Goal:
                                       <div class="input-field inline">
                                          <input
                                             id="custom_goal1_inline"
                                             type="number"
                                             class="validate"
                                             min="1"
                                             max="99999"
                                             value="15"
                                          />
                                       </div>
                                    </div>
                                 </div>

                                 <div class="row">
                                    <div class="col s12">
                                       <i
                                          class="material-icons prefix"
                                          style={{
                                             color: "#ffd600",
                                             marginTop: "30px",
                                             paddingRight: "5px"
                                          }}
                                       >
                                          check_circle
                                       </i>
                                       Weekly Follow Ups Goal:
                                       <div class="input-field inline">
                                          <input
                                             id="custom_goal2_inline"
                                             type="number"
                                             class="validate"
                                             min="1"
                                             max="99999"
                                             value="10"
                                          />
                                       </div>
                                    </div>
                                 </div>
                                 <div class="row">
                                    <div class="col s12">
                                       <i
                                          class="material-icons prefix"
                                          style={{
                                             color: "#ffd600",
                                             marginTop: "30px",
                                             paddingRight: "5px"
                                          }}
                                       >
                                          check_circle
                                       </i>
                                       Weekly Team Reach Outs Goal:
                                       <div class="input-field inline">
                                          <input
                                             id="custom_goal3_inline"
                                             type="number"
                                             class="validate"
                                             min="1"
                                             max="99999"
                                             value="5"
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </form>
                           </div>
                           <div class="card-action center">
                              <a class="modal-close waves-effect waves-light btn-small yellow darken-2" style={{marginTop: '10px'}}>
                                 Select
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </font>
            </div>
         </header>
      );
   }
}

GoalSettingMenu.propTypes = {
   edit: PropTypes.object,
   updateContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
   edit: state.contacts.edit
});

export default connect(mapStateToProps, { updateContact })(GoalSettingMenu);
