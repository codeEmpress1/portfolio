import Styled from 'styled-components'
// import { primaryDark } from '../colors'
import color from '../colors/mixin'
const Button = Styled('Button')`
padding: .5rem 1rem;
border-radius: 1rem;
background-color: ${color}
font-weight: bold;
`

export default Button