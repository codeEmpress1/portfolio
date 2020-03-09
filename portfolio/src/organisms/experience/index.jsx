import React from 'react'
import ExperienceDiv, { Exp } from './style'
import { Header } from '../../atoms/typography'
import MyButton from '../../atoms/buttons'
// import { ThemeProvider } from 'styled-components'
// const theme = {
//     mode: 'light'
// }

const Experience = () => {
    return (
        // <ThemeProvider theme={theme}>
            <Exp color='primary'>
            <Header className='pb-1 header'>Experience</Header>
            <ExperienceDiv>
                <div>
                    <Header as='span' font-size='medium' font-weight=''>Web Developer</Header><br/>
                    <Header as='span'>Intern</Header>
                    <hr/>
                </div>
                    
                <div>
                    <Header font-size='medium' className='py-2'>About company</Header>
                    <Header as='p' className='pb-1' font-size='medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat volutpat purus, at efficitur purus auctor non. Etiam sodales, urna ac semper porttitor, elit massa condimentum felis, vitae iaculis est eros in sapien.
                    </Header>
                    <Header as='p' className='pb-1' font-size='medium'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat volutpat purus, at efficitur purus auctor non. Etiam sodales, urna ac semper porttitor, elit massa condimentum felis, vitae iaculis est eros in sapien.
                    </Header>
                    <Header font-size='medium' className='pb-1'>Responsilities</Header>
                    <ul style={{textAlign: "left", fontSize: "1em"}}>
                        <li>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                        <li>
                             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </li>
                    </ul>
                </div>

                <div>
                    <MyButton>Full Time</MyButton><br/>
                    <Header as='span' font-size='small'>February-July, 2019</Header>
                </div>
            </ExperienceDiv>

        </Exp>
        // </ThemeProvider>
       

    )
}

export default Experience