import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { movePlayerToDifferentTeam } from '../redux/dataState'
import { useDrop } from 'react-dnd'
import { PlayerItem } from './PlayerItem'

export const TeamList = ({ teamList, teamName }) => {
    const dispatch = useDispatch()

    const [, teamDropTarget] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            const playerId = item.id
            const newTeam = monitor.targetId.substring(1)
            dispatch(movePlayerToDifferentTeam({ playerId, newTeam }))
        },
        collect: (monitor, props) => ({
            isOver: !!monitor.isOver(),
            droppedOnTarget: !!monitor.getDropResult()
        })
    })

    let PlayersList
    if (teamList && teamList.length > 0) {
        PlayersList = teamList.map(player => {
            const { position, defaultTeam } = player
            const _id = player.user._id
            const name = player.user.name
            return (
                <PlayerItem
                    key={_id}
                    id={_id}
                    position={position}
                    name={name}
                    defaultTeam={defaultTeam}
                />
            )
        })
    }

    return (
        <List ref={teamDropTarget}>
            <TeamContainer>
                <TitleText>{teamName}</TitleText>
                {PlayersList}
            </TeamContainer>
        </List>
    )
}

const List = styled.div`
    text-align: center;
    font-size: 1.2rem;
    background: #003a68;
    padding: 0rem;
    margin: 0.5rem;
    width: 20rem;
    border-radius: 0.7rem 0.7rem 0rem 0rem;

    @media (max-device-width: 440px) {
        text-align: center;
        font-size: 1.2rem;
        background: #003a68;
        padding: 0rem;
        margin: 0.5rem;
        width: 100%;
        border-radius: 0.7rem 0.7rem 0rem 0rem;
    }
`

const TitleText = styled.h1`
    border-radius: 0.7rem 0.7rem 0rem 0rem;
    text-align: center;
    padding: 0.2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #003a68;
    background: white;

    @media (max-device-width: 440px) {
        border-radius: 0rem;
        font-weight: 700;
        font-size: 1.5rem;
        margin: 0;
    }
`

const TeamContainer = styled.div``
