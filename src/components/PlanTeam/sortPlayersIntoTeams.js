export const sortPlayersIntoTeams = players => {
    const teamsArray = [
        { team: 'Pool', players: [] },
        { team: 1, players: [] },
        { team: 2, players: [] },
        { team: 3, players: [] },
        { team: 4, players: [] },
        { team: 5, players: [] },
        { team: 6, players: [] },
        { team: 7, players: [] },
        { team: 8, players: [] },
        { team: 9, players: [] },
        { team: 'Bin', players: [] }
    ]

    const getPositionSortKey = player => {
        const positionSortOrderArray = ['LB1', 'CB2', 'RB3', 'LM4', 'RM5', 'CM6', 'RM7', 'CF8', 'XX9']
        const { position } = player
        const positionSortOrder = positionSortOrderArray.findIndex(e => e.includes(position)) + 1
        return positionSortOrder
    }

    players.forEach(player => {
        const positionSortOrder = getPositionSortKey(player)
        const modifiedPlayer = { ...player }
        modifiedPlayer.positionSortOrder = positionSortOrder

        switch (player.defaultTeam) {
            case '0':
                teamsArray[0].players.push(modifiedPlayer)
                break
            case '1':
                teamsArray[1].players.push(modifiedPlayer)
                break
            case '2':
                teamsArray[2].players.push(modifiedPlayer)
                break
            case '3':
                teamsArray[3].players.push(modifiedPlayer)
                break
            case '4':
                teamsArray[4].players.push(modifiedPlayer)
                break
            case '5':
                teamsArray[5].players.push(modifiedPlayer)
                break
            case '6':
                teamsArray[6].players.push(modifiedPlayer)
                break
            case '7':
                teamsArray[7].players.push(modifiedPlayer)
                break
            case '8':
                teamsArray[8].players.push(modifiedPlayer)
                break
            case '9':
                teamsArray[9].players.push(modifiedPlayer)
                break
            case '10':
                teamsArray[10].players.push(modifiedPlayer)
                break
            default:
                teamsArray[10].players.push(modifiedPlayer)
        }
    })

    return teamsArray
}
