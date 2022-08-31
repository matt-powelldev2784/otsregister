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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCall } from '../Utilities/apiUtil';
import { formatDate } from '../Utilities/formatDate';
var setGamesDataWithCurrentUserAvailability = function (gamesData, authUserId) {
    return gamesData.map(function (game) {
        var currentPlayerAvailable;
        game.playersAvailable.forEach(function (player) {
            if (player.user._id === authUserId) {
                currentPlayerAvailable = true;
            }
        });
        return __assign(__assign({}, game), { currentPlayerAvailable: currentPlayerAvailable });
    });
};
export var getGamesData = createAsyncThunk('dataState/getGamesData', function (authToken) { return __awaiter(void 0, void 0, void 0, function () {
    var gamesData, recentGames, err_1, errorMessage;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, apiCall('get', 'api/games/recentgames', authToken)];
            case 1:
                gamesData = _a.sent();
                recentGames = gamesData.recentGames;
                return [2 /*return*/, recentGames];
            case 2:
                err_1 = _a.sent();
                console.log('err.msg', err_1);
                errorMessage = err_1.errors[0].msg;
                throw Error(errorMessage);
            case 3: return [2 /*return*/];
        }
    });
}); });
export var createGame = createAsyncThunk('dataState/createGame', function (_a) {
    var authToken = _a.authToken, formData = _a.formData;
    return __awaiter(void 0, void 0, void 0, function () {
        var createdGame, err_2, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, apiCall('post', 'api/games/creategame', authToken, formData)];
                case 1:
                    createdGame = _b.sent();
                    window.location.href = '/dashboard';
                    return [2 /*return*/, createdGame];
                case 2:
                    err_2 = _b.sent();
                    console.log('err.msg', err_2);
                    errorMessage = err_2.errors[0].msg;
                    throw Error(errorMessage);
                case 3: return [2 /*return*/];
            }
        });
    });
});
export var getPlanTeamsData = createAsyncThunk('dataState/getPlanTeamData', function (_a) {
    var authToken = _a.authToken, body = _a.body;
    return __awaiter(void 0, void 0, void 0, function () {
        var gameId, game, gameDetails, err_3, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    gameId = body.gameId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, apiCall('get', "api/games/planTeamData/".concat(gameId), authToken, body)];
                case 2:
                    game = _b.sent();
                    gameDetails = game.gameDetails;
                    return [2 /*return*/, gameDetails];
                case 3:
                    err_3 = _b.sent();
                    console.log('err.msg', err_3);
                    errorMessage = err_3.errors[0].msg;
                    throw Error(errorMessage);
                case 4: return [2 /*return*/];
            }
        });
    });
});
export var saveFinalTeams = createAsyncThunk('dataState/saveFinalTeams', function (_a) {
    var authToken = _a.authToken, planTeamsGameId = _a.planTeamsGameId, unsortedFinalTeamData = _a.unsortedFinalTeamData;
    return __awaiter(void 0, void 0, void 0, function () {
        var body, err_4, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    body = { gameId: planTeamsGameId, finalTeam: unsortedFinalTeamData };
                    return [4 /*yield*/, apiCall('post', 'api/games/updatefinalteam', authToken, body)];
                case 1:
                    _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    err_4 = _b.sent();
                    console.log('err.msg', err_4);
                    errorMessage = err_4.errors[0].msg;
                    throw Error(errorMessage);
                case 3: return [2 /*return*/];
            }
        });
    });
});
export var setGameRegister = createAsyncThunk('dataState/setGameRegister', function (_a) {
    var authToken = _a.authToken, body = _a.body;
    return __awaiter(void 0, void 0, void 0, function () {
        var gamesData, recentGames, err_5, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, apiCall('post', 'api/games/gameregister', authToken, body)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, apiCall('get', 'api/games/recentgames', authToken)];
                case 2:
                    gamesData = _b.sent();
                    recentGames = gamesData.recentGames;
                    return [2 /*return*/, recentGames];
                case 3:
                    err_5 = _b.sent();
                    console.log('err.msg', err_5);
                    errorMessage = err_5.errors[0].msg;
                    throw Error(errorMessage);
                case 4: return [2 /*return*/];
            }
        });
    });
});
export var deleteGame = createAsyncThunk('dataState/deleteGame', function (_a) {
    var authToken = _a.authToken, gameId = _a.gameId;
    return __awaiter(void 0, void 0, void 0, function () {
        var gamesData, recentGames, err_6, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, apiCall('delete', "api/games/deletegame/".concat(gameId), authToken)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, apiCall('get', 'api/games/recentgames', authToken)];
                case 2:
                    gamesData = _b.sent();
                    recentGames = gamesData.recentGames;
                    return [2 /*return*/, recentGames];
                case 3:
                    err_6 = _b.sent();
                    console.log('err.msg', err_6);
                    errorMessage = err_6.errors[0].msg;
                    throw Error(errorMessage);
                case 4: return [2 /*return*/];
            }
        });
    });
});
export var setPlayerRegister = createAsyncThunk('dataState/setPlayerRegister', function (_a) {
    var authToken = _a.authToken, body = _a.body;
    return __awaiter(void 0, void 0, void 0, function () {
        var gamesData, recentGames, err_7, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, apiCall('post', 'api/player/playerRegister', authToken, body)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, apiCall('get', 'api/games/recentgames', authToken)];
                case 2:
                    gamesData = _b.sent();
                    recentGames = gamesData.recentGames;
                    return [2 /*return*/, recentGames];
                case 3:
                    err_7 = _b.sent();
                    console.log('err.msg', err_7);
                    errorMessage = err_7.errors[0].msg;
                    throw Error(errorMessage);
                case 4: return [2 /*return*/];
            }
        });
    });
});
export var getProfileData = createAsyncThunk('dataState/getProfileData', function (_a) {
    var authToken = _a.authToken;
    return __awaiter(void 0, void 0, void 0, function () {
        var profileData, profile, err_8, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, apiCall('get', 'api/profile/currentProfile', authToken)];
                case 1:
                    profileData = _b.sent();
                    profile = profileData.profile;
                    return [2 /*return*/, profile];
                case 2:
                    err_8 = _b.sent();
                    console.log('err.msg', err_8);
                    errorMessage = err_8.errors[0].msg;
                    throw Error(errorMessage);
                case 3: return [2 /*return*/];
            }
        });
    });
});
export var updateProfileData = createAsyncThunk('dataState/updateProfileData', function (_a) {
    var authToken = _a.authToken, formData = _a.formData;
    return __awaiter(void 0, void 0, void 0, function () {
        var updatedProfile, err_9, errorMessage;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, apiCall('post', 'api/profile/createUpdate', authToken, formData)];
                case 1:
                    updatedProfile = _b.sent();
                    window.location.href = '/dashboard';
                    return [2 /*return*/, updatedProfile];
                case 2:
                    err_9 = _b.sent();
                    console.log('err.msg', err_9);
                    errorMessage = err_9.errors[0].msg;
                    throw Error(errorMessage);
                case 3: return [2 /*return*/];
            }
        });
    });
});
export var dataSlice = createSlice({
    name: 'dataState',
    initialState: {
        isLoading: false,
        dataErrors: [],
        authUserName: localStorage.getItem('authUserName') || null,
        authUserId: localStorage.getItem('authUserId') || null,
        playerProfile: { playerProfile: {} },
        playerRegister: { registerDetails: {} },
        createGameData: { gameData: null, createGameDataIsLoading: false },
        gamesData: { gamesList: null, gamesDataIsLoading: false },
        planTeamsData: {
            planTeamsGameId: sessionStorage.getItem('planTeamsGameId') || null,
            gameNotClosedError: null,
            fixtureDate: '',
            fixtureName: '',
            unsortedFinalTeamData: [],
            sortedFinalTeamData: [],
            planTeamsDataIsLoading: false,
            displayTableForEmail: false,
            authErrors: null
        }
    },
    reducers: {
        setDataIsLoading: function (state, _a) {
            var payload = _a.payload;
            state.isLoading = payload;
        },
        setPlanGamesId: function (state, _a) {
            var payload = _a.payload;
            state.planTeamsData = __assign(__assign({}, state.planTeamsData), { planTeamsGameId: payload });
        },
        setGamesNotClosedError: function (state, _a) {
            var payload = _a.payload;
            state.planTeamsData.gameNotClosedError = payload;
        },
        deleteAuthData: function (state, action) {
            state.planTeamsData.planTeamsGameId = null;
            state.authUserName = null;
            state.authUserId = null;
        },
        deletePlanTeamsGameId: function (state, action) {
            state.planTeamsData.planTeamsGameId = null;
        },
        setAuthData: function (state, _a) {
            var payload = _a.payload;
            state.authUserName = payload.authUserName;
            state.authUserId = payload.authUserId;
        },
        setUnsortedFinalTeamData: function (state, _a) {
            var payload = _a.payload;
            state.planTeamsData.unsortedFinalTeamData = payload;
        },
        setSortedFinalTeamData: function (state, _a) {
            var payload = _a.payload;
            state.planTeamsData.sortedFinalTeamData = payload;
        },
        movePlayerToDifferentTeam: function (state, _a) {
            var payload = _a.payload;
            var playerId = payload.playerId;
            var newTeam = payload.newTeam.toString();
            state.planTeamsData.unsortedFinalTeamData.map(function (player) {
                if (player.user._id === playerId) {
                    player.defaultTeam = newTeam;
                }
                return player;
            });
        },
        toggleDisplayTableForEmail: function (state, _a) {
            var payload = _a.payload;
            state.planTeamsData.displayTableForEmail = payload;
        },
        setPlayerProfile: function (state, _a) {
            var payload = _a.payload;
            state.playerProfile.playerProfile = __assign(__assign({}, state.playerProfile.playerProfile), payload);
        }
    },
    extraReducers: (_a = {},
        _a[getGamesData.pending] = function (state) {
            state.isLoading = true;
            state.gamesData = __assign({}, state.gamesData);
            state.dataErrors = null;
        },
        _a[getGamesData.fulfilled] = function (state, action) {
            state.isLoading = false;
            state.dataErrors = null;
            state.authUserName = localStorage.getItem('authUserName');
            state.authUserId = localStorage.getItem('authUserId');
            var gamesData = action.payload;
            var gamesDataWithCurrentUserAvailability = setGamesDataWithCurrentUserAvailability(gamesData, state.authUserId);
            state.gamesData = __assign(__assign({}, state.gamesData), { gamesList: __spreadArray([], gamesDataWithCurrentUserAvailability, true) });
        },
        _a[getGamesData.rejected] = function (state, action) {
            state.isLoading = false;
            state.gamesData = __assign({}, state.gamesData);
            state.dataErrors = [action.error];
        },
        //---------------------------------------------------------------------
        _a[getPlanTeamsData.pending] = function (state) {
            state.isLoading = true;
            state.planTeamsData = __assign(__assign({}, state.planTeamsData), { authErrors: false });
        },
        _a[getPlanTeamsData.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.planTeamsData = __assign(__assign({}, state.planTeamsData), { planTeamsDataIsLoading: false, unsortedFinalTeamData: payload.finalTeam, fixtureDate: formatDate(payload.gameDate), fixtureName: payload.gameName });
            state.isLoading = false;
        },
        _a[getPlanTeamsData.rejected] = function (state, action) {
            state.planTeamsData = __assign(__assign({}, state.planTeamsData), { authErrors: [action.error] });
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        _a[createGame.pending] = function (state) {
            state.createGameData = { gameData: null, authErrors: null };
            state.isLoading = true;
        },
        _a[createGame.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.createGameData = { gameData: payload, authErrors: null };
            state.isLoading = false;
        },
        _a[createGame.rejected] = function (state, action) {
            state.createGameData = { gameData: null, authErrors: [action.error] };
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        _a[setGameRegister.pending] = function (state) {
            state.gamesData = __assign(__assign({}, state.gamesData), { authErrors: null });
            state.isLoading = true;
        },
        _a[setGameRegister.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.gamesData = __assign(__assign({}, state.gamesData), { authErrors: null });
            state.gamesData.gamesList = payload;
            state.isLoading = false;
        },
        _a[setGameRegister.rejected] = function (state, action) {
            state.gamesData = __assign(__assign({}, state.gamesData), { authErrors: [action.error] });
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        _a[deleteGame.pending] = function (state) {
            state.gamesData = __assign(__assign({}, state.gamesData), { authErrors: null });
            state.isLoading = true;
        },
        _a[deleteGame.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.gamesData = __assign(__assign({}, state.gamesData), { authErrors: null });
            state.gamesData.gamesList = payload;
            state.isLoading = false;
        },
        _a[deleteGame.rejected] = function (state, action) {
            state.gamesData = __assign(__assign({}, state.gamesData), { authErrors: [action.error] });
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        _a[setPlayerRegister.pending] = function (state) {
            state.isLoading = true;
            state.dataErrors = null;
            state.playerRegister = __assign({}, state.playerRegister);
        },
        _a[setPlayerRegister.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            var gamesData = payload;
            var gamesDataWithCurrentUserAvailability = setGamesDataWithCurrentUserAvailability(gamesData, state.authUserId);
            state.gamesData = __assign(__assign({}, state.gamesData), { gamesDataIsLoading: false, gamesList: __spreadArray([], gamesDataWithCurrentUserAvailability, true) });
            state.isLoading = false;
            state.dataErrors = null;
        },
        _a[setPlayerRegister.rejected] = function (state, action) {
            state.isLoading = false;
            state.gamesData = __assign({}, state.gamesData);
            state.dataErrors = [action.error];
        },
        //---------------------------------------------------------------------
        _a[getProfileData.pending] = function (state) {
            state.playerProfile = __assign({}, state.playerProfile);
            state.dataErrors = null;
        },
        _a[getProfileData.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.playerProfile = { playerProfile: payload };
        },
        _a[getProfileData.rejected] = function (state, action) {
            state.playerProfile = __assign({}, state.playerProfile);
            state.dataErrors = [action.error];
        },
        //---------------------------------------------------------------------
        _a[updateProfileData.pending] = function (state) {
            state.playerProfile = __assign({}, state.playerProfile);
            state.dataErrors = null;
        },
        _a[updateProfileData.fulfilled] = function (state, _a) {
            var payload = _a.payload;
            state.playerProfile = { playerProfile: payload };
        },
        _a[updateProfileData.rejected] = function (state, action) {
            state.playerProfile = __assign({}, state.playerProfile);
            state.dataErrors = [action.error];
        },
        _a)
});
export var setPlanGamesId = (_b = dataSlice.actions, _b.setPlanGamesId), setGamesNotClosedError = _b.setGamesNotClosedError, deletePlanTeamsGameId = _b.deletePlanTeamsGameId, setFinalTeamDom = _b.setFinalTeamDom, setUnsortedFinalTeamData = _b.setUnsortedFinalTeamData, setSortedFinalTeamData = _b.setSortedFinalTeamData, movePlayerToDifferentTeam = _b.movePlayerToDifferentTeam, toggleDisplayTableForEmail = _b.toggleDisplayTableForEmail, deleteAuthData = _b.deleteAuthData, setAuthData = _b.setAuthData, setDataIsLoading = _b.setDataIsLoading, setPlayerProfile = _b.setPlayerProfile;
export var dataReducer = dataSlice.reducer;
