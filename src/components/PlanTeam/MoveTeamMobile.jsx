import React, { Fragment } from 'react'
import styled from 'styled-components'
import { FormSelectSmall } from '../Utilities/FormSelectSmall'

const teamOptions = [
    { value: '1', text: '1' },
    { value: '2', text: '2' },
    { value: '3', text: '3' },
    { value: '4', text: '4' },
    { value: '5', text: '5' },
    { value: '6', text: '6' },
    { value: '7', text: '7' },
    { value: '0', text: 'Vets' }
]

export const MoveTeamMobile = () => {
    const onInputChange = e => {}

    return (
        <Fragment>
            <FormSelectSmall
                placeholder="Move Player"
                name={'movePlayer'}
                onChange={onInputChange}
                optionsElements={teamOptions}
                width={'5rem'}
            />
        </Fragment>
    )
}
