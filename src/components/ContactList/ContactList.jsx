import React from 'react';


export const ContactList = ({contacts, onDeleteContact}) => {
    console.log(contacts)
    return <ul> 
      {contacts.map(({ name, id}) => (
         <li key={id}>
            <p>{name}</p>
            <button type='button' onClick = {() => onDeleteContact(id)} >delete</button>
         </li>
      )) 
       }
    </ul>
}