var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React, { Fragment } from 'react';
import styled from 'styled-components';
import backgroundImage from '../../img/soccer_bg_color_80.jpg';
export var Background = function () {
    return (React.createElement(Fragment, null,
        React.createElement(BackgroudImage, null)));
};
var BackgroudImage = styled.img(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    margin: 0 auto 0 auto;\n"], ["\n    position: relative;\n    top: 0;\n    left: 0;\n    width: 100vw;\n    height: 100vh;\n    margin: 0 auto 0 auto;\n"])));
BackgroudImage.defaultProps = {
    src: backgroundImage
};
var templateObject_1;
