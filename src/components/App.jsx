import React, {Component} from 'react';
import styled from 'styled-components';
import { nanoid } from 'nanoid';
import { Form } from "./Form/Form";
import {  ContactList } from "components/ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const StyleContainer  = styled.div`
width: 50%;
padding-left:${p => p.theme.space[5]}px;
padding-right:${p => p.theme.space[5]}px;
padding-bottom:${p => p.theme.space[5]}px;
`;
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: '',
    
}

changeFilter = evt => {
  this.setState({filter: evt.currentTarget.value})
};

 getVisibleContact = () => {
  const {contacts, filter} = this.state;

  const normalizedFilter = filter.toLowerCase(); 
  return  contacts.filter(contact => 
    contact.name.toLowerCase().includes(normalizedFilter));

 };

deleteContact = contactId => {
  this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact =>
          contact.id !==  contactId ),   
      }));

};
nameInputId = nanoid();

addContact = contact => {
  console.log(contact.name)
  if(this.state.contacts.some(el => el.name === contact.name)) {
    return alert('Contact already exist')
 }
  this.setState(prev => ({contacts: [...prev.contacts, {id: nanoid(), ...contact}]})) 
   console.log(contact,)
};

componentDidUpdate(prevProps, prevState) {
if (this.state.contacts !== prevState) {
  localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
}
};

componentDidMount() {
  const contacts = localStorage.getItem('contacts');
  const parsedContact = JSON.parse(contacts);
 if(parsedContact){
  this.setState({contacts: parsedContact});
 }

}

render (){
  const {filter} = this.state;
  const visibleContact = this.getVisibleContact();

  return (
    <StyleContainer>
    <Form onSubmit = {this.addContact} />
    <Filter value={filter} onChange={this.changeFilter}/>
    <ContactList contacts={visibleContact} onDeleteContact={this.deleteContact} />
    </StyleContainer>
    
  );
}
 
};
