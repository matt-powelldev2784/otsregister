var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import menuIcon from '../../img/menu_white_36dp.svg';
import { MenuElement } from './MenuElement';
export var Navbar = function () {
    var _a = useSelector(function (state) { return state.globalReducer; }), isDesktop = _a.isDesktop, menu = _a.menu;
    var homepage = menu.homepage, adminUser = menu.adminUser, user = menu.user;
    var _b = useState(false), menuOpen = _b[0], setMenuOpen = _b[1];
    var menuClickHandler = function () {
        menuOpen ? setMenuOpen(false) : setMenuOpen(true);
    };
    var Menu = (React.createElement(Flexbox, null,
        homepage && React.createElement(MenuElement, { menuContent: "LOGIN", href: "/login" }),
        homepage && React.createElement(MenuElement, { menuContent: "SIGNUP", href: "/signup" }),
        user && React.createElement(MenuElement, { menuContent: "GAME REGISTRATION", href: "/dashboard" }),
        user && React.createElement(MenuElement, { menuContent: "EDIT PROFILE", href: "/editprofile" }),
        adminUser && React.createElement(MenuElement, { menuContent: "CREATE GAME", href: "/creategame" }),
        adminUser && React.createElement(MenuElement, { menuContent: "GAMES LIST", href: "/dashboard" })));
    return (React.createElement(Nav, null,
        isDesktop && Menu,
        !isDesktop && React.createElement(MenuIcon, { src: menuIcon, onClick: menuClickHandler }),
        menuOpen && Menu));
};
var Nav = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
var Flexbox = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"], ["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin: 0rem auto 0.3rem auto;\n\n    @media (max-device-width: 440px) {\n        flex-direction: column;\n    }\n"])));
var MenuIcon = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    filter: white;\n    margin: 0 auto 0 auto;\n"], ["\n    display: block;\n    filter: white;\n    margin: 0 auto 0 auto;\n"])));
var templateObject_1, templateObject_2, templateObject_3;
