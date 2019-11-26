// TableRow.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editContact, deleteContact } from "../../actions/contactActions";
import ReactTooltip from "react-tooltip";

class TableRow extends Component {
   constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
      this.edit = this.edit.bind(this);
      this.remove = this.remove.bind(this);
   }

   componentDidUpdate(){
      console.log('udpated')
   }

   delete() {
      const obj = {
         email: localStorage.getItem("userEmail"),
         tokenhash: localStorage.getItem("tokenHash"),
         id: this.props.obj._id
      };
      axios
         .post("/api/contacts/delete/", obj)
         .then(res => console.log(res))
         .catch(err => console.log(err));
      window.location.reload(false);
   }

   edit() {
      this.props.editContact(this.props.obj);
   }

   remove() {
      this.props.editContact(this.props.obj);
   }

   render() {
      return (
         <tr>
            <ReactTooltip />
            <td class="valign-wrapper">
               <label>
                  <input type="checkbox" />
                  <span></span>
               </label>
            </td>

            <td>
               {this.props.obj.fname} {this.props.obj.lname}
            </td>
            <td>{this.props.obj.phone}</td>
            <td>
               <a class="modal-trigger" href="#createemail">
                  <i class="material-icons" data-tip={this.props.obj.emailaddr}>
                     email
                  </i>
               </a>
            </td>
            <td>{this.props.obj.temp}</td>
            <td>{this.props.obj.contacttype}</td>
            <td>{this.props.obj.pipelineposition}</td>
            <td>
               {this.props.obj.lastreachout} {this.props.obj.lastreachouttime}
            </td>
            <td>{this.props.obj.date}</td>
            <td>
               <a class="modal-trigger" href="#editcontact" onClick={this.edit}>
                  <i class="material-icons" data-tip="Edit Contact">
                     create
                  </i>
               </a>
            </td>
            <td>
               <a
                  class="modal-trigger"
                  href="#deletecontact"
                  onClick={this.remove}
                  data-tip="Delete Contact"
               >
                  <i class="material-icons">delete</i>
               </a>
            </td>

            <td>
               <a
                  href="#addtogoaltracker"
                  onClick=""
                  data-tip="Add contacts to the Goal Tracker based on the Pipeline Position or if the contact is a Team Member"
               >
                  <i class="material-icons">track_changes</i>
               </a>
            </td>



         </tr>
      );
   }
}

TableRow.propTypes = {
   editContact: PropTypes.func.isRequired,
   edit: PropTypes.object
};

const mapStateToProps = state => ({
   edit: state.contacts.edit
});

export default connect(mapStateToProps, { editContact })(TableRow);
