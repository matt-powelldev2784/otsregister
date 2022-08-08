import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../../../redux/store';
import { Provider } from 'react-redux';
import { UserGameOpen } from '../UserGameOpen';

test('should render the <UserGameOpen/> component', () => {
    render(
        <Provider store={store}>
            <UserGameOpen />
        </Provider>
    );
});
