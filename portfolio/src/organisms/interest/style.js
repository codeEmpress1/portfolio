import styled from 'styled-components'

export const Img = styled.img`
 width: 80%;
` 

export const FlexDiv = styled.div`
    display: flex;
    flex-wrap: no-wrap
    // grid-template-column: 1fr 1fr 1fr 1fr;
    text-align: center;
    margin: 0 5rem;
    justify-content: space-around;

    @media screen and (max-width: 560px) {
        // grid-template-columns: 1fr 1fr 1fr 1fr;
        flex-direction: column;
        // justify-content: middle;
        align-items: center;
        // flex-wrap: wrap;
    }
`
