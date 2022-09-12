import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanTeamsData, setSortedFinalTeamData, saveFinalTeams } from '../redux/dataState'
import { sortPlayersIntoTeams } from './sortPlayersIntoTeams'
import { TeamList } from './TeamList'

export const Teams = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.authReducer)
    const { planTeamsData } = useSelector(state => state.dataReducer)
    const { planTeamsGameId, unsortedFinalTeamData, sortedFinalTeamData } = planTeamsData

    useEffect(() => {
        const getTeamsData = async () => {
            const planTeamsDataRequest = { authToken, gameId: planTeamsGameId }
            dispatch(getPlanTeamsData(planTeamsDataRequest))
        }
        getTeamsData()
    }, [dispatch, authToken, planTeamsGameId])

    useEffect(() => {
        const sortedPlayers = sortPlayersIntoTeams(unsortedFinalTeamData)
        dispatch(setSortedFinalTeamData(sortedPlayers))

        if (unsortedFinalTeamData.length > 0) {
            const saveFinalTeamsData = { authToken, body: { gameId: planTeamsGameId, finalTeam: unsortedFinalTeamData } }
            dispatch(saveFinalTeams(saveFinalTeamsData))
        }
    }, [unsortedFinalTeamData, dispatch, authToken, planTeamsGameId])

    let Teams
    if (sortedFinalTeamData) {
        Teams = sortedFinalTeamData.map(teamData => {
            const { team, players } = teamData
            return (
                <TeamList
                    key={team}
                    teamList={players}
                    teamName={team}
                />
            )
        })
    }

    return (
        <Container>
            <Flexbox>{Teams}</Flexbox>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    display: block;
    top: 0;
    width: 100%;
`

const Flexbox = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: top;
    margin: 0rem auto 0rem auto;

    @media (max-device-width: 440px) {
        flex-direction: column;
    }
`
