import { waitFor, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

import React from 'react'
import { FormTitle } from '../FormTitle'

test('check that the component render and shows correct text', () => {
    render(<FormTitle text={'Test Title'} />)
    const headingElement = screen.getByRole('heading')
    expect(headingElement).toBeInTheDocument()
})
