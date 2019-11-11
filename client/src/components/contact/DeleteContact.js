import React, { Component } from "react";
import PropTypes from "prop-types"
import { connect } from 'react-redux';
import { deleteContact } from "../../actions/contactActions"

class DeleteContact extends Component {
    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        const selected = {
            email: localStorage.getItem("userEmail"),
            tokenhash: localStorage.getItem("tokenHash"),
            id: this.props.edit._id
        }

        this.props.deleteContact(selected);
    }

    render() {
        return(
            <header>
                <div class="modal-content">
                    <h3>Delete Contact</h3>
                    <p>Are You sure you want to delete this contact?</p>
                </div>
                <div class="modal-footer" >
                    
                    <button 
                       class="modal-close waves-effect waves-green btn"
                       style={{marginRight: '10px'}}>
                           CANCEL
                    </button>
                    <button  
                       onClick={this.onSubmit}
                       onKeyPress={this.onSubmit}
                       type="submit"
                       value="delete"
                       class="modal-close waves-effect waves-red btn btn-primary red"
                       style={{marginRight: '10px'}}>
                           DELETE
                    </button>
                    
                </div>
            </header>
        );
    }
}

DeleteContact.propTypes = {
    contacts: PropTypes.object,
    deleteContact: PropTypes.func.isRequired
 }

const mapStateToProps = state => ({
    edit: state.contacts.edit
});
 
export default connect(mapStateToProps, {deleteContact})(DeleteContact);