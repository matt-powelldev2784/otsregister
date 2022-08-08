import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { TableButton } from '../TableButton';

test('check button is in document and can be clicked', () => {
    render(<TableButton />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    userEvent.click(button);
});
