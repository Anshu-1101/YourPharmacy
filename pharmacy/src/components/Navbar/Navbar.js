import React, {useState, useEffect} from 'react'
import { FaTimes,FaBars } from 'react-icons/fa';
 
import {Nav,NavbarContainer, NavLogo , NavIcon, MobileIcon , NavMenu, NavItem, NavLinks , NavBtnLink, NavItemBtn } from './NavbarElements';
import {IconContext} from 'react-icons/lib'
import { Button } from '../../globalStyles';
// import Signin from '../../pages/signin';


const Navbar = () => {
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
                        <NavLinks to='/'>Doctor Services</NavLinks>
                    </NavItem>
                 
                 
                    <NavItem>
                        <NavLinks to='/'>Products</NavLinks>
                    </NavItem>
                
                 
                    <NavItem>
                        <NavLinks to='/'>Cart</NavLinks>
                    </NavItem>
                
                     <NavItemBtn>
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
                             <NavBtnLink to="/register">
                                 <Button primary>Register</Button>
                             </NavBtnLink>

                         ):(
                             <NavBtnLink to="/register">
                                 <Button  fontbig primary>
                                  Register
                                 </Button>
                             </NavBtnLink>
                         )
                         }
                     </NavItemBtn>
                    </NavMenu>
                
            </NavbarContainer>

        </Nav>
        </IconContext.Provider>
            
        </>
    )
}

export default Navbar
