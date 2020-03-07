import { fontSize, fontWeight } from './mixin'
import styled from 'styled-components'
import color from '../colors'

export const Header = styled.h2`
    ${fontSize};
    text-align: center;
    font-family: ${props => props.fontFamily},
    ${fontWeight};
    color: ${color};
    `