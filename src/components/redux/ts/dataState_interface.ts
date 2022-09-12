import { AuthError } from './interfaces'

export interface DataState {
    isLoading: Boolean | null
    dataErrors: [AuthError] | null
    authUserName: string | null
    authUserId: string | null
    playerProfile: {}
    createGameData: { authErrors: [AuthError] | null }
    gamesData: { gamesList: Game[] | null; authErrors: [AuthError] | null }
    planTeamsData: {
        planTeamsGameId: string | null
        gameNotClosedError: null | { msg: string }
        fixtureDate: string
        fixtureName: string
        unsortedFinalTeamData: [PlayerProfile] | []
        sortedFinalTeamData: [FinalTeam] | []
        planTeamsDataIsLoading: boolean
        displayTableForEmail: boolean
        authErrors: [AuthError] | null
    }
}

export interface CreateGameRequest {
    authToken: string
    gameData: {
        gameDate: String
        gameName: String
    }
}

export interface PlanTeamsDataRequest {
    authToken: string
    gameId: string
}

export interface SaveFinalTeamsData {
    authToken: string
    body: {
        planTeamsGameId: string
        unsortedFinalTeamData: string
    }
}

export interface SetGameRegisterData {
    authToken: string
    body: {
        gameId: string
        gameClosed: string
    }
}

export interface DeleteGameData {
    authToken: string
    gameId: string
}

export interface SetPlayerRegisterData {
    authToken: string
    body: {
        gameId: string
        playerAvailable: Boolean
    }
}

export interface UpdatedProfileData {
    authToken: string
    body: {
        defaultTeam: string
        position: string
    }
}

export interface User {
    _id: string
    name: string
    email: string
}

export interface CreatedGame {
    success: boolean
    status: number | string
    msg: string
    gameDate: string
    gameName: string
}

export interface PlayerProfile {
    _id: string
    defaultTeam: string
    position: string
    date: string
    __v: any
    user: User
}

export interface Game {
    _id: string
    gameDate: string
    gameName: string
    playersAvailable: [PlayerProfile]
    playersUnavailable: []
    finalTeam: [PlayerProfile]
    gameClosed: boolean
    createdAt: string
    currentPlayerAvailable?: boolean
    __v: any
}

export interface FinalTeam {
    team: string | number
    players: [PlayerProfile]
}
