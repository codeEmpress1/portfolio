import React from 'react'
import { Header } from '../atoms/typography'
import { Paragraph } from '../atoms/typography'

export default{
    title: 'typography',
}

export const MainHeader = () => <Header>Simple is Better than complex...</Header>

export const About = () => <Header>About Me</Header>

export const Skills = () => <Header>Skills</Header>

export const Contact = () => <Header>Contact Information</Header>

export const Interests = () => <Header>Interests</Header> 



export const AboutText = () =>  <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </Paragraph>


export const Name = () => (
    <div>
        <Paragraph size='1.5rem'>
            ALIMOT AKINBODE
        </Paragraph>
        <Paragraph>
            Software Engineer
        </Paragraph>
    </div>
)