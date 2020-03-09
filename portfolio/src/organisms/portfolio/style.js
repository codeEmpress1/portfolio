import styled from 'styled-components'
 const Portfolio = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1em;
    justify-content: space-between;
    .red,
    .blue,
    .green {
        min-height: 7rem;
    }
    margin-bottom: 2rem;
    .red {
        background-color: red;
    }
    .blue {
        background-color: blue;
    }
    .green {
        background-color: green;
    }
 `

 export default Portfolio