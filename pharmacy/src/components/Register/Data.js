import React, { useEffect, useState } from "react";
import { signup, login } from "../../actions/Authentication.js";
import { FormContent, FormLabel } from "./RegisterElements";
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

              <FormButton type="submit" onClick={handleSubmit}>Register</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};
