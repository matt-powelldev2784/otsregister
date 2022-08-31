import React, { Fragment } from 'react';
import { Button } from '../Utilities/Button';
export var TableForEmailButton = function (_a) {
    var text = _a.text, navigationPage = _a.navigationPage;
    var onClickHandler = function () {
        window.location.href = navigationPage;
    };
    return (React.createElement(Fragment, null,
        React.createElement(Button, { text: text, onClick: onClickHandler })));
};
