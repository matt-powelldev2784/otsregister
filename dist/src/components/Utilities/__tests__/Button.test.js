import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import React from 'react';
import { Button } from '../Button';
test('should be able to click button', function () {
    render(React.createElement(Button, null));
    var buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
});
