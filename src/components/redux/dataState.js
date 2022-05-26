import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiCall } from '../Utilities/apiUtil';
import { formatDate } from '../Utilities/formatDate';

const setGamesDataWithCurrentUserAvailability = (gamesData, authUserId) =>
    gamesData.map(game => {
        let currentPlayerAvailable;
        game.playersAvailable.forEach(player => {
            if (player._id === authUserId) {
                currentPlayerAvailable = true;
            }
        });
        game.playersUnavailable.forEach(player => {
            if (player._id === authUserId) {
                currentPlayerAvailable = false;
            }
        });

        return { ...game, currentPlayerAvailable: currentPlayerAvailable };
    });

export const getGamesData = createAsyncThunk('dataState/getGamesData', async authToken => {
    try {
        const gamesData = await apiCall('get', 'api/games/recentgames', authToken);
        return gamesData;
    } catch (err) {
        throw Error(err.msg);
    }
});

export const createGame = createAsyncThunk('dataState/createGame', async ({ authToken, formData }) => {
    try {
        const createdGame = await apiCall('post', 'api/games/creategame', authToken, formData);
        window.location.href = '/dashboard';
        return createdGame;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const getPlanTeamsData = createAsyncThunk('dataState/getPlanTeamData', async ({ authToken, body }) => {
    try {
        const game = await apiCall('post', 'api/games/gameavailibility', authToken, body);
        return game;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const saveFinalTeams = createAsyncThunk(
    'dataState/saveFinalTeams',
    async ({ authToken, planTeamsGameId, unsortedFinalTeamData }) => {
        try {
            const body = { gameId: planTeamsGameId, finalTeam: unsortedFinalTeamData };
            await apiCall('post', 'api/games/updatefinalteam', authToken, body);
        } catch (err) {
            console.log('err.msg', err);
            const errorMessage = err.errors[0].msg;
            throw Error(errorMessage);
        }
    }
);

export const setGameRegister = createAsyncThunk('dataState/setGameRegister', async ({ authToken, body }) => {
    try {
        await apiCall('post', 'api/games/setregister', authToken, body);
        const gamesData = await apiCall('get', 'api/games/recentgames', authToken);
        return gamesData;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const deleteGame = createAsyncThunk('dataState/deleteGame', async ({ authToken, gameId }) => {
    try {
        await apiCall('delete', `api/games/deletegame/${gameId}`, authToken);
        const gamesData = await apiCall('get', 'api/games/recentgames', authToken);
        return gamesData;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const setPlayerRegister = createAsyncThunk('dataState/setPlayerRegister', async ({ authToken, body }) => {
    try {
        await apiCall('post', 'api/games/registerforgame', authToken, body);
        const gamesData = await apiCall('get', 'api/games/recentgames', authToken);
        return gamesData;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const getProfileData = createAsyncThunk('dataState/getProfileData', async ({ authToken }) => {
    try {
        const profile = await apiCall('get', 'api/profile/me', authToken);
        return profile;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const updateProfileData = createAsyncThunk('dataState/updateProfileData', async ({ authToken, formData }) => {
    try {
        const updatedProfile = await apiCall('post', 'api/profile', authToken, formData);
        window.location.href = '/dashboard';
        return updatedProfile;
    } catch (err) {
        console.log('err.msg', err);
        const errorMessage = err.errors[0].msg;
        throw Error(errorMessage);
    }
});

export const dataSlice = createSlice({
    name: 'dataState',
    initialState: {
        isLoading: false,
        authUserName: localStorage.getItem('authUserName') || null,
        authUserId: localStorage.getItem('authUserId') || null,
        playerProfile: { playerProfile: {} },
        playerRegister: { registerDetails: {} },
        createGameData: { gameData: null, createGameDataIsLoading: false, authErrors: null },
        gamesData: { gamesList: null, gamesDataIsLoading: false, authErrors: null },
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
        setDataIsLoading: (state, { payload }) => {
            state.isLoading = payload;
        },
        setPlanGamesId: (state, { payload }) => {
            state.planTeamsData = { ...state.planTeamsData, planTeamsGameId: payload };
        },
        setGamesNotClosedError: (state, { payload }) => {
            state.planTeamsData.gameNotClosedError = payload;
        },
        deleteAuthData: (state, action) => {
            state.planTeamsData.planTeamsGameId = null;
            state.authUserName = null;
            state.authUserId = null;
        },
        deletePlanTeamsGameId: (state, action) => {
            state.planTeamsData.planTeamsGameId = null;
        },
        setAuthData: (state, { payload }) => {
            state.authUserName = payload.authUserName;
            state.authUserId = payload.authUserId;
        },
        setUnsortedFinalTeamData: (state, { payload }) => {
            state.planTeamsData.unsortedFinalTeamData = payload;
        },
        setSortedFinalTeamData: (state, { payload }) => {
            state.planTeamsData.sortedFinalTeamData = payload;
        },
        movePlayerToDifferentTeam: (state, { payload }) => {
            const playerId = payload.playerId;
            const newTeam = payload.newTeam.toString();
            state.planTeamsData.unsortedFinalTeamData.map(player => {
                if (player._id === playerId) {
                    player.defaultTeam = newTeam;
                }
                return player;
            });
        },
        toggleDisplayTableForEmail: (state, { payload }) => {
            state.planTeamsData.displayTableForEmail = payload;
        }
    },
    extraReducers: {
        [getGamesData.pending]: state => {
            state.isLoading = true;
            state.gamesData = { ...state.gamesData, authErrors: false };
        },
        [getGamesData.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.authUserName = localStorage.getItem('authUserName');
            state.authUserId = localStorage.getItem('authUserId');

            const gamesData = action.payload;

            const gamesDataWithCurrentUserAvailability = setGamesDataWithCurrentUserAvailability(gamesData, state.authUserId);

            state.gamesData = {
                ...state.gamesData,
                gamesDataIsLoading: false,
                gamesList: [...gamesDataWithCurrentUserAvailability],
                authErrors: false
            };
        },
        [getGamesData.rejected]: (state, action) => {
            state.isLoading = false;
            state.gamesData = { ...state.gamesData, authErrors: [action.error] };
        },

        //---------------------------------------------------------------------
        [getPlanTeamsData.pending]: state => {
            state.isLoading = true;
            state.planTeamsData = { ...state.planTeamsData, authErrors: false };
        },
        [getPlanTeamsData.fulfilled]: (state, { payload }) => {
            state.planTeamsData = {
                ...state.planTeamsData,
                planTeamsDataIsLoading: false,
                unsortedFinalTeamData: payload.finalTeam,
                fixtureDate: formatDate(payload.gameDate),
                fixtureName: payload.gameName
            };
            state.isLoading = false;
        },
        [getPlanTeamsData.rejected]: (state, action) => {
            state.planTeamsData = { ...state.planTeamsData, authErrors: [action.error] };
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        [createGame.pending]: state => {
            state.createGameData = { gameData: null, authErrors: null };
            state.isLoading = true;
        },
        [createGame.fulfilled]: (state, { payload }) => {
            state.createGameData = { gameData: payload, authErrors: null };
            state.isLoading = false;
        },
        [createGame.rejected]: (state, action) => {
            state.createGameData = { gameData: null, authErrors: [action.error] };
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        [setGameRegister.pending]: state => {
            state.gamesData = { ...state.gamesData, authErrors: null };
            state.isLoading = true;
        },
        [setGameRegister.fulfilled]: (state, { payload }) => {
            state.gamesData = { ...state.gamesData, authErrors: null };
            state.gamesData.gamesList = payload;
            state.isLoading = false;
        },
        [setGameRegister.rejected]: (state, action) => {
            state.gamesData = { ...state.gamesData, authErrors: [action.error] };
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        [deleteGame.pending]: state => {
            state.gamesData = { ...state.gamesData, authErrors: null };
            state.isLoading = true;
        },
        [deleteGame.fulfilled]: (state, { payload }) => {
            state.gamesData = { ...state.gamesData, authErrors: null };
            state.gamesData.gamesList = payload;
            state.isLoading = false;
        },
        [deleteGame.rejected]: (state, action) => {
            state.gamesData = { ...state.gamesData, authErrors: [action.error] };
            state.isLoading = false;
        },
        //---------------------------------------------------------------------
        [setPlayerRegister.pending]: state => {
            state.isLoading = true;
            state.playerRegister = { ...state.playerRegister };
        },
        [setPlayerRegister.fulfilled]: (state, { payload }) => {
            const gamesData = payload;
            const gamesDataWithCurrentUserAvailability = setGamesDataWithCurrentUserAvailability(gamesData, state.authUserId);

            state.gamesData = {
                ...state.gamesData,
                gamesDataIsLoading: false,
                gamesList: [...gamesDataWithCurrentUserAvailability],
                authErrors: false
            };
            state.isLoading = false;
        },
        [setPlayerRegister.rejected]: (state, action) => {
            state.isLoading = true;
            state.gamesData = { ...state.gamesData, authErrors: [action.error] };
        },
        //---------------------------------------------------------------------
        [getProfileData.pending]: state => {
            state.playerProfile = { ...state.playerProfile };
        },
        [getProfileData.fulfilled]: (state, { payload }) => {
            state.playerProfile = { playerProfile: payload };
        },
        [getProfileData.rejected]: (state, action) => {
            state.playerProfile = { ...state.playerProfile, authErrors: [action.error] };
        },
        //---------------------------------------------------------------------
        [updateProfileData.pending]: state => {
            state.playerProfile = { ...state.playerProfile };
        },
        [updateProfileData.fulfilled]: (state, { payload }) => {
            state.playerProfile = { playerProfile: payload };
        },
        [updateProfileData.rejected]: (state, action) => {
            state.playerProfile = { ...state.playerProfile, authErrors: [action.error] };
        }
    }
});

export const {
    setPlanGamesId,
    setGamesNotClosedError,
    deletePlanTeamsGameId,
    setFinalTeamDom,
    setUnsortedFinalTeamData,
    setSortedFinalTeamData,
    movePlayerToDifferentTeam,
    toggleDisplayTableForEmail,
    deleteAuthData,
    setAuthData,
    setDataIsLoading
} = dataSlice.actions;

export const dataReducer = dataSlice.reducer;
