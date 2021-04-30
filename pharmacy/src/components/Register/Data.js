import React from 'react'
import { FormContent, FormLabel } from './RegisterElements'
import {Container,FormWrap, Icon, FormButton,Text,FormH1,Form,FormInput} from './RegisterElements';
export const Register = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Your Pharmacy</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Register with Your Pharmacy.</FormH1>
                            <FormLabel htmlFor='for' >Name</FormLabel>
                            <FormInput type='text ' required></FormInput>
                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormLabel htmlFor='for' >Email</FormLabel>
                            <FormInput type='email ' required></FormInput>
                            <FormLabel htmlFor='for' >Phone number</FormLabel>
                            <FormInput type='phone number' required></FormInput>
                             
                            <FormButton type='submit'>Register</FormButton>
                             
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
 