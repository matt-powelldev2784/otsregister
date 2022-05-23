import { createContext, useState } from 'react';

const PlanTeamsContext = createContext();

export const PlanTeamsContextProvider = props => {
    const setTeamsStateHandler = newState => {
        setTeams(prevState => {
            return { ...prevState, ...newState };
        });
    };

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
