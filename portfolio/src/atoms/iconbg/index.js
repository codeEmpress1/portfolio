import React from 'react'
import Icon from './style'
import { ThemeProvider } from 'styled-components'

const theme = {
    mode: 'light'
}
const StyledIcon = ({width, height, children}) => {
    return (
        <ThemeProvider theme = {theme}>
            <Icon width={width} height={height} color='primary'>{children}</Icon>
        </ThemeProvider>
    )
}
export default StyledIcon