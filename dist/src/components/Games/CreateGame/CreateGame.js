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
import React, { Fragment, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createGame } from '../../redux/dataState';
import styled from 'styled-components';
import { Errors } from '../../Utilities/Errors';
import { Button } from '../../Utilities/Button';
import { FormTitle } from '../../Utilities/FormTitle';
export var CreateGame = function () {
    var dispatch = useDispatch();
    var authToken = useSelector(function (state) { return state.authReducer; }).authToken;
    var createGameData = useSelector(function (state) { return state.dataReducer; }).createGameData;
    var authErrors = createGameData.authErrors;
    var createGameDate = useRef(null);
    var createGameName = useRef(null);
    var onSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var gameDate, gameName, formData;
        return __generator(this, function (_a) {
            e.preventDefault();
            gameDate = createGameDate.current.value;
            gameName = createGameName.current.value;
            formData = { gameDate: gameDate, gameName: gameName };
            try {
                dispatch(createGame({ authToken: authToken, formData: formData }));
            }
            catch (err) {
                throw Error;
            }
            return [2 /*return*/];
        });
    }); };
    return (React.createElement(Fragment, null,
        React.createElement(Container, null,
            React.createElement(CreateGameForm, { onSubmit: function (e) { return onSubmit(e); } },
                React.createElement(FormTitle, { text: "CREATE GAME" }),
                authErrors && React.createElement(Errors, { errors: authErrors }),
                React.createElement(Label, { htmlFor: "date-input" }),
                React.createElement(Span, null, "DATE"),
                React.createElement(Input, { type: "date", placeholder: "Game Date", label: "GAMEDATE", name: "date-input", id: "date-input", ref: createGameDate }),
                React.createElement(Label, { htmlFor: "game-name" }),
                React.createElement(Span, null, "GAME NAME"),
                React.createElement(Input, { type: "text", placeholder: "Game Name", label: "GAME NAME", maxLength: "20", id: "game-name", ref: createGameName }),
                React.createElement(Button, { text: "CREATE GAME" }),
                React.createElement(Footer, null)))));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    top: 0;\n    width: 100%;\n"], ["\n    position: relative;\n    top: 0;\n    width: 100%;\n"])));
var CreateGameForm = styled.form(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    border-radius: 0.7rem;\n    background: #003a68;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 0 auto 0 auto;\n        border-left: none;\n        border-right: none;\n        border-radius: 0rem;\n    }\n"], ["\n    margin: 3rem auto 3rem auto;\n    width: 22rem;\n    border-left: 3px solid white;\n    border-right: 3px solid white;\n    border-radius: 0.7rem;\n    background: #003a68;\n\n    @media (max-device-width: 440px) {\n        width: 100vw;\n        margin: 0 auto 0 auto;\n        border-left: none;\n        border-right: none;\n        border-radius: 0rem;\n    }\n"])));
var Label = styled.label(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n    display: block;\n    margin: 1rem auto 1rem auto;\n"], ["\n    display: block;\n    margin: 1rem auto 1rem auto;\n"])));
var Span = styled.span(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n    display: block;\n    width: 18rem;\n    margin: 0rem auto 0rem auto;\n    padding: 0.1rem;\n    color: white;\n    font-weight: 500;\n    font-size: 0.8rem;\n\n    background: none;\n"], ["\n    display: block;\n    width: 18rem;\n    margin: 0rem auto 0rem auto;\n    padding: 0.1rem;\n    color: white;\n    font-weight: 500;\n    font-size: 0.8rem;\n\n    background: none;\n"])));
var Input = styled.input.attrs(function (props) { return ({
    type: props.type || 'type',
    placeholder: props.placeholder || 'placeholder'
}); })(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n    display: block;\n    margin: 0rem auto 0rem auto;\n    width: 18rem;\n    padding: 0.5rem;\n    border: ", ";\n    border-radius: 0rem;\n    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);\n    font-size: 1rem;\n\n    &:focus {\n        border: 0;\n    }\n"], ["\n    display: block;\n    margin: 0rem auto 0rem auto;\n    width: 18rem;\n    padding: 0.5rem;\n    border: ", ";\n    border-radius: 0rem;\n    box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.3);\n    font-size: 1rem;\n\n    &:focus {\n        border: 0;\n    }\n"])), function (props) { return (props.error === true ? '2px solid red' : 'none'); });
var Footer = styled.h1(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n    margin: -2px;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    text-decoration: underline;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"], ["\n    margin: -2px;\n    border-radius: 0rem 0rem 0.7rem 0.7rem;\n    text-align: center;\n    padding: 0.5rem;\n    font-weight: 700;\n    font-size: 1rem;\n    color: #003a68;\n    background: white;\n    text-decoration: underline;\n\n    @media (max-device-width: 440px) {\n        border-radius: 0rem;\n        font-weight: 700;\n        font-size: 1rem;\n    }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6;
