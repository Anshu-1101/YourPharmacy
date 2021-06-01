import React, { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink
} from "./NavbarElements";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import Dropdown from "react-bootstrap/Dropdown";
import Cookies from 'js-cookie';
import {useQuery} from 'react-query'
import {getNavbarAction} from '../../actions/user'
import { logout } from "../../actions/Authentication";
import {useDispatch} from 'react-redux'

// import Orders from '../Orders';

const Navbar = () => {

  const dispatch = useDispatch();


  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const [name, setName] = useState((Cookies.get('token'))?"":null);
  const nav = useQuery("navbar", () => getNavbarAction());
  useEffect(() => {
    
    if (!nav.isLoading && nav.isSuccess)
      {
        setName(nav.data.data.name)
        // console.log("data:",nav.data.data)
      }
    showButton();
  }, [nav]);


  const handleClick = () => setClick(!click);
  
  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  
  window.addEventListener("resize", showButton);
  const UserData = () => {
      return (name!==null && name.length > 0)?
        <Dropdown>
          <Dropdown.Toggle
            style={{
              padding: "12px",
              backgroundColor: "#76B947",
              AlignItems: "center",
              textDecoration: "none",
              fontSize: "18px",
              outline: "none",
              border: "none",
            }}
          >
              
            <div>
            <FaUserAlt style={{}}/>
            <div style={{display: "inline-block", marginLeft:"10px"}}>{name}</div>
            </div>
          </Dropdown.Toggle>

          <Dropdown.Menu
            style={{
              padding: "12px",
              backgroundColor: "#76B947",
              textDecoration: "none",
              fontSize: "16px",
              outline: "none",
              border: "none",
              width:"110px",
              height:"120px"
            }}
          >
           <Dropdown.Item
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "white",
                padding: "17px",
                width:"20px",
                height:"20px"
              }}
            >
              <div style={{padding:0, margin: 0}}>My Orders</div>
            </Dropdown.Item>
            <Dropdown.Item
              style={{
                textDecoration: "none",
                textAlign: "center",
                color: "white",
                padding: "7px",
                width:"20px",
                height:"20px"
              }}
            >
              <div style={{padding:0, margin: 0}} onClick={() => {dispatch(logout()); window.location.reload()}}>Logout</div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        :<>
        <NavItemBtn>
          {button ? (
            <NavBtnLink to="/signin">
              <Button primary>Sign-in</Button>
            </NavBtnLink>
          ) : (
            <NavBtnLink to="/signin">
              <Button fontbig primary>
                Sign-in
              </Button>
            </NavBtnLink>
          )}
        </NavItemBtn>
        <NavItemBtn>
          {button ? (
            <NavBtnLink to="/signup">
              <Button primary>Register</Button>
            </NavBtnLink>
          ) : (
            <NavBtnLink to="/signup">
              <Button fontbig primary>
                Register
              </Button>
            </NavBtnLink>
          )}
        </NavItemBtn>
        </>
  }  

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">
              <NavIcon />
              YOUR PHARMACY
            </NavLogo>

            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu click={click}>
              <NavItem>
                <NavLinks to="/">Home</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/doctors">Doctor Services</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/product">Products</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/appointments">Appointments</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/cart">Cart</NavLinks>
              </NavItem>
              {UserData()}
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
