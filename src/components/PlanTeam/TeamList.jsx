import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { movePlayerToDifferentTeam } from '../redux/dataState'
import { useDrop } from 'react-dnd'
import { PlayerItem } from './PlayerItem'
import { BlankPlayerItem } from './BlankPlayerItem'

export const TeamList = ({ teamList, teamName }) => {
    const dispatch = useDispatch()

    const teamListWithSortKey = [...teamList]
    teamListWithSortKey.sort((a, b) => {
        return a.positionSortOrder - b.positionSortOrder
    })

    const [{ isOver }, teamDropTarget] = useDrop({
        accept: 'player',
        drop: (item, monitor) => {
            const playerId = item.id
            const newTeam = monitor.targetId.substring(1)
            dispatch(movePlayerToDifferentTeam({ playerId, newTeam }))
        },
        collect: (monitor, props) => ({
            isOver: !!monitor.isOver()
        })
    })

    const PlayersList = teamListWithSortKey?.map(player => {
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

    return (
        <List
            ref={teamDropTarget}
            bgColor={isOver ? '#7F9CB3' : false}>
            <TeamContainer>
                <TitleText bgColor={isOver ? '#E5EBEF' : false}>{teamName}</TitleText>
                {PlayersList.length === 0 ? <BlankPlayerItem /> : PlayersList}
            </TeamContainer>
        </List>
    )
}

const List = styled.div`
    text-align: center;
    font-size: 1.2rem;
    background: ${({ bgColor }) => bgColor || '#003a68'};
    padding: 0rem;
    margin: 0.5rem;
    width: 20rem;
    border-radius: 0.7rem 0.7rem 0rem 0rem;

    @media (max-device-width: 440px) {
        padding: 0rem;
        margin: 1rem;
        width: 100%;
    }
`

const TitleText = styled.h1`
    border-radius: 0.7rem 0.7rem 0rem 0rem;
    text-align: center;
    padding: 0.2rem;
    font-weight: 700;
    font-size: 1.5rem;
    color: #003a68;
    background: ${({ bgColor }) => bgColor || 'white'};
`

const TeamContainer = styled.div``
