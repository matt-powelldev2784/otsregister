import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import React from 'react'
import { Button } from '../Button'

test('should be able to click button', () => {
    render(<Button />)
    const buttonElement = screen.getByRole('button')
    userEvent.click(buttonElement)
})
