import { waitFor, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { Profile } from '../Profile/Profile';

test('should render the <Profile/> component', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );
});

test('check button is in document', () => {
    render(
        <Provider store={store}>
            <Profile />
        </Provider>
    );
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
});

// test('check api data is displayed', async () => {
//     render(
//         <Provider store={store}>
//             <Profile />
//         </Provider>
//     );

//     const select = screen.getByTestId('testid_position');
//     console.log('select[1].value.length', select[1].value.length);
//     expect(select[1].value.length).toBe(2);

//     console.log('select[0].value.length', select[0].value.length);

//     // Wait for the element to be removed asynchronously
//     await waitFor(() => {});
// });
