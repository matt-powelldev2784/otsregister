import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import React from 'react'
import { Errors } from '../Errors'

test('should be able view 1 error message', () => {
    render(<Errors errors={[{ message: 'Please include a valid email' }]} />)
    const errorElement = screen.getByText(/Please include a valid email/i)
    expect(errorElement).toBeInTheDocument()
})

test('should be able view more than 1 error message', () => {
    render(<Errors errors={[{ message: 'Please include a valid email' }, { message: 'Invalid Login Credentials' }]} />)
    /*eslint-disable */
    const errorElements = screen.getAllByRole('heading')
    expect(errorElements).toHaveLength(2)
    /*eslint-enable */
})
