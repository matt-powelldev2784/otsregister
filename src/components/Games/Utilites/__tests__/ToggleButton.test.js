import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import React from 'react'
import { store } from '../../../redux/store'
import { Provider } from 'react-redux'
import { ToggleButton } from '../ToggleButton'

test('check button is in document and can be clicked', () => {
    const props = { toggleColor: { toggleOn: 'green', toggleOff: 'red' } }

    render(
        <Provider store={store}>
            <ToggleButton {...props} />
        </Provider>
    )

    const toggleInputElement = screen.getByRole('checkbox')
    expect(toggleInputElement).toBeInTheDocument()
    expect(toggleInputElement.type).toBe('checkbox')

    expect(toggleInputElement.checked).toBe(false)
    userEvent.click(toggleInputElement)
    expect(toggleInputElement.checked).toBe(true)
})
