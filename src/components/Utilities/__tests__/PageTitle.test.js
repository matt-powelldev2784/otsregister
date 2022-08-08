import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { PageTitle } from '../PageTitle';

test('should be able render <PageTitle/>', () => {
    render(<PageTitle text={'Page Title Text'} />);
    const PageTitleElement = screen.getByRole('heading');
    expect(PageTitleElement).toHaveTextContent(/Page Title Text/i);
});
