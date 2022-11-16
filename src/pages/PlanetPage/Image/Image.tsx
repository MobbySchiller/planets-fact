import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { usePlanetPageContext } from '../../../context/PlanetPageContext'
import { Planet } from '../PlanetPage'
import './Image.scss'

const Image: React.FC<{ planet: Planet, section: string }> = ({ planet, section }) => {
    const { name } = planet
    const { image, geo } = planet[section]
    const [canAnimate, setCanAnimate] = useState<boolean>(true)
    const { activePage } = usePlanetPageContext()

    const frameDiv = {
        hidden: {
            x: [100, 300, 500, 300, 100, 0, -100, -300, -500, -700, -900, -1100, -1300, -1500],
            y: [-30, -40, -90, -110, -120, -130, -120, -110, -100, -90, -70, -50, -30, 0],
            scale: [0.9, 0.70, 0.40, 0.25, 0.15, 0.10, 0.15, 0.25, 0.30, 0.45, 0.55, 0.65, 0.90, 0.95],
        },
        visible: {
            x: 0,
            y: 0,
            scale: 1
        }
    }

    useEffect(() => {
        setCanAnimate(false)
        setTimeout(() => setCanAnimate(true), 500)
    }, [activePage])

    return (
        <motion.div
            variants={frameDiv}
            initial='hidden'
            animate={canAnimate ? 'visible' : 'hidden'}
            className='image'>
            <img src={image} alt={name} className='image__pic' />
            {section === 'geology' && <img src={geo} alt={`${name} geo pin`} className='image__pin' />}
        </motion.div>
    )
}

export default Image