import React, { Fragment } from 'react';
import { Error } from './Error';

export const Errors = props => {
    const errors = props.errors;
    let ErrorsJSX;
    
    if (!errors) {
        ErrorsJSX = <Fragment></Fragment>;
    } else {
      ErrorsJSX = errors.map((error, i) => {
        const errorMessage = error.msg;
        return <Error key={i} errorMessage={errorMessage}></Error>;
    });
    }

    return <Fragment>{ErrorsJSX}</Fragment>;
};
