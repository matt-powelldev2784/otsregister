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
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { getPlanTeamsData, setSortedFinalTeamData, saveFinalTeams } from '../../redux/dataState';
import { sortPlayersIntoTeams } from '../sortPlayersIntoTeams';
import { TableForEmail } from './TableForEmail';
import { TableForEmailButton } from '../TableForEmailButton';
import { PageTitle } from '../../Utilities/PageTitle';
import { Errors } from '../../Utilities/Errors';
export var EmailTable = function (props) {
    var dispatch = useDispatch();
    var authToken = useSelector(function (state) { return state.authReducer; }).authToken;
    var planTeamsData = useSelector(function (state) { return state.dataReducer; }).planTeamsData;
    var planTeamsGameId = planTeamsData.planTeamsGameId, unsortedFinalTeamData = planTeamsData.unsortedFinalTeamData, authErrors = planTeamsData.authErrors, fixtureDate = planTeamsData.fixtureDate, fixtureName = planTeamsData.fixtureName;
    useEffect(function () {
        var getTeamsData = function () { return __awaiter(void 0, void 0, void 0, function () {
            var body;
            return __generator(this, function (_a) {
                try {
                    body = { gameId: planTeamsGameId };
                    dispatch(getPlanTeamsData({ authToken: authToken, body: body }));
                }
                catch (err) {
                    throw Error;
                }
                return [2 /*return*/];
            });
        }); };
        getTeamsData();
    }, [dispatch, authToken, planTeamsGameId]);
    useEffect(function () {
        var sortedPlayers = sortPlayersIntoTeams(unsortedFinalTeamData);
        dispatch(setSortedFinalTeamData(sortedPlayers));
        if (unsortedFinalTeamData.length > 0) {
            dispatch(saveFinalTeams({ authToken: authToken, planTeamsGameId: planTeamsGameId, unsortedFinalTeamData: unsortedFinalTeamData }));
        }
    }, [unsortedFinalTeamData, dispatch, authToken, planTeamsGameId]);
    return (React.createElement(Container, null,
        authErrors && React.createElement(Errors, { errors: authErrors }),
        React.createElement(PageTitle, { text: "Plan Teams for ".concat(fixtureName, " on ").concat(fixtureDate) }),
        React.createElement(TableForEmail, null),
        React.createElement(TableForEmailButton, { text: 'Back to Plan Teams', navigationPage: '/planteams' })));
};
var Container = styled.section(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n"], ["\n    position: relative;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n"])));
var templateObject_1;
