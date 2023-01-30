import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarElements';

const Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/">EDU Search</NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="apropos">A propos</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="services">Catégories</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="contact">Contactez nous</NavLinks>
                </NavItem>
                {/* <NavItem>
                    <NavLinks to="connexion">Connexion</NavLinks>
                </NavItem> */}
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/connexion">Connexion</NavBtnLink>
            </NavBtn>
          </NavbarContainer>  
        </Nav>
    </>
    
  );
};

export default Navbar;