import React from 'react'
import Nav from '../Nav/Nav'
import './Header.scss'

const Header: React.FC = () => {
    return (
        <header>
            <span className='logo'>The Planets</span>
            <Nav />
        </header>
    )
}

export default Header