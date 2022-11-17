import React from 'react';
// import PropTypes from 'prop-types';
import { StyleItem, StyleButton, StylePage } from "./ContactList.style";

export const ContactList = ({contacts, onDeleteContact}) => {
    console.log(contacts)
    return <ul> 
      {contacts.map(({ name, number, id}) => (
         <StyleItem key={id}>
            <StylePage >{name}: {number}</StylePage>
           
            <StyleButton type='button' onClick = {() => onDeleteContact(id)} >delete</StyleButton>
         </StyleItem>
      )) 
       }
    </ul>
};

// ContactList.propTypes = {
//    contacts: PropTypes.array.isRequired,
    
// }