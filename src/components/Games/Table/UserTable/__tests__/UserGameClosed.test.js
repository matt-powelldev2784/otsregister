import { render, screen } from '@testing-library/react'

import React from 'react'
import { Provider } from 'react-redux'
import { UserGameClosed } from '../UserGameClosed'
import { apiSucessStore } from './mocks/mockReduxStoreSucess'

it('should render the player availibility text', async () => {
    render(
        <Provider store={apiSucessStore}>
            <UserGameClosed />
        </Provider>
    )

    const playerAvailibilityElement = screen.getByText(/available/i)
    expect(playerAvailibilityElement).toBeTruthy()

    const userNameElement = screen.getByText(/Matt Powell/i)
    expect(userNameElement).toBeTruthy()
})

// describe('When the api call fails', () => {
//     it('should render 4 rows in the table', async () => {
//         await apiCall('get', 'api/games/recentgames', 'dummyAuthToken')

//         render(
//             <Provider store={apiFailStore}>
//                 <UserGamesTable />
//             </Provider>
//         )

//         const tableRowElements = screen.getAllByRole('row')
//         expect(tableRowElements.length).toBe(2) //table row elements header plus 1 row stating no games scheduled

//         const noGamesScheduledElement = screen.getByText('No Games Scheduled')
//         expect(noGamesScheduledElement).toBeTruthy()
//     })
// })
