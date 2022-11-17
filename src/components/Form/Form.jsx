import {useState} from 'react';
import { nanoid } from 'nanoid';
import { StyleForm, StyleLabel, StyleButton, StyleInput} from "./Form.Styled";
// import { Page } from "components/Page/page";

export  default function Form({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChangeName = evt => {
        
            setName(evt.target.value)
            return name;
    } 
    const handleChangeNumber = evt => {
        
        
                    setNumber(evt.target.value)
                        
          return number;    
        // setName( evt.target.value,
        //    );       
    }
    const handleSubmit = evt => {
        evt.preventDefault()
       onSubmit({name, number}) 
         
        reset();        
    }
    const reset = () => {
        setName('')
        setNumber('')
        
        }

        const  nameInputId = nanoid();
    return (
        <>
        <h1>Phonebook</h1>
         <StyleForm onSubmit={handleSubmit}>
             
             <StyleLabel htmlFor={nameInputId}> Name </StyleLabel>
                 <StyleInput
                 type="text"
                 name="name"
                 pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                 title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                 required
                 // id={this.nameInputId}
                 value={name} 
                 onChange={handleChangeName}
                 />
             <StyleLabel htmlFor={nameInputId}> Number </StyleLabel>
                 <StyleInput
                 type="tel"
                 name="number"
                 pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                 title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                 required
                 // id={this.nameInputId}
                 value={number} 
                 onChange={handleChangeNumber}
/>
             <StyleButton type='submit'>Add contact</StyleButton>
         </StyleForm>
         <h2>Contacts</h2>
        
        </>
                    
     )
    
} 
//  {
//     state = {        
//         name: '',
//         number: '',
//           }
   
//     handleChange = evt => {
//         this.setState({
//             [evt.currentTarget.name]: evt.currentTarget.value,
//             id: nanoid()});       
//     }
   
//     handleSubmit = evt => {
//         evt.preventDefault()
//         this.props.onSubmit(this.state) 
         
//         this.reset();        
//     }
//     reset = () => {
//         this.setState({
//             name: '',
//             number: '',
          
//         })
//     }
//     nameInputId = nanoid();
//     render () {
        
       
//     }
// }


