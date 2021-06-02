import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { addDoctor } from '../../api';
import {
    FormLabel,
    FormContent,
    Container,
    FormWrap,
    Icon,
    FormButton,
    Text,
    FormH1,
    Form,
    FormInput,
  } from "../Register/RegisterElements";
  import "./style.css";

const Admindoc = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [specialisation, setSpecialisation] = useState("")
    const [image, setImage] = useState("")
    const [designation, setDesignation] = useState("")
    const [fee, setFee] = useState("")
    const [location, setLocation] = useState("")

    const handleChange = (e, setter) => {
      setter(e.target.value)
    }
    
    const doctorResource = useMutation((data) => addDoctor({...data}))
    const handleSubmit = (event) => {
      if (name.length > 0 && 
          specialisation.length > 0 && 
          image.length >0 &&
          location.length > 0 &&
          email.length > 0 &&
          fee.length > 0
          ) {
          event.preventDefault();
      }
      doctorResource.mutate(
      {   name,
          email,
          specialisation, 
          image, 
          location,
          designation, 
          fee}
      );
      if(doctorResource.isSuccess && !doctorResource.isError) window.location.reload();
  }

  if(doctorResource.isSuccess && !doctorResource.isError) window.location.reload();

    return (
        <>
            <Container>
        <FormWrap>
          <Icon to="/">Your Pharmacy</Icon>
          <FormContent>
            <Form action="#">
              {/* <FormH1>Register with Your Pharmacy.</FormH1> */}
               
              <FormInput 
                placeholder="Doctor Name" 
                type="text" 
                value={name}
                onChange={(e)=>{handleChange(e, setName)}} 
                required>
              </FormInput>
          
              <FormInput 
                type="text" 
                placeholder="Designation" 
                value={designation}
                onChange={(e)=>handleChange(e, setDesignation)}
                required>
              </FormInput>
              
              <FormInput 
                type="text" 
                placeholder="Specialisation" 
                value={specialisation}
                onChange={(e)=>handleChange(e, setSpecialisation)}
                required>  
              </FormInput>

              <FormInput 
                type="text " 
                placeholder="Location" 
                value={location}
                onChange={(e)=>handleChange(e, setLocation)}
                required></FormInput>
               
              <FormInput 
                type="email " 
                placeholder="Email" 
                value={email}
                onChange={(e)=>handleChange(e, setEmail)}
                required>
              </FormInput>
              
              <FormInput 
                type="link" 
                placeholder="Photo URL" 
                value={image}
                onChange={(e)=>handleChange(e, setImage)}
                >  
              </FormInput>

              <FormInput 
                type="text" 
                placeholder="Fees" 
                value={fee}
                onChange={(e)=>handleChange(e, setFee)}
                required>  
              </FormInput>
              
              <FormButton type="submit" onClick={handleSubmit}>Update Doctor</FormButton>
               
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

        </>
    )
}

export default Admindoc
