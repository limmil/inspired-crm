// edit.component.js

import React, { Component } from "react";
import axios from "axios";

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
         lname: "",
         fname: "",
         phone: "",
         emailaddr: "",
         temp: "",
         lastreachout: ""
      };
   }

   componentDidMount() {
      axios
         .get("/contacts/edit/" + this.props.match.params.id)
         .then(response => {
            this.setState({
               lname: response.data.lname,
               fname: response.data.fname,
               phone: response.data.phone,
               emailaddr: response.data.emailaddr,
               temp: response.data.temp,
               lastreachout: response.data.lastreachout
            });
         })
         .catch(function(error) {
            console.log(error);
         });
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
      const obj = {
         lname: this.state.lname,
         fname: this.state.fname,
         phone: this.state.phone,
         emailaddr: this.state.emailaddr,
         temp: this.state.temp,
         lastreachout: this.state.lastreachout
      };
      axios
         .post("/contacts/update/" + this.props.match.params.id, obj)
         .then(res => console.log(res.data));

      this.props.history.push("/contacts");
   }

   render() {
      return (
         <header>
            <div class="card">
               <h4 align="center">Edit Contact</h4>

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
                           <label for="icon_prefix">First Name</label>
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
                           <label for="icon_prefix">Last Name</label>
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
                           <label for="icon_telephone">Phone Number</label>
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
                           <label for="icon_email">E-mail</label>
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
                           <label>Temp</label>
                        </div>

                        <div class="input-field col s6">
                           <i class="material-icons prefix">assignment_ind</i>
                           <input
                              id="icon_assignment_ind"
                              type="text"
                              class="validate"
                              value={this.state.lastreachout}
                              onChange={this.onChangeLastReachOut}
                           />
                           <label for="icon_assignment_ind">
                              Last Reach Out
                           </label>
                        </div>
                     </div>

                     <div class="modal-footer">
                        <input
                           type="submit"
                           value="Save"
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
export default EditContact;
