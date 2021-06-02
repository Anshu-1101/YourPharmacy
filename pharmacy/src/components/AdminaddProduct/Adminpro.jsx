import React from 'react'

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


const Adminpro = () => {
    return (
        <>
       <Container>
        <FormWrap>
          <Icon to="/">Your Pharmacy</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Fill up the Product Details</FormH1>

              <FormInput type="text " placeholder="Name of Medicine"   required></FormInput>
              
              <FormInput type="text" placeholder="Medicine Composition" required></FormInput>
           
              <FormInput placeholder="Brand Name" type="text"required></FormInput>
             
              <FormInput type=" price" placeholder="Price"  required></FormInput>
             <FormInput type="number" placeholder="Quantity" required></FormInput>
             <FormInput type="link" placeholder="Image Url" required></FormInput>
              

              <FormButton type="submit">Update Product</FormButton>
               
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

    </>
    )
}

export default Adminpro
