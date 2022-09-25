import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { LogoTitle } from '../LogoTitle'

let logoElement
let titleElement

/*eslint-disable */
beforeEach(() => {
    render(
        <Provider store={store}>
            <LogoTitle />
        </Provider>
    )
    logoElement = screen.getByRole('img')
    titleElement = screen.getByRole('heading')
})
/*eslint-enable */

test('should render the logo and titile', () => {
    expect(logoElement).toBeInTheDocument()
    expect(titleElement).toBeInTheDocument()
})
