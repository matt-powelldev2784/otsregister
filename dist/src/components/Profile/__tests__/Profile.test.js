import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';
import { Profile } from '../Profile';
test('should render the <Profile/> component', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Profile, null)));
});
test('check button is in document', function () {
    render(React.createElement(Provider, { store: store },
        React.createElement(Profile, null)));
    var button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});
