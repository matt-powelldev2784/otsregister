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
var _a, _b;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser } from '../Utilities/apiUtil';
import { getAuthUser } from '../Utilities/apiUtil';
import { registerUser } from '../Utilities/apiUtil';
import { apiCall } from '../Utilities/apiUtil';
export var login = createAsyncThunk('authState/login', function (formData) { return __awaiter(void 0, void 0, void 0, function () {
    var authToken, err_1, errorMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, loginUser(formData)];
            case 1:
                authToken = _a.sent();
                window.location.href = '/dashboard';
                return [2 /*return*/, authToken];
            case 2:
                err_1 = _a.sent();
                errorMessage = err_1.errors[0].msg;
                throw Error(errorMessage);
            case 3: return [2 /*return*/];
        }
    });
}); });
export var getAuhtorisedUser = createAsyncThunk('authState/getAuthorisedUser', function (authToken) { return __awaiter(void 0, void 0, void 0, function () {
    var authUser, err_2, errorMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getAuthUser(authToken)];
            case 1:
                authUser = _a.sent();
                return [2 /*return*/, authUser];
            case 2:
                err_2 = _a.sent();
                errorMessage = err_2.errors[0].msg;
                throw Error(errorMessage);
            case 3: return [2 /*return*/];
        }
    });
}); });
export var registerNewUser = createAsyncThunk('authState/registerNewUser', function (_a) {
    var authToken = _a.authToken, formData = _a.formData;
    return __awaiter(void 0, void 0, void 0, function () {
        var authToken_1, defaultProfile, err_3, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, registerUser(formData)];
                case 1:
                    authToken_1 = _b.sent();
                    defaultProfile = { defaultTeam: 0, position: 'XX' };
                    return [4 /*yield*/, apiCall('post', 'api/profile/createUpdate', authToken_1, defaultProfile)];
                case 2:
                    _b.sent();
                    window.location.href = '/editProfile';
                    return [2 /*return*/, authToken_1];
                case 3:
                    err_3 = _b.sent();
                    errorMessage = err_3.errors[0].msg;
                    throw Error(errorMessage);
                case 4: return [2 /*return*/];
            }
        });
    });
});
export var authSlice = createSlice({
    name: 'authState',
    initialState: {
        authToken: localStorage.getItem('token') || null,
        authErrors: null,
        adminUser: localStorage.getItem('adminUser') === 'true' || false,
        authUserName: localStorage.getItem('authUserName') || null,
        authUserId: localStorage.getItem('authUserId') || null,
        authIsLoading: false
    },
    reducers: {
        deleteAuthToken: function (state, _a) {
            var payload = _a.payload;
            localStorage.clear();
            sessionStorage.clear();
            state.authToken = null;
            state.authUserName = null;
            state.authUserId = null;
        },
        setAuthErrors: function (state, _a) {
            var payload = _a.payload;
            state.authErrors = payload;
        },
        setAuthIsLoading: function (state, _a) {
            var payload = _a.payload;
            state.authIsLoading = payload;
        }
    },
    extraReducers: (_a = {},
        _a[login.pending] = function (state) {
            state.authIsLoading = true;
            state.authToken = null;
            state.authErrors = null;
        },
        _a[login.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.authToken = payload;
            localStorage.setItem('token', payload);
            state.authIsLoading = false;
            state.authErrors = null;
        },
        _a[login.rejected] = function (state, action) {
            state.authToken = null;
            state.authIsLoading = false;
            state.authErrors = [action.error];
        },
        //---------------------------------------------------------------------
        _a[getAuhtorisedUser.pending] = function (state) {
            state.authIsLoading = true;
            state.adminUser = false;
            state.authUserName = null;
            state.authUserId = null;
        },
        _a[getAuhtorisedUser.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            if (payload.admin) {
                state.adminUser = payload.admin;
                localStorage.setItem('adminUser', payload.admin);
            }
            state.authUserName = payload.name;
            state.authUserId = payload._id;
            localStorage.setItem('authUserName', payload.name);
            localStorage.setItem('authUserId', payload._id);
            state.authIsLoading = false;
            state.authErrors = null;
        },
        _a[getAuhtorisedUser.rejected] = function (state, action) {
            state.adminUser = false;
            state.authUserName = null;
            state.authUserId = null;
            state.authIsLoading = false;
            state.authErrors = [action.error];
        },
        //---------------------------------------------------------------------
        _a[registerNewUser.pending] = function (state) {
            state.authIsLoading = true;
            state.authToken = null;
            state.authErrors = null;
        },
        _a[registerNewUser.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.authToken = payload;
            localStorage.setItem('token', payload);
            state.authIsLoading = false;
            state.authErrors = null;
        },
        _a[registerNewUser.rejected] = function (state, action) {
            state.authToken = null;
            state.authIsLoading = false;
            state.authErrors = [action.error];
        }
    //---------------------------------------------------------------------
    ,
        _a)
});
export var deleteAuthToken = (_b = authSlice.actions, _b.deleteAuthToken), setAuthIsLoading = _b.setAuthIsLoading, setAuthErrors = _b.setAuthErrors;
export var authReducer = authSlice.reducer;
