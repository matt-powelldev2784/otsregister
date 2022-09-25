import React, { FC, Fragment } from 'react'
import styled from 'styled-components'
import backgroundImage from '../../img/soccer_bg_color_80.jpg'

export const Background: FC = () => {
    return (
        <Fragment>
            <BackgroudImage />
        </Fragment>
    )
}

const BackgroudImage = styled.img`
    position: relative;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0 auto 0 auto;
`

BackgroudImage.defaultProps = {
    src: backgroundImage
}
