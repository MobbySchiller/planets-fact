import React, { useState } from 'react'
import { usePlanetPageContext } from '../../context/PlanetPageContext'
import { planets } from '../../data/data'
import Image from './Image/Image'
import Info from './Info/Info'
import Sections from './Sections/Sections'
import Details from './Details/Details'
import './PlanetPage.scss'

interface Section {
    content: string
    source: string
    image: string
    geo?: string
}

export interface Detail {
    rotation: string
    revolution: string
    radius: string
    temperature: string
}

export interface Planet {
    id: number
    name: string
    overview: Section
    structure: Section
    geology: Section
    details: Detail
    sectionColor: string
}

const PlanetPage: React.FC<{ name: string }> = ({ name }) => {
    const [activeSection, setActiveSection] = useState<string>('overview')

    const index = planets.findIndex(planet => planet.name === name)
    const planet = planets[index];

    return (
        <main className='planet'>
            <Image planet={planet} section={activeSection} />
            <Info planet={planet} section={activeSection} />
            <Sections color={planet.sectionColor} state={{ activeSection, setActiveSection }} />
            <Details planet={planet.details} />
        </main>
    )
}
export default PlanetPage