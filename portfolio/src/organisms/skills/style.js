import styled from 'styled-components'
import color from '../../atoms/colors'

export const UnorderedList = styled.ul`
  border-left: 1px solid ${color};
  margin: 0 auto;
  // justify-content: center;
  padding: 0;
` 
  export const ListItem = styled.li`
  list-style: none;
  margin: 0 0 0 0;
  // padding-right:1rem ;
  &:before {
    display: inline-block;
    width: 2em;
    height: 2em;
    margin: 0 0 -1rem -9.5em;
    // border-radius: 50%;  
    content: counter(list);
    color: ${color};
    background: ${color};
    text-shadow: none;
  }
  `

  export const SkillSection = styled.div`
    display: flex;
  `