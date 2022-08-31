export var sortPlayersIntoTeams = function (players) {
    var teamsArray = [
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
    ];
    players.forEach(function (player) {
        switch (player.defaultTeam) {
            case '0':
                teamsArray[0].players.push(player);
                break;
            case '1':
                teamsArray[1].players.push(player);
                break;
            case '2':
                teamsArray[2].players.push(player);
                break;
            case '3':
                teamsArray[3].players.push(player);
                break;
            case '4':
                teamsArray[4].players.push(player);
                break;
            case '5':
                teamsArray[5].players.push(player);
                break;
            case '6':
                teamsArray[6].players.push(player);
                break;
            case '7':
                teamsArray[7].players.push(player);
                break;
            case '8':
                teamsArray[8].players.push(player);
                break;
            case '9':
                teamsArray[9].players.push(player);
                break;
            case '10':
                teamsArray[10].players.push(player);
                break;
            default:
                teamsArray[10].players.push(player);
        }
    });
    return teamsArray;
};
