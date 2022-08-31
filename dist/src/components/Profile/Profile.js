var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
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
import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getProfileData, updateProfileData, setPlayerProfile } from '../redux/dataState';
import { Button } from '../Utilities/Button';
import { FormTitle } from '../Utilities/FormTitle';
import { FormSelect } from '../Utilities/FormSelect';
import { Errors } from '../Utilities/Errors';
import ProifleImagePlaceholder from '../../img/account_circle_white_24dp.svg';
export var Profile = function () {
    var dispatch = useDispatch();
    var _a = useSelector(function (state) { return state.authReducer; }), authToken = _a.authToken, authErrors = _a.authErrors;
    var isLoading = useSelector(function (state) { return state.dataReducer; }).isLoading;
    var _b = useSelector(function (state) { return state.dataReducer.playerProfile.playerProfile; }), defaultTeam = _b.defaultTeam, position = _b.position;
    useEffect(function () {
        dispatch(getProfileData({ authToken: authToken }));
    }, [authToken, dispatch]);
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var formData;
        return __generator(this, function (_a) {
            e.preventDefault();
            formData = { defaultTeam: defaultTeam, position: position };
            dispatch(updateProfileData({ authToken: authToken, formData: formData }));
            return [2 /*return*/];
        });
    }); };
    var onInputChange = function (e) {
        var _a;
        var inputName = e.target.name;
        dispatch(setPlayerProfile((_a = {}, _a[inputName] = e.target.value, _a)));
    };
    var teamOptions = [
        { value: '1', text: '1' },
        { value: '2', text: '2' },
        { value: '3', text: '3' },
        { value: '4', text: '4' },
        { value: '5', text: '5' },
        { value: '6', text: '6' },
        { value: '7', text: '7' },
        { value: '0', text: 'Vets' }
    ];
    var positionOptions = [
        { value: 'GK', text: 'GK' },
        { value: 'LB', text: 'LB' },
        { value: 'CB', text: 'CB' },
        { value: 'RB', text: 'RB' },
        { value: 'LM', text: 'LM' },
        { value: 'CM', text: 'CM' },
        { value: 'RM', text: 'RM' },
        { value: 'CF', text: 'CF' }
    ];
    return (React.createElement(Fragment, null,
        React.createElement(Container, null,
            React.createElement(UpdateProfileForm, { onSubmit: function (e) { return onSubmit(e); } },
                React.createElement(FormTitle, { text: "PROFILE" }),
                authErrors && React.createElement(Errors, { errors: authErrors }),
                React.createElement(ProfileImage, { src: ProifleImagePlaceholder }),
                React.createElement(FormSelect, { placeholder: "Usual Matchday Team", name: 'defaultTeam', value: defaultTeam || 1, onChange: onInputChange, optionsElements: teamOptions }),
                React.createElement(FormSelect, { placeholder: "Position", name: 'position', value: position || 'XX', onChange: onInputChange, optionsElements: positionOptions }),
                React.createElement(Button, { text: "UPDATE PROFILE", disabled: isLoading }),
                React.createElement(Footer, null,
                    React.createElement(Link, { href: '/dashboard' }, "Click here to register for Training or Games"))))));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    top: 0;\n    width: 100%;\n"], ["\n    position: relative;\n    top: 0;\n    width: 100%;\n"])));
var UpdateProfileForm = styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    border-radius: 0.7rem;\n    background: #003a68;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 1rem auto 1rem auto;\n        border-left: none;\n        border-right: none;\n        border-radius: 0rem;\n    }\n"], ["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    border-radius: 0.7rem;\n    background: #003a68;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 1rem auto 1rem auto;\n        border-left: none;\n        border-right: none;\n        border-radius: 0rem;\n    }\n"])));
var ProfileImage = styled.img(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    margin: 1rem auto 1rem auto;\n    width: 5rem;\n"], ["\n    display: block;\n    margin: 1rem auto 1rem auto;\n    width: 5rem;\n"])));
var Footer = styled.h1(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    margin: -2px;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    text-decoration: underline;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"], ["\n    margin: -2px;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    text-decoration: underline;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"])));
var Link = styled.a(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    color: #003a68;\n    text-align: center;\n\n    &:hover {\n        color: black;\n    }\n"], ["\n    color: #003a68;\n    text-align: center;\n\n    &:hover {\n        color: black;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
