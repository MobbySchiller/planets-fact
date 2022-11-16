import React, { useState, useEffect } from 'react'
import { usePlanetPageContext } from '../../../context/PlanetPageContext'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Planet } from '../PlanetPage'
import './Info.scss'


const Info: React.FC<{ planet: Planet, section: string }> = ({ planet, section }) => {
    const { name } = planet
    const { content, source } = planet[section]
    const [canAnimate, setCanAnimate] = useState<boolean>(true)
    const { activePage } = usePlanetPageContext()

    const framerDiv = {
        hidden: {
            opacity: 0,
            transition: { duration: 0 }
        },
        visible: { opacity: 1 }
    }

    const framerH1 = {
        hidden: {
            x: 600,
            transition: { duration: 0 }
        },
        visible: { x: 0 }
    }

    useEffect(() => {
        setCanAnimate(false)
        setTimeout(() => setCanAnimate(true), 200)
    }, [activePage])

    return (
        <motion.div
            variants={framerDiv}
            initial='hidden'
            animate={canAnimate ? 'visible' : 'hidden'} className='info'>
            <motion.h1
                variants={framerH1}
                initial='hidden'
                animate={canAnimate ? 'visible' : 'hidden'}
                className='info__name'>{name}</motion.h1>
            <p
                className='info__content'>{content}</p>
            <span className='info__source'>Source:
                <a href={source} target='_blank' className='info__source-link'>Wikipedia
                    <FontAwesomeIcon className='info__source-icon' icon={faLink} /></a>
            </span>
        </motion.div>
    )
}

export default Info