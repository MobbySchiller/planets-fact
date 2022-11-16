import React from 'react'
import { Detail } from '../PlanetPage'
import './Details.scss'

const Details: React.FC<{ planet: Detail }> = ({ planet }) => {
    const { rotation, revolution, radius, temperature } = planet

    const details = [
        { title: 'rotation time', value: rotation },
        { title: 'revolution time', value: revolution },
        { title: 'radius', value: radius },
        { title: 'average temp.', value: temperature }
    ]

    const DetailsJSX = details.map(detail => (
        <div className='detail'>
            <span className='detail__title'>{detail.title}</span>
            <span className='detail__value'>{detail.value}</span>
        </div>
    ))

    return (
        <div className='details'>
            {DetailsJSX}
        </div>
    )
}

export default Details