import {  
    GET_CONTACTS, 
    ADD_CONTACT,
    EDIT_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT } from "../actions/types";

const initialState = {
    contacts: [],
    contact: {},
    edit: {}
};

export default function(state = initialState, action){
    switch (action.type){
        case GET_CONTACTS:
            return{
                ...state,
                contacts: action.payload
            }
        case ADD_CONTACT:
            return{
                ...state,
                contact: action.payload
            }
        case EDIT_CONTACT:
            return{
                ...state,
                edit: action.payload
            }
        default:
            return state;
    }
}