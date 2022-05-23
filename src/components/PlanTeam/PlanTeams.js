import React from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Teams } from './Teams';
import { TableForEmailButton } from './TableForEmailButton';
import { PageTitle } from '../Utilities/PageTitle';
import { Errors } from '../Login/Errors';

export const PlanTeams = props => {
    const { planTeamsData } = useSelector(state => state.dataReducer);
    const { authErrors, fixtureDate, fixtureName } = planTeamsData;

    return (
        <Container>
            <DndProvider backend={HTML5Backend}>
                {authErrors && <Errors errors={authErrors} />}
                <PageTitle text={`Plan Teams for ${fixtureName} on ${fixtureDate}`} />
                <Teams></Teams>
                <TableForEmailButton text={'Display Table for Email'} navigationPage={'/emailtable'} />
            </DndProvider>
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
    height: 100vh;
`;
