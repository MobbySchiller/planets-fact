import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import './Header.scss'

const Header: React.FC = () => {
    return (
        <header>
            <Link to='/' className='logo'>The Planets</Link>
            <Nav />
        </header>
    )
}

export default Header