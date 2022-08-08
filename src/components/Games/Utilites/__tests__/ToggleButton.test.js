import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { ToggleButton } from '../ToggleButton';

test('check button is in document and can be clicked', () => {
    const props = { toggleColor: { toggleOn: 'green', toggleOff: 'red' } };

    render(
        <Provider store={store}>
            <ToggleButton {...props} />
        </Provider>
    );

    console.log(props);

    const toogleElement = screen.getByRole('checkbox');
    expect(toogleElement).toBeInTheDocument();
    userEvent.click(toogleElement);
});
