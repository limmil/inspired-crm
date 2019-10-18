import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

import DashboardNavbar from "../dashboard/DashboardNavbar";

class Contacts extends Component {
   constructor(props) {
      super(props);
      this.state = { contact: [] };
   }
   
   componentDidMount() {
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
      };
      console.log(user)
      axios
         .post("/api/contacts/get", user)
         .then(response => {
            console.log(response)
            this.setState({ contact: response.data });
         })
         .catch(function(error) {
            console.log(error);
         });
   }
   tabRow() {
      return this.state.contact.map(function(object, i) {
         return <TableRow obj={object} key={i} />;
      });
   }

   render() {
      return (
         <div>
            <DashboardNavbar />


  <div class="container">
    <div class="row">
      <div class="col s12">
        <div class="card">
          <div class="card-content">
            <span class="card-title">Contact List</span>
            <table class="striped">
              <thead>
                <tr>
                  <th>Last Name</th>
                  <th>First Name</th>
                  <th>Phone Number</th>
                  <th colSpan="2">Action</th>
                </tr>
              </thead>

              <tbody>{this.tabRow()}</tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
      );
   }
}

export default Contacts;
