import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { PageTitle } from '../PageTitle';
test('should be able render <PageTitle/>', function () {
    render(React.createElement(PageTitle, { text: 'Page Title Text' }));
    var PageTitleElement = screen.getByRole('heading');
    expect(PageTitleElement).toHaveTextContent(/Page Title Text/i);
});
