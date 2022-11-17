import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { planets } from '../../data/data'
import './Home.scss'

const Home: React.FC = () => {
    const [planetHovered, setPlanetHovered] = useState<string>('')

    const Planets = planets.map(planet => {
        const name = planet.name.toLowerCase()

        const handleHover = () => setPlanetHovered(name)
        const handleUnhover = () => setPlanetHovered('')

        return (
            <NavLink
                to={`/${name}`} className={`${name} orbit`}
                onMouseEnter={handleHover}
                onMouseLeave={handleUnhover}>
                <div className={`${name}__square`}>
                    <div className={`${name}__planet`}></div>
                </div>
            </NavLink>
        )
    })


    return (
        <>
            <div className='orbits'>
                {Planets}
                <div className='sun'></div>
            </div>
            {planetHovered && <p className='planet-name'>{planetHovered}</p>}
        </>
    )
}

export default Home