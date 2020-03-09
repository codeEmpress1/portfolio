import React from 'react'
import { Header } from '../../atoms/typography'
import StyledAbout from './style'

const AboutMe = () => {
    return(
            <StyledAbout id='about'>
            <Header className='header'>About Me</Header>
            <Header as='p' spacing='1.5px' size= '1em'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Header>
            </StyledAbout> 
    )
}

export default AboutMe