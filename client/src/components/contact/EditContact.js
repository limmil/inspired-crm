import React, { Component } from "react";
import axios from "axios";
import { connect } from 'react-redux';

class EditContact extends Component {
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
         lastreachout: ""
      };
   }

   componentDidUpdate(prevProps){
      if(prevProps.edit !== this.props.edit){
         this.setState({
            id: this.props.edit._id,
            lname: this.props.edit.lname,
            fname: this.props.edit.fname,
            phone: this.props.edit.phone,
            emailaddr: this.props.edit.emailaddr,
            temp: this.props.edit.temp,
            lastreachout: this.props.edit.lastreachout
         })
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
         lname: this.state.lname,
         fname: this.state.fname,
         phone: this.state.phone,
         emailaddr: this.state.emailaddr,
         temp: this.state.temp,
         lastreachout: this.state.lastreachout
      };
      console.log(contactData)
   }

   render() {
      return (
         <header>
            <div class="modal-content">
               <h3>Edit Contact</h3>
               <hr />

               <div class="row">
                  <form class="col s12" onSubmit={this.onSubmit}>
                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">account_circle</i>
                           <input
                              id="icon_prefix"
                              type="text"
                              class="validate"
                              value={this.state.fname}
                              onChange={this.onChangeFirstName}
                           />
                        </div>

                        <div class="input-field col s6">
                           <i class="material-icons prefix">account_circle</i>
                           <input
                              id="icon_prefix"
                              type="text"
                              class="validate"
                              value={this.state.lname}
                              onChange={this.onChangeLastName}
                           />
                        </div>
                     </div>

                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">phone</i>
                           <input
                              id="icon_telephone"
                              type="text"
                              class="validate"
                              value={this.state.phone}
                              onChange={this.onChangePhoneNumber}
                           />
                        </div>

                        <div class="input-field col s6">
                           <i class="material-icons prefix">email</i>
                           <input
                              id="icon_email"
                              type="text"
                              class="validate"
                              value={this.state.emailaddr}
                              onChange={this.onChangeEmailAddr}
                           />
                        </div>
                     </div>

                     <div class="row">
                        <div class="input-field col s6">
                           <i class="material-icons prefix">tonality</i>
                           <select
                              value={this.state.temp}
                              onChange={this.onChangeTemp}
                              class="validate"
                           >
                              <option value="" disabled selected>
                                 Choose temp option
                              </option>
                              <option value="Cold">Cold</option>
                              <option value="Warm">Warm</option>
                              <option value="Hot">Hot</option>
                           </select>
                        </div>

                        <div class="input-field col s6">
                           <i class="material-icons prefix">assignment_ind</i>
                           <input
                              id="icon_assignment_ind"
                              type="date"
                              class="validate"
                              value={this.state.lastreachout}
                              onChange={this.onChangeLastReachOut}
                           />
                        </div>
                     </div>

                     <div class="modal-footer">
                        <input
                           type="submit"
                           value="Submit"
                           className="btn btn-primary"
                        />
                     </div>
                  </form>
               </div>
            </div>
         </header>
      );
   }
}

const mapStateToProps = state => ({
   edit: state.contacts.edit
 });

export default connect(mapStateToProps)(EditContact);
