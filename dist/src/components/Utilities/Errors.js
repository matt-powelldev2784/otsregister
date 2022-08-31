import React, { Fragment } from 'react';
import { Error } from '../Utilities/Error';
export var Errors = function (_a) {
    var errors = _a.errors;
    var ErrorsJSX;
    if (!errors) {
        ErrorsJSX = React.createElement(Fragment, null);
    }
    else {
        ErrorsJSX = errors.map(function (error, i) {
            var errorMessage = error.msg || error.message;
            return React.createElement(Error, { key: i, errorMessage: errorMessage });
        });
    }
    return React.createElement(Fragment, null, ErrorsJSX);
};
