import React from 'react'
import { Header} from '../../atoms/typography'
import { FlexDiv } from '../../organisms/interest/style'
import { Exp } from '../../organisms/experience/style'
// import Mailchimp from 'react-mailchimp-form'
const Contact = () => {
    return (
        <Exp>
        <Header className='header' id='contact'>Contact Information</Header>
        <FlexDiv>
            <div>
               <p>
               <Header as='span'>Email: </Header>
                <Header as='span'>halof.halima@gmail.com</Header>
               </p>
               <p>
               <Header as='span'>Phone: </Header>
                <Header as='span'>2348132721084</Header>
               </p>
            </div>

            <div>
            <p>
               <Header as='span'>LinkedIn: </Header>
                <Header as='span'>Akinbode Alimot</Header>
               </p>

               <p>
               <Header as='span'>Twitter: </Header>
                <Header as='span'>@coderHal</Header>
               </p>
            </div>
        </FlexDiv>

        {/* <Mailchimp>

        </Mailchimp> */}
        </Exp>
        
    )
}

export default Contact