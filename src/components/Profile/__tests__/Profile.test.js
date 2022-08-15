import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { Profile } from '../Profile'

test('should render the <Profile/> component', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    )
})

test('check button is in document', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    )
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
})
