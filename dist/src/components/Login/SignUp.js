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
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthErrors, registerNewUser } from '../redux/authState';
import styled from 'styled-components';
import { FormField } from '../Utilities/FormField';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { Errors } from '../Utilities/Errors';
export var SignUp = function (props) {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.authReducer; }), authToken = _a.authToken, authIsLoading = _a.authIsLoading, authErrors = _a.authErrors;
    var _b = useState({ name: '', email: '', password: '', password2: '' }), formData = _b[0], setFormData = _b[1];
    var name = formData.name, email = formData.email, password = formData.password, password2 = formData.password2;
    var signUp = function (async) {
        try {
            dispatch(registerNewUser({ authToken: authToken, formData: formData }));
        }
        catch (err) {
            throw Error;
        }
    };
    var onFormSubmit = function (e) {
        e.preventDefault();
        if (password !== password2) {
            var error = [{ message: 'Passwords do not match' }];
            dispatch(setAuthErrors(error));
            return;
        }
        signUp();
    };
    var onInputChange = function (e) {
        var _a, _b;
        if (e.target.name === 'email') {
            var emailLowerCase = e.target.value.toLowerCase();
            setFormData(__assign(__assign({}, formData), (_a = {}, _a[e.target.name] = emailLowerCase, _a)));
        }
        else {
            setFormData(__assign(__assign({}, formData), (_b = {}, _b[e.target.name] = e.target.value, _b)));
        }
    };
    return (React.createElement(Fragment, null,
        React.createElement(Container, null,
            React.createElement(SignUpForm, { onSubmit: function (e) { return onFormSubmit(e); } },
                React.createElement(FormTitle, { text: "CREATE NEW ACCOUNT" }),
                authErrors && React.createElement(Errors, { errors: authErrors }),
                React.createElement(FormField, { type: "text", placeholder: "Name", label: "FIRST NAME AND SURNAME", name: "name", value: name, onChange: onInputChange }),
                React.createElement(FormField, { placeholder: "Email", label: "EMAIL", name: "email", value: email, onChange: onInputChange }),
                React.createElement(FormField, { type: "password", placeholder: "Password", label: "PASSWORD", name: "password", value: password, onChange: onInputChange }),
                React.createElement(FormField, { type: "password", placeholder: "Confirm Password", label: "CONFIRM PASSWORD", name: "password2", value: password2, onChange: onInputChange }),
                React.createElement(Button, { text: "SIGN UP", disabled: authIsLoading }),
                React.createElement(Footer, null)))));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"], ["\n    position: absolute;\n    top: 0;\n    width: 100%;\n"])));
var SignUpForm = styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-radius: 0.7rem;\n    background: #003a68;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 0 auto 0 auto;\n        padding: 1rem 0 1rem 0;\n        border-radius: 0rem;\n        border-left: none;\n        border-right: none;\n    }\n"], ["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-radius: 0.7rem;\n    background: #003a68;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 0 auto 0 auto;\n        padding: 1rem 0 1rem 0;\n        border-radius: 0rem;\n        border-left: none;\n        border-right: none;\n    }\n"])));
var Footer = styled.h1(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    margin-top: 1rem;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    text-decoration: underline;\n    margin: -2px;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"], ["\n    margin-top: 1rem;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    text-decoration: underline;\n    margin: -2px;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3;
