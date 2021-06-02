 
import {useState, React} from 'react'
import "./styles.css";
 
import {FormWrap, Icon, FormButton,Text,FormH1,Form,FormInput, FormLabel, FormContent} from "../Register/RegisterElements";
import {Link} from "react-router-dom";
const Adminservice = () => {
  
    return (
        <>

<div class="container">
<div className="heading">
          <h1 style={{textAlign:'center' }}>Your Pharmacy Administrator Services</h1>
        </div>
  <div class="box">
    <span></span>
    <div class="content">
      <h2>Doctor Services</h2>
      <p>You need to add all the details like: Name of Doctor, Designation , Specialisation, Phone Number and Email</p>
      {/* < Link to= "/AdminDoc " class="bttn"  >Add a Doctor</button> */}
      <Link to="/AdminDoc" className=" bttn" style= {{cursor:'pointer', color:'white', textDecoration:'none', border:'2px solid green',borderRadius:'4px', backgroundColor:'green', margin:'12px', padding:'10px'}}>Add a Doctor</Link>
      
 
</div>
  </div>

  <div class="box">
    <span></span>
    <div class="content">
      <h2>Products</h2>
      <p>
You need to add all the details of Product like: Name of Product, Brand of Product , Quantity, Composition and Price</p>
      <Link to="/AdminProducts" className=" bttn" style= {{cursor:'pointer', color:'white', textDecoration:'none', border:'2px solid green',borderRadius:'4px', backgroundColor:'green', margin:'12px', padding:'10px'}}>Add new Product</Link>     
  </div>
   
</div>

   </div>

 
    </>
     
    )
}


export default Adminservice
