import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { apiCall } from '../Utilities/apiUtil'
import { formatDate } from '../Utilities/formatDate'
import {
    CreateGameRequest,
    DataState,
    PlanTeamsDataRequest,
    SaveFinalTeamsData,
    SetGameRegisterData,
    DeleteGameData,
    SetPlayerRegisterData,
    UpdatedProfileData,
    Game,
    CreatedGame,
    PlayerProfile,
    FinalTeam
} from './ts/dataState_interface'
import { AuthError } from './ts/interfaces'

const setGamesDataWithCurrentUserAvailability = (gamesData: Game[], authUserId: string | null): Game[] => {
    const updatedGames = gamesData.map(game => {
        let currentPlayerAvailable: boolean = false

        game.playersAvailable.forEach(player => {
            if (player.user._id === authUserId) {
                currentPlayerAvailable = true
            }
        })

        const updatedGame = { ...game, currentPlayerAvailable: currentPlayerAvailable }
        return updatedGame
    })

    return updatedGames
}

export const getGamesData = createAsyncThunk('dataState/getGamesData', async (authToken: string): Promise<Game[]> => {
    try {
        const gamesData = await apiCall({ apiCallType: 'GET', route: 'api/games/recentgames', token: authToken })
        const { recentGames } = gamesData
        return recentGames
    } catch (err) {
        console.log('err.msg', err)
        const errorMessage = err.errors[0].msg
        throw Error(errorMessage)
    }
})

export const createGame = createAsyncThunk('dataState/createGame', async (createGameData: CreateGameRequest): Promise<CreatedGame> => {
    try {
        const { authToken, gameData } = createGameData
        const createdGame = await apiCall({ apiCallType: 'POST', route: 'api/games/creategame', token: authToken, body: gameData })
        window.location.href = '/dashboard'
        return createdGame
    } catch (err) {
        console.log('err.msg', err)
        const errorMessage = err.errors[0].msg
        throw Error(errorMessage)
    }
})

export const getPlanTeamsData = createAsyncThunk(
    'dataState/getPlanTeamData',
    async (planTeamsDataRequest: PlanTeamsDataRequest): Promise<Game> => {
        const { authToken, gameId } = planTeamsDataRequest
        try {
            const game = await apiCall({
                apiCallType: 'GET',
                route: `api/games/planTeamData/${gameId}`,
                token: authToken,
                body: { gameId }
            })
            const { gameDetails } = game
            return gameDetails
        } catch (err) {
            console.log('err.msg', err)
            const errorMessage = err.errors[0].msg
            throw Error(errorMessage)
        }
    }
)

export const saveFinalTeams = createAsyncThunk(
    'dataState/saveFinalTeams',
    async (saveFinalTeamsData: SaveFinalTeamsData): Promise<void> => {
        try {
            const { authToken, body } = saveFinalTeamsData
            await apiCall({ apiCallType: 'POST', route: 'api/games/updatefinalteam', token: authToken, body })
        } catch (err) {
            console.log('err.msg', err)
            const errorMessage = err.errors[0].msg
            throw Error(errorMessage)
        }
    }
)

export const setGameRegister = createAsyncThunk(
    'dataState/setGameRegister',
    async (setGameRegisterData: SetGameRegisterData): Promise<Game[]> => {
        try {
            const { authToken, body } = setGameRegisterData
            await apiCall({ apiCallType: 'POST', route: 'api/games/gameregister', token: authToken, body })
            const gamesData = await apiCall({ apiCallType: 'GET', route: 'api/games/recentgames', token: authToken })
            const { recentGames } = gamesData
            return recentGames
        } catch (err) {
            console.log('err.msg', err)
            const errorMessage = err.errors[0].msg
            throw Error(errorMessage)
        }
    }
)

export const deleteGame = createAsyncThunk('dataState/deleteGame', async (deleteGameData: DeleteGameData): Promise<Game[]> => {
    try {
        const { authToken, gameId } = deleteGameData
        await apiCall({ apiCallType: 'DELETE', route: `api/games/deletegame/${gameId}`, token: authToken })
        const gamesData = await apiCall({ apiCallType: 'GET', route: 'api/games/recentgames', token: authToken })
        const { recentGames } = gamesData
        return recentGames
    } catch (err) {
        console.log('err.msg', err)
        const errorMessage = err.errors[0].msg
        throw Error(errorMessage)
    }
})

export const setPlayerRegister = createAsyncThunk(
    'dataState/setPlayerRegister',
    async (setPlayerRegisterData: SetPlayerRegisterData): Promise<Game[]> => {
        try {
            const { authToken, body } = setPlayerRegisterData
            await apiCall({ apiCallType: 'POST', route: 'api/player/playerRegister', token: authToken, body })
            const gamesData = await apiCall({ apiCallType: 'GET', route: 'api/games/recentgames', token: authToken })
            const { recentGames } = gamesData
            return recentGames
        } catch (err) {
            console.log('err.msg', err)
            const errorMessage = err.errors[0].msg
            throw Error(errorMessage)
        }
    }
)

export const getProfileData = createAsyncThunk('dataState/getProfileData', async (authToken: string): Promise<PlayerProfile> => {
    try {
        const { profile } = await apiCall({ apiCallType: 'GET', route: 'api/profile/currentProfile', token: authToken })
        return profile
    } catch (err) {
        console.log('err.msg', err)
        const errorMessage = err.errors[0].msg
        throw Error(errorMessage)
    }
})

export const updateProfileData = createAsyncThunk(
    'dataState/updateProfileData',
    async (updatedProfileData: UpdatedProfileData): Promise<PlayerProfile> => {
        try {
            const { authToken, body } = updatedProfileData
            const { updatedProfile } = await apiCall({ apiCallType: 'POST', route: 'api/profile/updateProfile', token: authToken, body })
            window.location.href = '/dashboard'
            return updatedProfile
        } catch (err) {
            console.log('err.msg', err)
            const errorMessage = err.errors[0].msg
            throw Error(errorMessage)
        }
    }
)

const initialState: DataState = {
    isLoading: false,
    dataErrors: null,
    authUserName: localStorage.getItem('authUserName') || null,
    authUserId: localStorage.getItem('authUserId') || null,
    playerProfile: {
        _id: '',
        defaultTeam: '',
        position: '',
        date: '',
        __v: '',
        user: {
            _id: '',
            name: '',
            email: ''
        }
    },
    createGameData: { authErrors: null },
    gamesData: { gamesList: null, authErrors: null },
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
}

export const dataSlice = createSlice({
    name: 'dataState',
    initialState,
    reducers: {
        setPlanGamesId: (state, { payload }: PayloadAction<string>) => {
            state.planTeamsData = { ...state.planTeamsData, planTeamsGameId: payload }
        },
        setGamesNotClosedError: (state, { payload }: PayloadAction<AuthError[]>) => {
            state.planTeamsData.gameNotClosedError = payload
        },
        deleteAuthData: state => {
            state.planTeamsData.planTeamsGameId = null
            state.authUserName = null
            state.authUserId = null
        },
        deletePlanTeamsGameId: state => {
            state.planTeamsData.planTeamsGameId = null
        },
        setSortedFinalTeamData: (state, { payload }: PayloadAction<[FinalTeam]>) => {
            state.planTeamsData.sortedFinalTeamData = payload
        },
        movePlayerToDifferentTeam: (state, { payload }: PayloadAction<{ playerId: string; newTeam: string | number }>) => {
            const { playerId } = payload
            const newTeam = payload.newTeam.toString()
            state.planTeamsData.unsortedFinalTeamData.map((player: PlayerProfile): PlayerProfile => {
                if (player.user._id === playerId) {
                    player.defaultTeam = newTeam
                }
                return player
            })
        },
        setPlayerProfile: (state, { payload }: PayloadAction<PlayerProfile>) => {
            state.playerProfile = { ...state.playerProfile, ...payload }
        }
    },
    extraReducers: builder => {
        builder
            //---------------------------------------------------------------------
            .addCase(getGamesData.pending, state => {
                state.isLoading = true
                state.gamesData = { ...state.gamesData }
                state.dataErrors = null
            })
            .addCase(getGamesData.fulfilled, (state, action) => {
                state.isLoading = false
                state.dataErrors = null
                state.authUserName = localStorage.getItem('authUserName')
                state.authUserId = localStorage.getItem('authUserId')

                const gamesData = action.payload
                const updatedGamesList = setGamesDataWithCurrentUserAvailability(gamesData, state.authUserId)

                state.gamesData = {
                    ...state.gamesData,
                    gamesList: [...updatedGamesList]
                }
            })
            .addCase(getGamesData.rejected, (state, { error }: any) => {
                state.isLoading = false
                state.gamesData = { ...state.gamesData }
                state.dataErrors = [error]
            })
            //---------------------------------------------------------------------
            .addCase(getPlanTeamsData.pending, state => {
                state.isLoading = true
                state.planTeamsData = { ...state.planTeamsData, authErrors: null }
            })
            .addCase(getPlanTeamsData.fulfilled, (state, { payload }) => {
                state.planTeamsData = {
                    ...state.planTeamsData,
                    planTeamsDataIsLoading: false,
                    unsortedFinalTeamData: payload.finalTeam,
                    fixtureDate: formatDate(payload.gameDate),
                    fixtureName: payload.gameName
                }
                state.isLoading = false
            })
            .addCase(getPlanTeamsData.rejected, (state, { error }: any) => {
                state.planTeamsData = { ...state.planTeamsData, authErrors: [error] }
                state.isLoading = false
            })
            //---------------------------------------------------------------------
            .addCase(createGame.pending, state => {
                state.createGameData = { authErrors: null }
                state.isLoading = true
            })
            .addCase(createGame.fulfilled, (state, { payload }) => {
                state.createGameData = { authErrors: null }
                state.isLoading = false
            })
            .addCase(createGame.rejected, (state, { error }: any) => {
                state.createGameData = { authErrors: [error] }
                state.isLoading = false
            })
            //---------------------------------------------------------------------

            .addCase(setGameRegister.pending, state => {
                state.gamesData = { ...state.gamesData, authErrors: null }
                state.isLoading = true
            })
            .addCase(setGameRegister.fulfilled, (state, { payload }) => {
                state.gamesData = { ...state.gamesData, authErrors: null }
                state.gamesData.gamesList = payload
                state.isLoading = false
            })
            .addCase(setGameRegister.rejected, (state, { error }: any) => {
                state.gamesData = { ...state.gamesData, authErrors: [error] }
                state.isLoading = false
            })
            //---------------------------------------------------------------------

            .addCase(deleteGame.pending, state => {
                state.gamesData = { ...state.gamesData, authErrors: null }
                state.isLoading = true
            })
            .addCase(deleteGame.fulfilled, (state, { payload }) => {
                state.gamesData = { ...state.gamesData, authErrors: null }
                state.gamesData.gamesList = payload
                state.isLoading = false
            })
            .addCase(deleteGame.rejected, (state, { error }: any) => {
                state.gamesData = { ...state.gamesData, authErrors: [error] }
                state.isLoading = false
            })

            //---------------------------------------------------------------------

            .addCase(setPlayerRegister.pending, state => {
                state.isLoading = true
                state.dataErrors = null
            })
            .addCase(setPlayerRegister.fulfilled, (state, { payload }) => {
                const gamesData = payload
                const updatedGamesList = setGamesDataWithCurrentUserAvailability(gamesData, state.authUserId)

                state.gamesData = {
                    ...state.gamesData,
                    gamesList: [...updatedGamesList]
                }
                state.isLoading = false
                state.dataErrors = null
            })
            .addCase(setPlayerRegister.rejected, (state, { error }: any) => {
                state.isLoading = false
                state.gamesData = { ...state.gamesData }
                state.dataErrors = [error]
            })

            //---------------------------------------------------------------------

            .addCase(getProfileData.pending, state => {
                state.playerProfile = { ...state.playerProfile }
                state.dataErrors = null
            })
            .addCase(getProfileData.fulfilled, (state, { payload }) => {
                state.playerProfile = payload
            })
            .addCase(getProfileData.rejected, (state, { error }: any) => {
                state.playerProfile = { ...state.playerProfile }
                state.dataErrors = [error]
            })
            //---------------------------------------------------------------------
            .addCase(updateProfileData.pending, state => {
                state.isLoading = true
                state.playerProfile = { ...state.playerProfile }
                state.dataErrors = null
            })
            .addCase(updateProfileData.fulfilled, (state, { payload }) => {
                state.isLoading = false
                state.playerProfile = payload
            })
            .addCase(updateProfileData.rejected, (state, { error }: any) => {
                state.isLoading = false
                state.playerProfile = { ...state.playerProfile }
                state.dataErrors = [error]
            })
    }
})

export const {
    setPlanGamesId,
    setGamesNotClosedError,
    deletePlanTeamsGameId,
    setSortedFinalTeamData,
    movePlayerToDifferentTeam,
    deleteAuthData,
    setPlayerProfile
} = dataSlice.actions

export const dataReducer = dataSlice.reducer
