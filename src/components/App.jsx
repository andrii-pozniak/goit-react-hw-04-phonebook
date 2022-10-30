import React, {Component} from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import {  ContactList} from "components/ContactList/ContactList";

// import {  ContactList} from "components/ContactList/ContactList";

export const StyleContainer  = styled.div`
width: 50%;
padding-left:${p => p.theme.space[5]}px;
padding-right:${p => p.theme.space[5]}px;
padding-bottom:${p => p.theme.space[5]}px;
`;
export class App extends Component {
  state = {
    contacts: [],
    name: '',
    
}
deleteContact = contactId => {
  this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
          contact.id !==  contactId ),   
      }));

};
nameInputId = nanoid();

addContact = text => {
  const contact = {
    name: text,
    id: nanoid(),          
  }
  this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts]

  }))
  console.log(text)
};

render (){
  const {contacts} = this.state;
  return (
    <StyleContainer>
    <Form onSubmit = {this.addContact} />
    <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
    </StyleContainer>
    
  );
}
 
};
