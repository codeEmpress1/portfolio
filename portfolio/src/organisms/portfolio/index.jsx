import React from 'react'
import Portfolio from './style'
import { Header } from '../../atoms/typography'
const RecentWork = () => {
    return (
        <>
        <Header className='header' id='portfolio'> Portfolio</Header>
        <Portfolio>
            <div className='red'></div>
            <div className='blue'></div>
            <div className='green'></div>
        </Portfolio>
        </>
    )
}

export default RecentWork