import React, {Component} from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import {  ContactList } from "components/ContactList/ContactList";
import { Filter } from "./Filter/Filter";

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
    filter: '',

    name: '',
    number: ''
    
}

changeFilter = evt => {
  this.setState({filter: evt.currentTarget.value})
};

deleteContact = contactId => {
  this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
          contact.id !==  contactId ),   
      }));

};
nameInputId = nanoid();


addContact = contact => {
  
  this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact}]

  }))
  console.log(contact)
};

render (){
  const {contacts, filter} = this.state;
  const visibleContact = this.state.contacts.filter(contact => 
    contacts.contact.toLowerCase )

  return (
    <StyleContainer>
    <Form onSubmit = {this.addContact} />
    <Filter value={filter} onChange={this.changeFilter}/>
    <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
    </StyleContainer>
    
  );
}
 
};
