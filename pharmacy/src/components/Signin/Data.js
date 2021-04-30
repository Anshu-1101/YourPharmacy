import React from 'react'
import { FormContent, FormLabel } from './SigninElements'
import {Container,FormWrap, Icon, FormButton,Text,FormH1,Form,FormInput} from './SigninElements';
export const SignIn = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">Your Pharmacy</Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>Log in to your account.</FormH1>
                            <FormLabel htmlFor='for' >Email</FormLabel>
                            <FormInput type='email ' required></FormInput>
                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput type='password' required></FormInput>
                            <FormButton type='submit'>Login</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}
 