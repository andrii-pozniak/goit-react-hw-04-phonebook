import React, {Component} from 'react';
import { nanoid } from 'nanoid';
import { StyleForm, StyleLabel, StyleButton, StyleInput} from "./Form.Styled";
// import { Page } from "components/Page/page";

export  class Form extends Component {
    state = {        
        name: '',
        number: '',
          }
   
    handleChange = evt => {
        this.setState({
            [evt.currentTarget.name]: evt.currentTarget.value,
            id: nanoid()});
       
    }
   
    handleSubmit = evt => {
        evt.preventDefault()
        this.props.onSubmit(this.state) 
         
        this.reset();        
    }
    reset = () => {
        this.setState({
            name: '',
            number: '',
          
        })
    }
    nameInputId = nanoid();
    render () {
        
        return (
           <>
           <h1>Phonebook</h1>
            <StyleForm onSubmit={this.handleSubmit}>
                
                <StyleLabel htmlFor={this.nameInputId}> Name </StyleLabel>
                    <StyleInput
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                    // id={this.nameInputId}
                    value={this.state.name} 
                    onChange={this.handleChange}
                    />
                <StyleLabel htmlFor={this.nameInputId}> Number </StyleLabel>
                    <StyleInput
                    type="tel"
                    name="number"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                    // id={this.nameInputId}
                    value={this.state.number} 
                    onChange={this.handleChange}
/>
                <StyleButton type='submit'>Add contact</StyleButton>
            </StyleForm>
            <h2>Contacts</h2>
           
           </>
                       
        )
    }
}


