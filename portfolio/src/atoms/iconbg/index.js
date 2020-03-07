import React from 'react'
import Icon from './style'
import { ThemeProvider } from 'styled-components'

const theme = {
    mode: 'light'
}
const StyledIcon = (props) => {
    return (
        <ThemeProvider theme = {theme}>
            <Icon color='primary' {...props}>{props.children}</Icon>
        </ThemeProvider>
    )
}
export default StyledIcon