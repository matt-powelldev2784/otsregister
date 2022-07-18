import React, { Fragment } from 'react';
import { Error } from '../Utilities/Error';

export const Errors = ({ errors }) => {
    let ErrorsJSX;

    if (!errors) {
        ErrorsJSX = <Fragment></Fragment>;
    } else {
        ErrorsJSX = errors.map((error, i) => {
            const errorMessage = error.msg || error.message;
            return <Error key={i} errorMessage={errorMessage}></Error>;
        });
    }

    return <Fragment>{ErrorsJSX}</Fragment>;
};
