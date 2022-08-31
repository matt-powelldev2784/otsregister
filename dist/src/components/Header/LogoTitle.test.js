import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { LogoTitle } from './LogoTitle';
var logoElement;
var titleElement;
/*eslint-disable */
beforeEach(function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(LogoTitle, null)));
    logoElement = screen.getByRole('img');
    titleElement = screen.getByRole('heading');
});
/*eslint-enable */
test('should render the logo and titile', function () {
    expect(logoElement).toBeInTheDocument();
    expect(titleElement).toBeInTheDocument();
});
