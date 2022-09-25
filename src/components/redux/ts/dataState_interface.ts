import { AuthError } from './interfaces'
import { PlayerProfile } from './interfaces'

export interface DataState {
    isLoading: boolean
    dataErrors: [AuthError] | null
    authUserName: string | null
    authUserId: string | null
    playerProfile: PlayerProfile
    createGameData: { authErrors: [AuthError] | null }
    gamesData: { gamesList: Game[] | null; authErrors: [AuthError] | null }
    planTeamsData: {
        planTeamsGameId: string | ''
        gameNotClosedError: null | AuthError[]
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
        gameId: string
        unsortedFinalTeamData: [PlayerProfile] | []
    }
}

export interface SetGameRegisterData {
    authToken: string
    body: {
        gameId: string
        gameClosed: boolean
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

export interface CreatedGame {
    success: boolean
    status: number | string
    msg: string
    gameDate: string
    gameName: string
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
