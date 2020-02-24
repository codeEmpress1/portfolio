import { fontSize, fontWeight, fontFamily, } from './mixin'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Akronim|Pacifico&display=swap');
`
const Header = styled.h2`
    ${fontSize};
    text-align: center;
    font-family: ${fontFamily},
    ${fontWeight};
    padding: ${props => props.padding ? props.padding : 0};
    margin: ${props => props.margin ? props.margin : 0};
    `

export const Paragraph = styled.p`
    ${Header};
    line-spacing: ${letterSpacing}
`


export const Span = styled.span`
    ${StyledParagraph}
    text-align: left;
`
export default Header