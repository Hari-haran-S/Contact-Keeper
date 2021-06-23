import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactContext from './contactContext';
import contactReducer from './contactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACT,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'HArihari',
        email: 'har@ex.com',
        phone: '223-232-2322',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Polog',
        email: 'Po@ex.com',
        phone: '213-232-2322',
        type: 'personal',
      },
      {
        id: 3,
        name: 'jcole',
        email: 'jc@ex.com',
        phone: '224-232-2322',
        type: 'professional',
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // add
  const addContact = (contact) => {
    contact.id = uuidv4();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // delete
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // set current
  const setCurrent = (contcat) => {
    dispatch({ type: SET_CURRENT, payload: contcat });
  };

  // clear current
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // update
  const updateContact = (contcat) => {
    dispatch({ type: UPDATE_CONTACT, payload: contcat });
  };

  // filter
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACT, payload: text });
  };

  // clear
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        clearCurrent,
        setCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
