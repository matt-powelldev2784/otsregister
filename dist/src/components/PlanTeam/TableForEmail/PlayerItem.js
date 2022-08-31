var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import React from 'react';
import styled from 'styled-components';
export var PlayerItem = function (_a) {
    var playerName = _a.playerName;
    return React.createElement(Player, null, playerName);
};
var Player = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: white;\n    vertical-align: top;\n\n    @media (max-device-widtablehead: 440px) {\n        font-size: 1rem;\n    }\n"], ["\n    padding: 0.4rem 0.5rem 0.4rem 0.5rem;\n    color: white;\n    vertical-align: top;\n\n    @media (max-device-widtablehead: 440px) {\n        font-size: 1rem;\n    }\n"])));
var templateObject_1;
