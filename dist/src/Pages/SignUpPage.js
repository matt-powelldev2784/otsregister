var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Header } from '../components/Header/Header';
import { Background } from '../components/Header/Background';
import { SignUp } from '../components/Login/SignUp';
export var SignUpPage = function (props) {
    var _a = useSelector(function (state) { return state.globalReducer; }), isDesktop = _a.isDesktop, backgroundColor = _a.backgroundColor;
    return (React.createElement(Contianer, { background: backgroundColor },
        React.createElement(Header, null),
        React.createElement(Main, null,
            isDesktop && React.createElement(Background, null),
            React.createElement(SignUp, null))));
};
var Contianer = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    height: 100vh;\n    background: #003a68;\n"], ["\n    height: 100vh;\n    background: #003a68;\n"])));
var Main = styled.main(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    position: absolute;\n    height: 100%;\n"], ["\n    position: absolute;\n    height: 100%;\n"])));
var templateObject_1, templateObject_2;
