import React, {useState, useEffect} from 'react'
import { FaTimes,FaBars } from 'react-icons/fa';
 
import {Nav,NavbarContainer, NavLogo , NavIcon, MobileIcon , NavMenu, NavItem, NavLinks , NavBtnLink, NavItemBtn } from './NavbarElements';
import {IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyles';
import Dropdown from 'react-bootstrap/Dropdown';


const Navbar = () => {

    const options = [
        'one', 'two', 'three'
      ];
      const defaultOption = options[0];
    const [click, setClick]=useState(false)
    const [button, setButton]=useState(true)
    
    const handleClick =()=> setClick(!click)

    const showButton = ()=> {
        if(window.innerWidth <=960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showButton()
    },[])

    window.addEventListener('resize', showButton);


    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">
                    <NavIcon/>
                    YOUR PHARMACY
                </NavLogo>

                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes/>: <FaBars/>}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                
                 
                    <NavItem>
                        <NavLinks to='/docters'>Doctor Services</NavLinks>
                    </NavItem>
                 
                 
                    <NavItem>
                        <NavLinks to='/Product'>Products</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to='/Appointments'>Appointments</NavLinks>
                    </NavItem>
                
                 
                    <NavItem>
                        <NavLinks to='/Cart'>Cart</NavLinks>
                    </NavItem>
                    
                
                     {/* <NavItemBtn>
                         {button? (
                             <NavBtnLink to="/Signin">
                                 <Button primary>Sign-in</Button>
                             </NavBtnLink>

                         ):(
                             <NavBtnLink to="/Signin">
                                 <Button  fontbig primary>
                                 Sign-in
                                 </Button>
                             </NavBtnLink>
                         )
                         }
                     </NavItemBtn>

                     <NavItemBtn>
                         {button? (
                             <NavBtnLink to="/signup">
                                 <Button primary>Register</Button>
                             </NavBtnLink>

                         ):(
                             <NavBtnLink to="/signup">
                                 <Button  fontbig primary>
                                  Register
                                 </Button>
                             </NavBtnLink>
                         )
                         }
                     </NavItemBtn>
                       */}

<Dropdown>
     
  <Dropdown.Toggle style={{padding:'12px', backgroundColor:"#76B947", AlignItems:'center',
textDecoration:'none', width:'100px',   fontSize:'18px', outline:'none', border:'none',  }}>
    Signin
  </Dropdown.Toggle>
  

  <Dropdown.Menu style={{padding:'12px', backgroundColor:"#76B947", 
textDecoration:'none', width:'100px',   fontSize:'18px', outline:'none', border:'none', position:'absolute',}} >
    <Dropdown.Item style={{textDecoration:'none',textAlign:'center', color:'white', padding:'7px'}}  href="/Signup">Register</Dropdown.Item>
    <br/>
    
    <br/>
    <Dropdown.Item  style={{textDecoration:'none', textAlign:'center',color:'white', padding:'7px'}} href="/orders">Orders</Dropdown.Item>
    
  </Dropdown.Menu>
</Dropdown>
                    </NavMenu>
                
            </NavbarContainer>

        </Nav>
        </IconContext.Provider>
            
        </>
    )
}

export default Navbar
