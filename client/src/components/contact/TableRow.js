// TableRow.js

import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { editContact, deleteContact } from "../../actions/contactActions";

class TableRow extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
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
        <td>{this.props.obj.fname}</td>
        <td>{this.props.obj.lname}</td>
        <td>{this.props.obj.phone}</td>
        <td>{this.props.obj.emailaddr}</td>
        <td>{this.props.obj.temp}</td>
        <td>{this.props.obj.lastreachout}</td>
        <td>{this.props.obj.date}</td>
        <td>
          <a class="modal-trigger" href="#editcontact" onClick={this.edit}>
            <i class="material-icons">create</i>
          </a>
        </td>
        <td>
          <a class="modal-trigger" href="#deletecontact" onClick={this.remove}>
            <i class="material-icons">delete</i>
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
