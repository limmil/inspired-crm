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
         id: "this.props.obj._id",
         lname: "this.props.obj._id",
         fname: "",
         phone: "",
         emailaddr: "",
         temp: "",
         lastreachout: ""
      };
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
      axios
         .post("/api/contacts/update", contactData)
         .then(res => console.log(res.data));
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

export default EditContact;
