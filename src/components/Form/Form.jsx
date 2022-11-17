import {useState} from 'react';
import { nanoid } from 'nanoid';
import { StyleForm, StyleLabel, StyleButton, StyleInput} from "./Form.Styled";
// import { Page } from "components/Page/page";

export  default function Form({onSubmit}) {
    const [name, setName] = useState();
    const [number, setNumber] = useState();


    const handleChange = evt => {
        const {name, value} = evt.target
        switch(name) {
            case `name`:
                setName(value)  
                break;
            case `number`:
                setNumber(value)  
                break;   
                default:
                return;

        }
    }
    // useEffect(() => {
    //     window.localStorage.setItem('name', JSON.stringify(name));
    //   }, [name]) ;
    //   useEffect(() => {
    //     window.localStorage.setItem('number', JSON.stringify(number));
    //   }, [number]) 

    const handleSubmit = evt => {
        evt.preventDefault()
       onSubmit({name, number}) 
         
        reset();        
    }
    const reset = () => {
        setName('')
        setNumber('')
        
        }

        {
            //   const contacts = localStorage.getItem('contacts');
            //   const parsedContact = JSON.parse(contacts);
            //  if(parsedContact){
            //   this.setState({contacts: parsedContact});
            //  }
            
            // }

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
                 onChange={handleChange}
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
                 onChange={handleChange}
/>
             <StyleButton type='submit'>Add contact</StyleButton>
         </StyleForm>
         <h2>Contacts</h2>
        
        </>
                    
     )
    
} 
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


