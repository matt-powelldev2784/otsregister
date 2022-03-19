import { createContext, useState } from 'react';

const PlanTeamsContext = createContext();

export const PlanTeamsContextProvider = props => {
    const setTeamsStateHandler = newState => {
        setTeams(prevState => {
            return { ...prevState, ...newState };
        });
    };

    // const setTeamsHandler = (player, defaultTeam) => {
    //     switch (defaultTeam) {
    //         case 0:
    //             setTeams(prevState => {
    //                 return { ...prevState, team0: [...prevState.team0, player] };
    //             });
    //             break;
    //         case 1:
    //             setTeams(prevState => {
    //                 return { ...prevState, team1: [...prevState.team1, player] };
    //             });
    //             break;
    //         case 2:
    //             setTeams(prevState => {
    //                 return { ...prevState, team2: [...prevState.team2, player] };
    //             });
    //             break;
    //         case 3:
    //             setTeams(prevState => {
    //                 return { ...prevState, team3: [...prevState.team3, player] };
    //             });
    //             break;
    //         case 4:
    //             setTeams(prevState => {
    //                 return { ...prevState, team4: [...prevState.team4, player] };
    //             });
    //             break;
    //         case 5:
    //             setTeams(prevState => {
    //                 return { ...prevState, team5: [...prevState.team5, player] };
    //             });
    //             break;
    //         case 6:
    //             setTeams(prevState => {
    //                 return { ...prevState, team6: [...prevState.team6, player] };
    //             });
    //             break;
    //         case 7:
    //             setTeams(prevState => {
    //                 return { ...prevState, team7: [...prevState.team7, player] };
    //             });
    //             break;
    //         case 8:
    //             setTeams(prevState => {
    //                 return { ...prevState, team8: [...prevState.team8, player] };
    //             });
    //             break;
    //         case 9:
    //             setTeams(prevState => {
    //                 return { ...prevState, team9: [...prevState.team9, player] };
    //             });
    //             break;
    //         default:
    //             console.log('Error! defaultTeam outcome not catered for in switch statement @ planTeamsContext.js!');
    //     }
    // };

    // const removePlayersHandler = (playerDetails, oldTeam) => {
    //     switch (oldTeam) {
    //         case '0':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team0];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team0: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '1':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team1];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team1: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '2':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team2];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team2: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '3':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team3];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team3: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '4':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team4];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team4: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '5':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team5];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team5: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '6':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team6];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team6: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '7':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team7];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team7: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '8':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team8];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team8: [...onePlayerRemoved] };
    //             });
    //             break;
    //         case '9':
    //             setTeams(prevState => {
    //                 const players = [...prevState.team9];
    //                 const onePlayerRemoved = players.filter(player => {
    //                     return player._id !== playerDetails._id;
    //                 });
    //                 return { ...prevState, team9: [...onePlayerRemoved] };
    //             });
    //             break;

    //         default:
    //             console.log('Error! removePlayerHandler outcome not catered for in switch statement @ planTeamsContext.js!');
    //     }
    // };

    const [teams, setTeams] = useState({
        setTeamsStateHandler: setTeamsStateHandler,
        fixtureDate: '',
        fixtureName: '',
        finalTeamData: [],
        finalTeamDom: []
    });

    console.log('planTeamsContext', teams);

    return <PlanTeamsContext.Provider value={teams}>{props.children}</PlanTeamsContext.Provider>;
};

export default PlanTeamsContext;
