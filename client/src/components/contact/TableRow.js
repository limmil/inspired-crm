// TableRow.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class TableRow extends Component {
   constructor(props) {
      super(props);
      this.delete = this.delete.bind(this);
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
   }

   render() {
      return (
         <tr>
            <td>{this.props.obj.fname}</td>
            <td>{this.props.obj.lname}</td>
            <td>{this.props.obj.phone}</td>
            <td>{this.props.obj.emailaddr}</td>
            <td>{this.props.obj.temp}</td>
            <td>{this.props.obj.lastreachout}</td>
            <td>{this.props.obj.date}</td>
            <td>
               <a class="modal-trigger" href="#editcontact" >
                  <i class="material-icons">create</i>
               </a>
            </td>
            <td>
               <button onClick={this.delete} className="btn btn-danger">
                  <i class="material-icons">delete</i>
               </button>
            </td>
         </tr>
      );
   }
}

export default TableRow;
