import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'
import { Teams } from './Teams'
import { TableForEmailButton } from './TableForEmailButton'
import { PageTitle } from '../Utilities/PageTitle'
import { Errors } from '../Utilities/Errors'

export const PlanTeams = props => {
    const { isDesktop } = useSelector(state => state.globalReducer)
    const { planTeamsData } = useSelector(state => state.dataReducer)
    const { authErrors, fixtureDate, fixtureName } = planTeamsData

    return (
        <Container>
            <DndProvider backend={isDesktop ? HTML5Backend : TouchBackend}>
                {authErrors && <Errors errors={authErrors} />}
                <PageTitle text={`Final Teams for ${fixtureName} on ${fixtureDate}`} />
                <Teams></Teams>
                <TableForEmailButton
                    text={'Display Table for Email'}
                    navigationPage={'/emailtable'}
                />
            </DndProvider>
        </Container>
    )
}

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
`
