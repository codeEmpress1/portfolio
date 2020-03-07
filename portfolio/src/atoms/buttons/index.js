import React from 'react'
import StyledButton from './style'
// import { ThemeProvider } from 'styled-components'

// const theme = {
//     mode: 'light'
// }

const Button = ({children}) => {
    return (
        // <ThemeProvider theme={theme}>
            <StyledButton color = 'primary'>{children}</StyledButton>
        // </ThemeProvider>
    )
}

export default Button