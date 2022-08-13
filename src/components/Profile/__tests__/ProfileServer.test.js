import { render, screen } from '@testing-library/react'
import { rest, server } from '../../../testServer'

import React from 'react'
import { apiSucessStore } from './mocks/mockReduxStoreSucess'
import { apiFailStore } from './mocks/mockReduxStoreFail'
import { Provider } from 'react-redux'
import { Profile } from '../Profile'
import { apiCall } from '../../Utilities/apiUtil'

describe('When the api call is sucessful', () => {
    it('should render the input fields from the data', async () => {
        const { profile } = await apiCall('get', 'api/profile/currentProfile', 'dummyAuthToken')

        expect(profile.defaultTeam).toBe('3')
        expect(profile.position).toBe('GK')

        render(
            <Provider store={apiSucessStore}>
                <Profile />
            </Provider>
        )

        const positionInputElement = screen.getByPlaceholderText('Position')
        expect(positionInputElement.value).toBe('GK')

        const usualMatchdayTeamInputElement = screen.getByPlaceholderText('Usual Matchday Team')
        expect(usualMatchdayTeamInputElement.value).toBe('3')
    })
})

describe('When the api call is fails', () => {
    it('should render the error message', async () => {
        const errorResponse = {
            errors: [
                {
                    msg: 'Mock Error Message'
                }
            ]
        }

        server.use(
            rest.get(`${process.env.REACT_APP_API_ADDRESS}/api/profile/currentProfile`, (req, res, ctx) => {
                return res(ctx.json(errorResponse))
            })
        )

        await apiCall('get', 'api/profile/currentProfile', 'dummyAuthToken')

        render(
            <Provider store={apiFailStore}>
                <Profile />
            </Provider>
        )

        const errorMessageElement = screen.getByRole('heading', { name: /error/i })
        expect(errorMessageElement.innerHTML).toBe('Mock Error Message')
    })
})
