import React from 'react'
import Hero from '../organisms/hero'
import Experience from '../organisms/experience'
import Interest from '../organisms/interest'
import Skills from '../organisms/skills'
import RecentWork from '../organisms/portfolio'
import Page from './style'
import AboutMe from '../molecules/about'
import Contact from  '../molecules/contact'
import CustomForm from '../organisms/mail'

const Page1 = () => {
    return (
       <Page color='bg'>
           <Hero/>
           <AboutMe/>
           <Experience/>
           <Skills/>
           <Interest/>
           <RecentWork/>
           <Contact/>
           <CustomForm/>

        </Page>
    )
}

export default Page1