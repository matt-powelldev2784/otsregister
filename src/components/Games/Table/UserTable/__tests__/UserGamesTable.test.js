import { render, screen } from '@testing-library/react'
import { rest, server } from '../../../../../testServer'

import React from 'react'
import { Provider } from 'react-redux'
import { UserGamesTable } from '../UserGamesTable'
import { apiSucessStore } from './mocks/mockReduxStoreSucess'
import { apiFailStore } from './mocks/mockReduxStoreFail'
import { apiCall } from '../../../../Utilities/apiUtil'

describe('When the api call is sucessful', () => {
    it('should render 4 rows in the table', async () => {
        await apiCall('get', 'api/games/recentgames', 'dummyAuthToken')

        render(
            <Provider store={apiSucessStore}>
                <UserGamesTable />
            </Provider>
        )

        const tableRowElements = screen.getAllByRole('row')
        expect(tableRowElements.length).toBe(4) //table row elements are 3 records plus header
    })
})

describe('When the api call fails', () => {
    it('should render 4 rows in the table', async () => {
        await apiCall('get', 'api/games/recentgames', 'dummyAuthToken')

        render(
            <Provider store={apiFailStore}>
                <UserGamesTable />
            </Provider>
        )

        const tableRowElements = screen.getAllByRole('row')
        expect(tableRowElements.length).toBe(2) //table row elements header plus 1 row stating no games scheduled

        const noGamesScheduledElement = screen.getByText('No Games Scheduled')
        expect(noGamesScheduledElement).toBeTruthy()
    })
})
