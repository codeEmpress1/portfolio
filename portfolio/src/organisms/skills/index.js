import React from 'react'
import { UnorderedList, ListItem, SkillSection } from './style'
import { Header } from '../../atoms/typography'
import { Exp } from '../experience/style'

const skills = ['HTML', 'CSS', '  JavaScript', 'React', 'Python', 'Django', 'Flask']
const Skills = () => (
    <Exp>
    <Header className='pb-2 header'>Skills</Header>
    <SkillSection>
      
      <UnorderedList color = 'secondary'>
      {skills.map((value) => (
        <ListItem color='primary'>
          <Header style={{padding:'0 0 2rem 2rem'}}>
            {value}
          </Header>
          
        </ListItem>        
      ))}
      </UnorderedList>
    </SkillSection>
    </Exp>

 
);


export default Skills