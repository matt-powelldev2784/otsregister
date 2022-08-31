var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { store } from '../../../../redux/store';
import { Provider } from 'react-redux';
import { UserTableRow } from '../UserTableRow';
import { formatDate } from '../../../../Utilities/formatDate';
var tableRowProps = {
    gameId: '62ab37252d13fc6ef83615f6',
    gameDate: formatDate(Date.now()),
    gameName: 'GameName',
    registeredPlayers: 1,
    gameClosed: false,
    currentPlayerAvailable: true
};
var gameDate = tableRowProps.gameDate, gameName = tableRowProps.gameName;
var toggleElement;
var gameDateElement;
var gameNameElement;
var registerStatusElement;
var playersAvailableElement;
/*eslint-disable */
beforeEach(function () {
    render(React.createElement(Provider, { store: store },
        React.createElement("table", null,
            React.createElement("thead", null),
            React.createElement("tbody", null,
                React.createElement(UserTableRow, __assign({}, tableRowProps))))));
    toggleElement = screen.getByRole('checkbox');
    gameDateElement = screen.getByText(gameDate);
    gameNameElement = screen.getByText(gameName);
    registerStatusElement = screen.getByText(/register open/i);
    playersAvailableElement = screen.getByText(/available players/i);
});
/*eslint-enable */
test('should render the <UserTableRow/> component.', function () { });
test('check all table fields render', function () {
    expect(gameDateElement).toBeInTheDocument();
    expect(gameNameElement).toBeInTheDocument();
    expect(registerStatusElement).toBeInTheDocument();
    expect(playersAvailableElement).toBeInTheDocument();
});
test('should be able to click on toggle', function () {
    userEvent.click(toggleElement);
});
