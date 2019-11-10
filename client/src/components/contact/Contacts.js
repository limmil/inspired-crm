import React, { Component } from "react";
import TableRow from "./TableRow";
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { getContacts } from "../../actions/contactActions"

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Contacts extends Component {

   componentDidMount(){
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash")
      };

      this.props.getContacts(user);
   }

   UNSAFE_componentWillReceiveProps(nextProps){
      if (this.props.contact !== nextProps.contact) {
         this.props.contacts.push(nextProps.contact);
      }
   }

   tabRow() {
      return this.props.contacts.map(function(object, i) {
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
                     <table class="highlight responsive-table">
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
            <DashboardFooter />
         </div>
      );
   }
}

Contacts.propTypes = {
   getContacts: PropTypes.func.isRequired,
   contacts: PropTypes.array.isRequired,
   contact: PropTypes.object
}

const mapStateToProps = state => ({
   contacts: state.contacts.contacts,
   contact: state.contacts.contact
});

export default connect(mapStateToProps, {getContacts})(Contacts);
