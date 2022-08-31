import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { FormTitle } from '../FormTitle';
test('check that the component render and shows correct text', function () {
    render(React.createElement(FormTitle, { text: 'Test Title' }));
    var headingElement = screen.getByRole('heading');
    expect(headingElement).toBeInTheDocument();
});
