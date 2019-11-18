import React, { Component } from "react";
import TableRow from "./TableRow";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getContacts } from "../../actions/contactActions";

// Dashboard components.
import DashboardNavbar from "../dashboard/DashboardNavbar";
import DashboardFooter from "../dashboard/DashboardFooter";

class Contacts extends Component {
   componentDidMount() {
      const user = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash")
      };

      this.props.getContacts(user);
   }

   UNSAFE_componentWillReceiveProps(nextProps) {
      if (this.props.contact !== nextProps.contact) {
         this.props.contacts.push(nextProps.contact);
      }
      if (this.props.update !== nextProps.update) {
         var index = nextProps.contacts.findIndex(
            obj => obj._id === nextProps.update.id
         );
         // -1 means not found
         if (index !== -1) {
            this.props.contacts[index] = nextProps.update;
         }
      }
      if (this.props.delete !== nextProps.delete) {
         var index = nextProps.contacts.findIndex(
            obj => obj._id === nextProps.delete.id
         );
         // -1 means not found
         if (index !== -1) {
            this.props.contacts.splice(index, 1);
         }
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
                     <h5>Contact List</h5>
                     <hr />
                     <table class="highlight responsive-table">
                        <thead>
                           <tr>
                              <th>Name</th>
                              
                              <th>Phone Number</th>
                              <th>E-mail</th>
                              <th>Temp</th>
                              <th>Contact Type</th>
                              <th>Position</th>
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
   contact: PropTypes.object,
   update: PropTypes.object,
   delete: PropTypes.object
};

const mapStateToProps = state => ({
   contacts: state.contacts.contacts,
   contact: state.contacts.contact,
   update: state.contacts.update,
   delete: state.contacts.delete
});

export default connect(mapStateToProps, { getContacts })(Contacts);
