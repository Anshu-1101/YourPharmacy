import React, {useState} from 'react'
import { useMutation } from 'react-query';
import { addProduct } from '../../api';

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

    const [name, setName] = useState("");
    const [composition, setComposition] = useState("")
    const [brandname, setBrandname] = useState("")
    const [price, setPrice] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [url, setUrl] = useState("")    
  
    const productResouce = useMutation((data) => addProduct({...data}))
    const handleSubmit = (event) => {
      if (name.length > 0 && 
          composition.length > 0 && 
          brandname.length >0 &&
          price.length > 0 &&
          url.length > 0
          ) {
          event.preventDefault();
      }
      productResouce.mutate(
      {   name,
          composition,
          brandname,
          url,
          quantity,
          price,
        }
      );
      if(productResouce.isSuccess && !productResouce.isError) window.location.reload();
    }

    if(productResouce.isSuccess && !productResouce.isError) window.location.reload();
    
    const handleChange = (e, setter) => {
      setter(e.target.value)
    }
    return (
        <>
       <Container>
        <FormWrap>
          <Icon to="/">Your Pharmacy</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Fill up the Product Details</FormH1>

              <FormInput type="text "  placeholder="Name of Medicine" value={name} onChange={(e)=>handleChange(e, setName)}  required></FormInput>
              <FormInput type="text"   placeholder="Medicine Composition" value={composition} onChange={(e)=>handleChange(e, setComposition)} required></FormInput>
              <FormInput type="text"   placeholder="Brand Name" value={brandname} onChange={(e)=>handleChange(e, setBrandname)} required></FormInput>
              <FormInput type="number" placeholder="Price" value={price} onChange={(e)=>handleChange(e, setPrice)} required></FormInput>
              <FormInput type="number" placeholder="Quantity" value={quantity} onChange={(e)=>handleChange(e, setQuantity)} required></FormInput>
              <FormInput type="link"   placeholder="Image Url" value={url} onChange={(e)=>handleChange(e,setUrl)} ></FormInput>            

              <FormButton type="submit" onClick={handleSubmit}>Update Product</FormButton>
               
            </Form>
          </FormContent>
        </FormWrap>
      </Container>

    </>
    )
}

export default Adminpro
