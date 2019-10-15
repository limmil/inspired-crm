import React, { Component } from "react";
import axios from "axios";

class AddContact extends Component {
   constructor(props) {
      super(props);
      this.onChangeLastName = this.onChangeLastName.bind(this);
      this.onChangeFirstName = this.onChangeFirstName.bind(this);
      this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
         lname: "",
         fname: "",
         phone: ""
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

   onSubmit(e) {
      e.preventDefault();
      const obj = {
         lname: this.state.lname,
         fname: this.state.fname,
         phone: this.state.phone
      };
      axios.post("/add", obj).then(res => console.log(res.data));

      this.setState({
         lname: "",
         fname: "",
         phone: ""
      });
   }

   render() {
      return (
         <header>
            <div class="modal-content">
               <h4>Add Contact</h4>

               <div class="row">
                  <form class="col s12" onSubmit={this.onSubmit}>
                     <div class="row">
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
                     </div>

                     <div class="modal-footer">
                        <input
                           type="submit"
                           value="Submit Contacts"
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

export default AddContact;
