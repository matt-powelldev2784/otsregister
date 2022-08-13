import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import React from 'react'
import { Provider } from 'react-redux'
import { UserGameOpen } from '../UserGameOpen'
import { apiSucessStore } from './mocks/mockReduxStoreSucess'

describe('player availibility text and toggle should be present', () => {
    it('should render the player availibility text', async () => {
        render(
            <Provider store={apiSucessStore}>
                <UserGameOpen />
            </Provider>
        )

        const playerAvailibilityElement = screen.getByText(/available/i)
        expect(playerAvailibilityElement).toBeTruthy()

        const userNameElement = screen.getByText(/Matt Powell/i)
        expect(userNameElement).toBeTruthy()
    })

    it('should render the toggle button', async () => {
        render(
            <Provider store={apiSucessStore}>
                <UserGameOpen />
            </Provider>
        )

        const toggleInputElement = screen.getByRole('checkbox')
        expect(toggleInputElement.type).toBe('checkbox')
    })

    test('toogle should be able to be checked and unchecked', async () => {
        render(
            <Provider store={apiSucessStore}>
                <UserGameOpen />
            </Provider>
        )

        const toggleInputElement = screen.getByRole('checkbox')
        expect(toggleInputElement.type).toBe('checkbox')
        expect(toggleInputElement.checked).toBe(false)
        userEvent.click(toggleInputElement)
        expect(toggleInputElement.checked).toBe(true)
    })
})
