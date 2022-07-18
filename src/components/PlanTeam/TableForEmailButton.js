import React, { Fragment } from 'react';
import { Button } from '../Utilities/Button';

export const TableForEmailButton = ({ text, navigationPage }) => {
    const onClickHandler = () => {
        window.location.href = navigationPage;
    };

    return (
        <Fragment>
            <Button text={text} onClick={onClickHandler} />
        </Fragment>
    );
};
