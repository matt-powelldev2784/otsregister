var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authState';
import styled from 'styled-components';
import { FormField } from '../Utilities/FormField';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from '../Utilities/Errors';
export var Login = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.authReducer; }), authIsLoading = _a.authIsLoading, authErrors = _a.authErrors;
    var _b = useState({ email: '', password: '' }), formData = _b[0], setFormData = _b[1];
    var email = formData.email, password = formData.password;
    var onInputChange = function (e) {
        var _a;
        var inputName = e.target.name;
        setFormData(__assign(__assign({}, formData), (_a = {}, _a[inputName] = e.target.value, _a)));
    };
    var loginUser = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            e.preventDefault();
            dispatch(login(formData));
            return [2 /*return*/];
        });
    }); };
    return (React.createElement(Fragment, null,
        React.createElement(Container, null,
            React.createElement(LoginForm, { onSubmit: function (e) { return loginUser(e); } },
                React.createElement(FormTitle, { text: "LOGIN" }),
                authErrors && React.createElement(Errors, { errors: authErrors }),
                React.createElement(FormField, { type: "text", placeholder: "Email", label: "EMAIL", name: "email", value: email, onChange: onInputChange, aria: "email", required: true, autocomplete: true }),
                React.createElement(FormField, { type: "password", placeholder: "Password", label: "PASSWORD", name: "password", value: password, onChange: onInputChange, minLength: "6", required: true }),
                React.createElement(Button, { text: "SIGN IN", isLoading: authIsLoading }),
                React.createElement(Footer, null,
                    React.createElement(Link, { href: '/signup' }, "Need an account? Sign Up here"))))));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"], ["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"])));
var LoginForm = styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-radius: 0.7rem;\n    background: #003a68;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 0 auto 0 auto;\n        border-radius: 0rem;\n        border-left: none;\n        border-right: none;\n    }\n"], ["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-radius: 0.7rem;\n    background: #003a68;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 0 auto 0 auto;\n        border-radius: 0rem;\n        border-left: none;\n        border-right: none;\n    }\n"])));
var Footer = styled.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-top: 1rem;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    margin: -2px;\n    text-decoration: underline;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"], ["\n    margin-top: 1rem;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    margin: -2px;\n    text-decoration: underline;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"])));
var Link = styled.a(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    color: #003a68;\n    text-align: center;\n\n    &:hover {\n        color: black;\n    }\n"], ["\n    color: #003a68;\n    text-align: center;\n\n    &:hover {\n        color: black;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
