import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesData } from '../../../redux/dataState'
import styled from 'styled-components'
import { AdminTableBody } from './AdminTableBody'
import { GamesTableHead } from '../GamesTableHead'
import { Errors } from '../../../Utilities/Errors'

export const AdminGamesTable = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.authReducer)
    const { gameNotClosedError } = useSelector(state => state.dataReducer.planTeamsData)

    useLayoutEffect(() => {
        if (authToken) {
            dispatch(getGamesData(authToken))
        }
    }, [authToken, dispatch])

    const tableHeadTitles = { cell1: 'Game Date', cell2: 'Game Name', cell3: 'Available Players', cell4: 'Register Status' }

    return (
        <Section>
            {gameNotClosedError && <Errors errors={gameNotClosedError} />}
            <Table>
                <TableHead>
                    <GamesTableHead {...tableHeadTitles} />
                </TableHead>
                <TableBody>
                    <AdminTableBody />
                </TableBody>
            </Table>
        </Section>
    )
}

const Section = styled.section`
    width: 100vw;
    margin: 0 auto 0 auto;
`

const Table = styled.table`
    margin: 1rem auto 1rem auto;
    width: 90%;
    border-spacing: 0;
    border-bottom: 5px solid #011826;
`

const TableHead = styled.thead``

const TableBody = styled.tbody``
