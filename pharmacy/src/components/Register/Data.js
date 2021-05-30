import React, { useEffect, useState } from "react";
import { signup, login } from "../../actions/Authentication.js";
import { FormContent, FormLabel } from "./RegisterElements";
import Alert from 'react-popup-alert';
import {
  Container,
  FormWrap,
  Icon,
  FormButton,
  Text,
  FormH1,
  Form,
  FormInput,
} from "./RegisterElements";
import { useMutation } from "react-query";

export const Register = () => {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const [password, setPassword] = useState("");
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [name, setName] = useState("");
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const [phoneNumber, setPhoneNumber] = useState("");
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const SignupResource = useMutation((data) => signup({ ...data }));
  const loginResource = useMutation((data) => login({...data}))
  // const dispatch = useDispatch();
  const [submit, setSubmit] = useState(false);

  const handleSubmit = async (event) => {
    if (email.length > 0 && password.length > 0 && name.length>0 && phoneNumber.length > 0) {
        event.preventDefault();        
    }
    setSubmit(true);
    SignupResource.mutate({ email, password, name, phoneNumber });
    if (SignupResource.isSuccess && !SignupResource.isError){
        loginResource.mutate({email, password});
    }
  };

  if (loginResource.isSuccess && !loginResource.isError)
    window.location.reload();

    const [alert, setAlert] = useState({
      type: 'error',
      text: 'This is a alert message',
      show: false
    })
  
    function onCloseAlert() {
      setAlert({
        type: '',
        text: '',
        show: false
      })
    }
  
    function onShowAlert(type) {
      setAlert({
        type: type,
        text: 'You have been successfully registered!',
        show: true
      })
    }


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Your Pharmacy</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Register with Your Pharmacy.</FormH1>
              <FormLabel htmlFor="for">Name</FormLabel>
              <FormInput type="text " onChange={handleNameChange} required></FormInput>
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput type="password" onChange={handlePasswordChange} required></FormInput>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput type="email " onChange={handleEmailChange} required></FormInput>
              <FormLabel htmlFor="for">Phone number</FormLabel>
              <FormInput type="phone number" onChange={handlePhoneNumberChange} required></FormInput>

              <FormButton type="submit" onClick={() => onShowAlert('success'), handleSubmit}>Register</FormButton>
              <Alert
        header={""}
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={false}
        alertStyles={{color:'white', textAlign:'center', padding:'12px'}}
        headerStyles={{color:'white', textAlign:'center', padding:'12px'}}
        textStyles={{color:'white', textAlign:'center', padding:'12px'}}
        buttonStyles={{color:'red',textAlign:'center', paddingtop:'12px', backgroundColor:'black', textDecoration:'none'}}
      /> 
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
