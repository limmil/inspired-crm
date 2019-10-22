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
         <div style={{ marginTop: 10 }}>
            <h3 align="center">Update Contact List</h3>
            <form onSubmit={this.onSubmit}>
               <div className="form-group">
                  <label>First Name: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.fname}
                     onChange={this.onChangeFirstName}
                  />
               </div>
               <div className="form-group">
                  <label>Last Name: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.lname}
                     onChange={this.onChangeLastName}
                  />
               </div>
               <div className="form-group">
                  <label>Phone Number: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.phone}
                     onChange={this.onChangePhoneNumber}
                  />
               </div>

               <div className="form-group">
                  <label>E-mail: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.emailaddr}
                     onChange={this.onChangeEmailAddr}
                  />
               </div>

               <div className="form-group">
                  <label>Temp: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.temp}
                     onChange={this.onChangeTemp}
                  />
               </div>

               <div className="form-group">
                  <label>Last Reach Out: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.lastreachout}
                     onChange={this.onChangeLastReachOut}
                  />
               </div>

               <div className="form-group">
                  <input
                     type="submit"
                     value="Submit Update"
                     className="btn btn-primary"
                  />
               </div>
            </form>
         </div>
      );
   }
}
export default EditContact;
