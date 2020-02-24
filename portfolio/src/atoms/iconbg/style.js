import Styled from 'styled-components'
import { color } from '../colors/mixin';

const Icon = Styled.div`
border: none;
border-radius: 50%;
padding: 1rem 1rem 1.5rem 1.5rem;
margin: 2rem;
width: ${props => props.width ? props.width : '5rem'};
height: ${props => props.height ? props.heigth : '5rem'};
background-color: ${color};
display: flex;
// flex-direction: row-reverse;
`

export default Icon