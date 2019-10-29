import React, { Component } from "react";
import axios from "axios";
import TableRow from "./TableRow";

import DashboardNavbar from "../dashboard/DashboardNavbar";
import ContactsFooter from "./ContactsFooter";

class Contacts extends Component {
   constructor(props) {
      super(props);
      this.state = { contact: [] };
   }

   componentDidMount() {
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash")
      };
      console.log(user);
      axios
         .post("/api/contacts/get", user)
         .then(response => {
            console.log(response);
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
                     <h3>Contact List</h3>
                     <hr />
                     <table class="highlight">
                        <thead>
                           <tr>
                              <th>First Name</th>
                              <th>Last Name</th>
                              <th>Phone Number</th>
                              <th>E-mail</th>
                              <th>Temp</th>
                              <th>Last Reach Out</th>
                              <th>Date Created</th>
                              <th colSpan="2">Action</th>
                           </tr>
                        </thead>

                        <tbody>{this.tabRow()}</tbody>
                     </table>
                  </div>
               </div>
            </div>
            <ContactsFooter />
         </div>
      );
   }
}

export default Contacts;
