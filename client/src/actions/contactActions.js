import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { 
    GET_ERRORS,
    SET_CURRENT_USER, 
    GET_CONTACTS, 
    ADD_CONTACT,
    EDIT_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT } from "./types";

// get all contacts
export const getContacts = user => dispatch => {
    axios
        .post("/api/contacts/get", user)
        .then(res => {
            dispatch({
                type: GET_CONTACTS,
                payload: res.data
            })
        })
        .catch(err => {
            logoutUser(dispatch);
        });
}

// add one contact
export const addContact = data => dispatch => {
    axios
        .post("/api/contacts/add", data)
        .then(res => {
            dispatch({
                type: ADD_CONTACT,
                payload: res.data
            })
        })
        .catch(err => {
            logoutUser(dispatch);
        });
}

// update one contact
export const editContact = contact => dispatch => {
    dispatch({
        type: EDIT_CONTACT,
        payload: contact
    })
}







const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    };
};
// Log user out
const logoutUser = dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("tokenHash");
    localStorage.removeItem("userEmail");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};