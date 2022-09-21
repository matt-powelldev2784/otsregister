import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGamesData } from '../../../redux/dataState'
import styled from 'styled-components'
import { GamesTableHead } from '../GamesTableHead/GamesTableHead'
import { UserTableBody } from './UserTableBody'

export const UserGamesTable = () => {
    const dispatch = useDispatch()
    const { authToken } = useSelector(state => state.authReducer)

    useEffect(() => {
        if (authToken) {
            dispatch(getGamesData(authToken))
        }
    }, [authToken, dispatch])

    const tableHeadTitles = { cell1: 'Game Date', cell2: 'Game Name', cell3: 'Register Status', cell4: 'Player Availability' }

    return (
        <Section>
            <Table>
                <TableHead>
                    <GamesTableHead {...tableHeadTitles} />
                </TableHead>
                <TableBody>
                    <UserTableBody />
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
