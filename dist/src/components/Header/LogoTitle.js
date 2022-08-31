var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
import logoImage from '../../img/Old-Thorntonians-CrestOnly-2014_150dpi.png';
export var LogoTitle = function () {
    return (React.createElement(Fragment, null,
        React.createElement(Link, { href: "/" },
            React.createElement(Flexbox, null,
                React.createElement(FlexItem, null,
                    React.createElement(Logo, { src: logoImage })),
                React.createElement(FlexItem, null,
                    React.createElement(Title, null, "OLD THORNTONIANS FC"))))));
};
var Flexbox = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.3rem;\n  background-color: #003a68;\n"], ["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  padding: 0.3rem;\n  background-color: #003a68;\n"])));
var FlexItem = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: white;\n  font-family: Roboto;\n  font-weight: 500;\n"], ["\n  color: white;\n  font-family: Roboto;\n  font-weight: 500;\n"])));
var Logo = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: block;\n  margin: 0 auto 0 auto;\n  width: 4rem;\n\n  @media (max-device-width: 440px) {\n    width: 5rem;\n    padding: 0rem;\n  }\n"], ["\n  display: block;\n  margin: 0 auto 0 auto;\n  width: 4rem;\n\n  @media (max-device-width: 440px) {\n    width: 5rem;\n    padding: 0rem;\n  }\n"])));
var Title = styled.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  display: block;\n  text-align: center;\n  color: white;\n  margin: 0;\n  padding: 0;\n  font-size: 2.2rem;\n\n  @media (max-device-width: 440px) {\n    font-size: 2rem;\n    padding: 0.4rem;\n    text-align: center;\n  }\n"], ["\n  display: block;\n  text-align: center;\n  color: white;\n  margin: 0;\n  padding: 0;\n  font-size: 2.2rem;\n\n  @media (max-device-width: 440px) {\n    font-size: 2rem;\n    padding: 0.4rem;\n    text-align: center;\n  }\n"])));
var Link = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
