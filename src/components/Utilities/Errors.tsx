import React, { FC, Fragment } from 'react'
import { Error } from './Error'
import { AuthError } from '../redux/ts/interfaces'

interface errorsProps {
    errors: AuthError[]
}

export const Errors: FC<errorsProps> = ({ errors }) => {
    let ErrorsJSX: JSX.Element[] = [<Fragment></Fragment>]

    if (errors) {
        ErrorsJSX = errors.map((error, i) => {
            const errorMessage = error.message
            return (
                <Error
                    key={i}
                    errorMessage={errorMessage}
                ></Error>
            )
        })
    }

    return <Fragment>{ErrorsJSX}</Fragment>
}
