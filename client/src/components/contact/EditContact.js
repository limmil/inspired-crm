// edit.component.js

import React, { Component } from "react";
import axios from "axios";

class EditContact extends Component {
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

   componentDidMount() {
      axios
         .get("/contacts/edit/" + this.props.match.params.id)
         .then(response => {
            this.setState({
               lname: response.data.lname,
               fname: response.data.fname,
               phone: response.data.phone
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

   onSubmit(e) {
      e.preventDefault();
      const obj = {
         lname: this.state.lname,
         fname: this.state.fname,
         phone: this.state.phone
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
                  <label>Last Name: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.lname}
                     onChange={this.onChangeLastName}
                  />
               </div>
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
                  <label>Phone Number: </label>
                  <input
                     type="text"
                     class="validate"
                     value={this.state.phone}
                     onChange={this.onChangePhoneNumber}
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
