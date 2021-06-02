import React from 'react';
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
    return (
        <>
            <Container>
        <FormWrap>
          <Icon to="/">Your Pharmacy</Icon>
          <FormContent>
            <Form action="#">
              {/* <FormH1>Register with Your Pharmacy.</FormH1> */}
               
              <FormInput placeholder="Doctor Name" type="text "required></FormInput>
            
              <FormInput type="text" placeholder="Designation" required></FormInput>
              
              <FormInput type="text" placeholder="Specialisation" required></FormInput>
              <FormInput type="text " placeholder="Location" required></FormInput>
               
              <FormInput type="email " placeholder="Email" required></FormInput>
              
              <FormInput type="link" placeholder="Photo URL" required></FormInput>
              <FormInput type="text" placeholder="Fees" required></FormInput>
              

              <FormButton type="submit">Update Doctor</FormButton>
               
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

        </>
    )
}

export default Admindoc
