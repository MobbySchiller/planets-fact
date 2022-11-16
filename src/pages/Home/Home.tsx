import React from 'react'
import { NavLink } from 'react-router-dom'
import './Home.scss'

const Home: React.FC = () => {
    return (
        <div className='orbits'>
            <NavLink to='/neptune' className='neptune orbit'></NavLink>
            <NavLink to='/uranus' className='uranus orbit'></NavLink>
            <NavLink to='/saturn' className='saturn orbit'></NavLink>
            <NavLink to='/jupiter' className='jupiter orbit'></NavLink>
            <NavLink to='/mars' className='mars orbit'></NavLink>
            <NavLink to='/earth' className='earth orbit'></NavLink>
            <NavLink to='/venus' className='venus orbit'></NavLink>
            <NavLink to='/mercury' className='mercury orbit'></NavLink>
            <div className='sun'></div>
        </div>
    )
}

export default Home