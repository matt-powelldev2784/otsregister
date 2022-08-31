var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Background } from '../components/Header/Background';
import { Header } from '../components/Header/Header';
import { PageTitle } from '../components/Utilities/PageTitle';
export var Error = function () {
    var isDesktop = useSelector(function (state) { return state.globalReducer; }).isDesktop;
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(Container, null,
            isDesktop && React.createElement(Background, null),
            React.createElement(Main, null,
                React.createElement(PageTitle, { text: "Error. Page not found." })))));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    width: 100%;\n"], ["\n    position: absolute;\n    width: 100%;\n"])));
var Main = styled.main(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    display: block;\n    margin: 0 auto 0 auto;\n"], ["\n    position: absolute;\n    top: 0;\n    width: 100%;\n    display: block;\n    margin: 0 auto 0 auto;\n"])));
var templateObject_1, templateObject_2;
