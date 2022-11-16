import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { usePlanetPageContext } from '../../context/PlanetPageContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { planets } from '../../data/data'
import './Nav.scss'

enum Breakpoint {
    Tablet = 768
}

const Nav: React.FC = () => {
    const [navIsActive, setNavIsActive] = useState<boolean>(false)
    const { setActivePage } = usePlanetPageContext()

    const handleLink = (e) => {
        setActivePage(e.target.id)
        window.innerWidth >= Breakpoint.Tablet ? undefined : setNavIsActive(!navIsActive)
    }
    const handleHamburger = () => setNavIsActive(!navIsActive)

    window.addEventListener('load', () => window.innerWidth >= Breakpoint.Tablet ? setNavIsActive(true) : setNavIsActive(false))
    window.addEventListener('resize', () => window.innerWidth >= Breakpoint.Tablet ? setNavIsActive(true) : setNavIsActive(false))

    const list = {
        visible: {
            opacity: 1,
            transition: { staggerChildren: .1 }
        },
        hidden: { opacity: 0 }
    }

    const item = {
        visible: { opacity: 1, x: 0 },
        hidden: { opacity: 0, x: '-100%' },
    }

    const Elements = planets.map(planet => {
        const planetLower = planet.name.toLowerCase()

        return (
            <motion.li
                variants={item}
                key={planet.id}
                className='navigation__element' >
                <NavLink
                    to={`${planetLower}`}
                    id={planetLower}
                    className={({ isActive }) =>
                        'navigation__link' + (isActive ? ' navigation__link--active' : '')}
                    onClick={handleLink}
                    end>
                    {planet.name}
                </NavLink>
            </motion.li >
        )
    })

    return (
        <>
            <div className='hamburger'>
                <FontAwesomeIcon className='hamburger__icon' icon={navIsActive ? faXmark : faBars} onClick={handleHamburger} />
            </div>
            <nav className='navigation' style={navIsActive ? { display: 'block' } : { display: 'none' }}>
                <motion.ul
                    variants={list}
                    initial="hidden"
                    animate={navIsActive ? "visible" : "hidden"}
                    className='navigation__list'
                >
                    {Elements}
                </motion.ul>
            </nav>
        </>
    )
}

export default Nav