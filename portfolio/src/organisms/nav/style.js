import styled from 'styled-components'
import { fontSize, fontWeight } from '../../atoms/typography/mixin'
import color from '../../atoms/colors'
const Nav = styled.nav`
    display: flex;
    background-color: ${color};
    position: fixed;
    top: 4rem;
    right: 0.4em;
    // z-index:-1;
    
`
export const Navlist = styled.ul`
    list-style-type: none;
    display:inline-flex;
    font-size: ${fontSize};
    font-weight: ${fontWeight};

        li {
            padding: .1em 2em;
        }
`
export const Arrowend = styled.button`
	width: 0;
	height: 0;
	border-top: 25px solid transparent;
	border-right: 30px solid #FFF;
    border-bottom: 25px solid transparent;
    background-color: red;
`
export default Nav