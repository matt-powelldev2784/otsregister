import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';

import React from 'react';
import { FormField } from '../FormField';

const FormFieldAttributes = {
    type: 'text',
    placeholder: 'Placeholder-Text',
    label: 'LABEL TEST',
    name: 'Test-Form-Field'
};

test('should be able view 1 error message', () => {
    render(<FormField {...FormFieldAttributes} />);
    const FormFieldElement = screen.getByPlaceholderText('Placeholder-Text');
    expect(FormFieldElement).toBeInTheDocument();
});

test('should be able to type in form field input', () => {
    render(<FormField {...FormFieldAttributes} />);
    const FormFieldElement = screen.getByPlaceholderText('Placeholder-Text');
    userEvent.type(FormFieldElement, 'email@email.com');
    expect(FormFieldElement.value).toBe('email@email.com');
});
