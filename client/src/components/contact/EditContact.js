import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateContact } from "../../actions/contactActions";

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
      id: "",
      lname: "",
      fname: "",
      phone: "",
      emailaddr: "",
      temp: "",
      lastreachout: "",
      date: ""
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.edit !== this.props.edit) {
      this.setState({
        id: this.props.edit._id,
        lname: this.props.edit.lname,
        fname: this.props.edit.fname,
        phone: this.props.edit.phone,
        emailaddr: this.props.edit.emailaddr,
        temp: this.props.edit.temp,
        lastreachout: this.props.edit.lastreachout,
        date: this.props.edit.date
      });
    }
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
    const contactData = {
      email: localStorage.getItem("userEmail"),
      tokenhash: localStorage.getItem("tokenHash"),
      id: this.state.id,
      lname: this.state.lname,
      fname: this.state.fname,
      phone: this.state.phone,
      emailaddr: this.state.emailaddr,
      temp: this.state.temp,
      lastreachout: this.state.lastreachout,
      date: this.state.date
    };
    this.props.updateContact(contactData);
  }

  render() {
    return (
      <header>
        <div class="modal-content">
          <h5>Edit Contact</h5>
          <hr />

          <div class="row">
            <form class="col s12" onSubmit={this.onSubmit}>
              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    class="validate"
                    value={this.state.fname}
                    onChange={this.onChangeFirstName}
                  />
                  <span class="helper-text">First Name</span>
                </div>

                <div class="input-field col s6">
                  <i class="material-icons prefix">account_circle</i>
                  <input
                    id="icon_prefix"
                    type="text"
                    class="validate"
                    value={this.state.lname}
                    onChange={this.onChangeLastName}
                  />
                  <span class="helper-text">Last Name</span>
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
                  <span class="helper-text">Phone Number</span>
                </div>

                <div class="input-field col s6 active">
                  <i class="material-icons prefix">email</i>
                  <input
                    id="icon_email"
                    type="text"
                    class="validate"
                    value={this.state.emailaddr}
                    onChange={this.onChangeEmailAddr}
                  />
                  <span class="helper-text">E-mail</span>
                </div>
              </div>

              <div class="row">
                <div class="input-field col s6">
                  <i class="material-icons prefix">tonality</i>
                  <select
                    value={this.state.temp}
                    onChange={this.onChangeTemp}
                    class="validate"
                  >
                    <option value="" disabled selected>
                      N/A
                    </option>
                    <option value="Cold">Cold</option>
                    <option value="Warm">Warm</option>
                    <option value="Hot">Hot</option>
                  </select>
                  <label style={{ fontSize: "15px" }}>
                    Selected: {this.state.temp}
                  </label>
                  <span class="helper-text">Temp</span>
                </div>

                <div class="input-field col s6">
                  <i class="material-icons prefix">assignment_ind</i>
                  <input
                    id="icon_assignment_ind"
                    type="date"
                    class="validate"
                    value={this.state.lastreachout}
                    onChange={this.onChangeLastReachOut}
                  />
                  <span class="helper-text">Last Reach Out</span>
                </div>
              </div>

              <div class="modal-footer">
                <button
                  type="submit"
                  className="modal-close waves-effect waves-light btn btn-primary"
                  style={{ marginRight: "10px" }}
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </header>
    );
  }
}

EditContact.propTypes = {
  edit: PropTypes.object,
  updateContact: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  edit: state.contacts.edit
});

export default connect(mapStateToProps, { updateContact })(EditContact);
