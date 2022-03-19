import React, { useState, useContext } from 'react';
import AuthContext from '../../Context/authContext';
import styled from 'styled-components';
import menuIcon from '../../img/menu_white_36dp.svg';
import { MenuElement } from './MenuElement';

export const Navbar = () => {
    const { authUser, isDesktop } = useContext(AuthContext);
    const [menuOpen, setMenuOpen] = useState(false);

    const menuClickHandler = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };

    const Menu = (
        <Flexbox>
            {!authUser && <MenuElement menuContent="LOGIN" href="/login" />}
            {!authUser && <MenuElement menuContent="SIGNUP" href="/signup" />}
            {authUser && !authUser.admin && <MenuElement menuContent="REGISTER FOR GAME" href="/dashboard" />}
            {authUser && !authUser.admin && <MenuElement menuContent="EDIT PROFILE" href="/editprofile" />}
            {authUser.admin && <MenuElement menuContent="CREATE GAME" href="/creategame" />}
            {authUser.admin && <MenuElement menuContent="GAMES LIST" href="/dashboard" />}
        </Flexbox>
    );

    return (
        <Nav>
            {isDesktop && Menu}
            {!isDesktop && <MenuIcon src={menuIcon} onClick={menuClickHandler} />}
            {menuOpen && Menu}
        </Nav>
    );
};

const Nav = styled.nav``;

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 0rem auto 0.3rem auto;

    @media (max-device-width: 440px) {
        flex-direction: column;
    }
`;

const MenuIcon = styled.img`
    display: block;
    filter: white;
    margin: 0 auto 0 auto;
`;
