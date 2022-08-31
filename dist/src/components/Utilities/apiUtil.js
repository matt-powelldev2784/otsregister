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
import axios from 'axios';
var defaultError = {
    errors: [
        {
            sucess: false,
            status: 500,
            msg: 'Server Error'
        }
    ]
};
export var registerUser = function (userNameEmailPassword) { return __awaiter(void 0, void 0, void 0, function () {
    var config, body, res, token, err_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                config = { headers: { 'Content-Type': 'application/json' } };
                body = JSON.stringify(userNameEmailPassword);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios.post("".concat(process.env.REACT_APP_API_ADDRESS, "/api/users"), body, config)];
            case 2:
                res = _a.sent();
                token = res.data.token;
                return [2 /*return*/, token];
            case 3:
                err_1 = _a.sent();
                throw err_1.response.data;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var loginUser = function (emailPassword) { return __awaiter(void 0, void 0, void 0, function () {
    var config, body, res, token, err_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                config = { headers: { 'Content-Type': 'application/json' } };
                body = JSON.stringify(emailPassword);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios.post("".concat(process.env.REACT_APP_API_ADDRESS, "/api/auth"), body, config)];
            case 2:
                res = _a.sent();
                token = res.data.token;
                return [2 /*return*/, token];
            case 3:
                err_2 = _a.sent();
                throw err_2.response.data;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var getAuthUser = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var config, res, user, err_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                config = { headers: { 'x-auth-token': token, 'content-type': 'application/json' } };
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios.get("".concat(process.env.REACT_APP_API_ADDRESS, "/api/auth"), config)];
            case 2:
                res = _a.sent();
                user = res.data;
                return [2 /*return*/, user];
            case 3:
                err_3 = _a.sent();
                throw err_3.response.data;
            case 4: return [2 /*return*/];
        }
    });
}); };
export var apiCall = function (apiCallType, route, token, body) { return __awaiter(void 0, void 0, void 0, function () {
    var config, response, _a, responseData, err_4;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                config = { headers: { 'x-auth-token': token } };
                _b.label = 1;
            case 1:
                _b.trys.push([1, 11, , 12]);
                response = void 0;
                _a = apiCallType;
                switch (_a) {
                    case 'post': return [3 /*break*/, 2];
                    case 'get': return [3 /*break*/, 4];
                    case 'delete': return [3 /*break*/, 6];
                }
                return [3 /*break*/, 8];
            case 2: return [4 /*yield*/, axios.post("".concat(process.env.REACT_APP_API_ADDRESS, "/").concat(route), body, config)];
            case 3:
                response = _b.sent();
                return [3 /*break*/, 10];
            case 4: return [4 /*yield*/, axios.get("".concat(process.env.REACT_APP_API_ADDRESS, "/").concat(route), config)];
            case 5:
                response = _b.sent();
                return [3 /*break*/, 10];
            case 6: return [4 /*yield*/, axios.delete("".concat(process.env.REACT_APP_API_ADDRESS, "/").concat(route), config)];
            case 7:
                response = _b.sent();
                return [3 /*break*/, 10];
            case 8: return [4 /*yield*/, axios.get("".concat(process.env.REACT_APP_API_ADDRESS, "/").concat(route), config)];
            case 9:
                response = _b.sent();
                _b.label = 10;
            case 10:
                responseData = response.data;
                return [2 /*return*/, responseData];
            case 11:
                err_4 = _b.sent();
                if (err_4.repsonse) {
                    throw err_4.repsonse.data;
                }
                else {
                    throw defaultError;
                }
                return [3 /*break*/, 12];
            case 12: return [2 /*return*/];
        }
    });
}); };
