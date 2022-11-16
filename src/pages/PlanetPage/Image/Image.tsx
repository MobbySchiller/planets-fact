import React from 'react'
import { Planet } from '../PlanetPage'
import './Image.scss'

const Image: React.FC<{ planet: Planet, section: string }> = ({ planet, section }) => {
    const { name } = planet
    const { image, geo } = planet[section]

    return (
        <div className='image'>
            <img src={image} alt={name} className='image__pic' />
            {section === 'geology' && <img src={geo} alt={`${name} geo pin`} className='image__pin' />}
        </div>
    )
}

export default Image