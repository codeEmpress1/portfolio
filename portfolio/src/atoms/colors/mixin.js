// import styled from 'styled-components'
import theme from 'styled-theming'

export const color = theme.variants('mode',
'color', { 
    primary: { light: '#CEAE65', dark: '#C3B7C7' },
    secondary: { light: '#C3B7C7', dark: '#CEAE65' }
})

export default color
