import React from 'react';
import {SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarRoute, SidebarLink,SideBtnWrap} from './SidebarElements';

const Sidebar = ( {isOpen, toggle} ) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to ="apropos"onClick={toggle}>A propos</SidebarLink>
                <SidebarLink to ="services"onClick={toggle}>Catégories</SidebarLink>
                <SidebarLink to ="contact"onClick={toggle}>Contactez nous</SidebarLink>
                {/* <SidebarLink to ="connexion"onClick={toggle}>Connexion</SidebarLink> */}
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/connexion">Connexion</SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar