import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { getPlanTeamsData, setSortedFinalTeamData, saveFinalTeams } from '../../redux/dataState'
import { sortPlayersIntoTeams } from '../sortPlayersIntoTeams'
import { TableForEmail } from './TableForEmail'
import { TableForEmailButton } from '../TableForEmailButton'
import { PageTitle } from '../../Utilities/PageTitle'
import { Errors } from '../../Utilities/Errors'

export const EmailTable = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.authReducer)
    const { planTeamsData } = useSelector(state => state.dataReducer)
    const { planTeamsGameId, unsortedFinalTeamData, authErrors, fixtureDate, fixtureName } = planTeamsData

    useEffect(() => {
        const getTeamsData = async () => {
            try {
                const planTeamsDataRequest = { authToken, gameId: planTeamsGameId }
                dispatch(getPlanTeamsData(planTeamsDataRequest))
            } catch (err) {
                throw Error
            }
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

    return (
        <Container>
            {authErrors && <Errors errors={authErrors} />}
            <PageTitle text={`Plan Teams for ${fixtureName} on ${fixtureDate}`} />
            <TableForEmail />
            <TableForEmailButton
                text={'Back to Plan Teams'}
                navigationPage={'/planteams'}
            />
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
`
