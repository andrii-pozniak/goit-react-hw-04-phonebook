import { StyleLabel, StyleInput} from "./Filter.Style"


export const Filter = ({value, onChange}) => (
    <>
      <StyleLabel>Find contact by name</StyleLabel>
    <StyleInput type='text' value={value} onChange={onChange}></StyleInput>
    
    </>
  
)
    
   
