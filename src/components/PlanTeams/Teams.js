import React, { useContext, useLayoutEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import AuthContext from '../../Context/authContext';
import PlanTeamsContext from '../../Context/planTeamsContext';
import { apiCall as getPlayers } from '../Login/authHelpers';
import { apiCall as updateFinalTeam } from '../Login/authHelpers';
import { formatDate } from '../Utilities/formatDate';
import { useDrop } from 'react-dnd';
import { renderTeams } from './renderTeams';
import { PageTitle } from '../Utilities/PageTitle';
import { Button } from '../Utilities/Button';
import { FinalTeamforEmail } from './FinalTeamforEmail';

export const Teams = () => {
    const { token, planTeamsGameId, isDesktop } = useContext(AuthContext);
    const { finalTeamData, finalTeamDom, fixtureDate, fixtureName } = useContext(PlanTeamsContext);
    const setFixtureTitleContext = useContext(PlanTeamsContext).setTeamsStateHandler;
    const setTeamsContext = useContext(PlanTeamsContext).setTeamsStateHandler;
    const [toggleTable, setToggleTable] = useState(false);

    const toggleTableHandler = () => {
        toggleTable ? setToggleTable(false) : setToggleTable(true);
    };

    useLayoutEffect(() => {
        const planTeams = async () => {
            try {
                const body = { gameId: planTeamsGameId };
                const game = await getPlayers('post', 'api/games/gameavailibility', token, body);
                const { finalTeam, gameDate, gameName } = game;
                setFixtureTitleContext({
                    fixtureDate: formatDate(gameDate),
                    fixtureName: gameName
                });
                setTeamsContext({ finalTeamData: finalTeam });
            } catch (err) {
                console.log(err);
            }
        };
        planTeams();
    }, [token, planTeamsGameId, setFixtureTitleContext, setTeamsContext]);

    const initializeTeamsData = allAvailablePlayers => {
        const splitPlayersIntoTeams = (players, teamNumber) => {
            const team = players.filter(player => {
                return player.defaultTeam === teamNumber;
            });
            return team;
        };

        const splitTeams = [];
        const teamsArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        teamsArray.forEach(team => {
            const teamData = splitPlayersIntoTeams(allAvailablePlayers, team);
            const teamDomElements = renderTeams(teamData);
            splitTeams.push(teamDomElements);
        });

        setTeamsContext({ finalTeamDom: splitTeams });
    };

    useMemo(() => initializeTeamsData(finalTeamData), [finalTeamData]);

    const changePlayersTeam = (item, newTeam) => {
        const selectedPlayerId = item._id;
        const playerIndex = finalTeamData.findIndex(player => {
            return player._id === item._id;
        });

        const selectedPlayer = finalTeamData[playerIndex];
        selectedPlayer.defaultTeam = newTeam.toString();

        const teamWithSelectedPlayerRemoved = finalTeamData.filter(player => {
            return player._id !== selectedPlayerId;
        });
        const updatedTeam = [...teamWithSelectedPlayerRemoved, selectedPlayer];
        setTeamsContext({ finalTeamData: updatedTeam });
    };

    const updateFinalTeamHandler = async () => {
        try {
            const body = { gameId: planTeamsGameId, finalTeam: finalTeamData };
            await updateFinalTeam('post', 'api/games/updatefinalteam', token, body);
        } catch (err) {
            console.log(err);
        }
    };

    const [{ isOver0 }, drop0] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            console.log(item);
            changePlayersTeam(item, 0);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver1 }, drop1] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 1);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver2 }, drop2] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 2);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver3 }, drop3] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 3);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver4 }, drop4] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 4);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver5 }, drop5] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 5);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver6 }, drop6] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 6);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver7 }, drop7] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 7);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver8 }, drop8] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 8);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    const [{ isOver9 }, drop9] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            changePlayersTeam(item, 9);
            updateFinalTeamHandler();
        },
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    });

    return (
        <Container>
            {!toggleTable && <PageTitle text={`Plan Teams for ${fixtureName} on ${fixtureDate}`} />}
            {toggleTable && <PageTitle text={`Final Teams for ${fixtureName} on ${fixtureDate}`} />}
            {!toggleTable && (
                <Flexbox>
                    <List ref={drop0}>
                        <TitleText>Team0</TitleText>
                        {finalTeamDom[0]}
                    </List>
                    <List ref={drop1}>
                        <TitleText>Team1</TitleText>
                        {finalTeamDom[1]}
                    </List>
                    <List ref={drop2}>
                        <TitleText>Team2</TitleText>
                        {finalTeamDom[2]}
                    </List>
                    <List ref={drop3}>
                        <TitleText>Team3</TitleText>
                        {finalTeamDom[3]}
                    </List>
                    <List ref={drop4}>
                        <TitleText>Team4</TitleText>
                        {finalTeamDom[4]}
                    </List>
                    <List ref={drop5}>
                        <TitleText>Team5</TitleText>
                        {finalTeamDom[5]}
                    </List>
                    <List ref={drop6}>
                        <TitleText>Team6</TitleText>
                        {finalTeamDom[6]}
                    </List>
                    <List ref={drop7}>
                        <TitleText>Team7</TitleText>
                        {finalTeamDom[7]}
                    </List>
                    <List ref={drop8}>
                        <TitleText>Team8</TitleText>
                        {finalTeamDom[8]}
                    </List>
                    <List ref={drop9}>
                        <TitleText>Team9</TitleText>
                        {finalTeamDom[9]}
                    </List>
                </Flexbox>
            )}
            {toggleTable && isDesktop && <FinalTeamforEmail />}
            {!toggleTable && isDesktop && <Button text="Display Table for Email" onClick={toggleTableHandler} />}
            {toggleTable && isDesktop && <Button text="Display Teams" onClick={toggleTableHandler} />}
        </Container>
    );
};

const Container = styled.section`
    position: relative;
    top: 0;
    width: 100%;
`;

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
`;

const List = styled.div`
    text-align: center;
    font-size: 1.5rem;
    background: #003a68;
    padding: 0rem;
    margin: 0.5rem;
    width: 17rem;
    border-radius: 0.7rem 0.7rem 0rem 0rem;

    @media (max-device-width: 440px) {
        align-text: center;
        width: 100vw;
        margin: 0 auto 0.5rem auto;
    }
`;

const TitleText = styled.h1`
    border-radius: 0.7rem 0.7rem 0rem 0rem;
    text-align: center;
    padding: 0.5rem;
    font-weight: 700;
    font-size: 2rem;
    color: #003a68;
    background: white;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1.5rem;
        margin: 0;
    }
`;
