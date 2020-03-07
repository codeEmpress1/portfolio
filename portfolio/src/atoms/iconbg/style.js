import Styled from 'styled-components'
import { color } from '../colors';

const Icon = Styled.div`
border: none;
border-radius: 50%;
padding: 1rem 1rem 1.5rem 1.5rem;
margin: 2rem;
width: ${props => props.width ? props.width : '5rem'};
height: ${props => props.height ? props.heigth : '5rem'};
background-color: ${color};
display: flex;
// box-shadow: 0.5px 1px ;
`

export default Icon