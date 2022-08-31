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
import { render, screen } from '@testing-library/react';
import { rest, server } from '../../../testServer';
import React from 'react';
import { apiSucessStore } from './mocks/mockReduxStoreSucess';
import { apiFailStore } from './mocks/mockReduxStoreFail';
import { Provider } from 'react-redux';
import { Profile } from '../Profile';
import { apiCall } from '../../Utilities/apiUtil';
describe('When the api call is sucessful', function () {
    it('should render the input fields from the data', function () { return __awaiter(void 0, void 0, void 0, function () {
        var profile, positionInputElement, usualMatchdayTeamInputElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, apiCall('get', 'api/profile/currentProfile', 'dummyAuthToken')];
                case 1:
                    profile = (_a.sent()).profile;
                    expect(profile.defaultTeam).toBe('3');
                    expect(profile.position).toBe('GK');
                    render(React.createElement(Provider, { store: apiSucessStore },
                        React.createElement(Profile, null)));
                    positionInputElement = screen.getByPlaceholderText('Position');
                    expect(positionInputElement.value).toBe('GK');
                    usualMatchdayTeamInputElement = screen.getByPlaceholderText('Usual Matchday Team');
                    expect(usualMatchdayTeamInputElement.value).toBe('3');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('When the api call is fails', function () {
    it('should render the error message', function () { return __awaiter(void 0, void 0, void 0, function () {
        var errorResponse, errorMessageElement;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    errorResponse = {
                        errors: [
                            {
                                msg: 'Mock Error Message'
                            }
                        ]
                    };
                    server.use(rest.get("".concat(process.env.REACT_APP_API_ADDRESS, "/api/profile/currentProfile"), function (req, res, ctx) {
                        return res(ctx.json(errorResponse));
                    }));
                    return [4 /*yield*/, apiCall('get', 'api/profile/currentProfile', 'dummyAuthToken')];
                case 1:
                    _a.sent();
                    render(React.createElement(Provider, { store: apiFailStore },
                        React.createElement(Profile, null)));
                    errorMessageElement = screen.getByRole('heading', { name: /error/i });
                    expect(errorMessageElement.innerHTML).toBe('Mock Error Message');
                    return [2 /*return*/];
            }
        });
    }); });
});
