import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import menuIcon from '../../img/menu_white_36dp.svg';
import { MenuElement } from './MenuElement';

export const Navbar = () => {
    const { isDesktop, menu } = useSelector(state => state.globalReducer);
    const { homepage, adminUser, user } = menu;

    const [menuOpen, setMenuOpen] = useState(false);

    const menuClickHandler = () => {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };

    const Menu = (
        <Flexbox>
            {homepage && <MenuElement menuContent="LOGIN" href="/login" />}
            {homepage && <MenuElement menuContent="SIGNUP" href="/signup" />}
            {user && <MenuElement menuContent="GAME REGISTRATION" href="/dashboard" />}
            {user && <MenuElement menuContent="EDIT PROFILE" href="/editprofile" />}
            {adminUser && <MenuElement menuContent="CREATE GAME" href="/creategame" />}
            {adminUser && <MenuElement menuContent="GAMES LIST" href="/dashboard" />}
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
