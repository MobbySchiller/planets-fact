import React from 'react'
import Counter from '../Counter/Counter'
import { Detail } from '../PlanetPage'
import './Details.scss'


const Details: React.FC<{ planet: Detail }> = ({ planet }) => {
    const { rotation, revolution, radius, temperature } = planet

    const details = [
        { id: 1, title: 'rotation time', value: rotation },
        { id: 2, title: 'revolution time', value: revolution },
        { id: 3, title: 'radius', value: radius },
        { id: 4, title: 'average temp.', value: temperature }
    ]

    const DetailsJSX = details.map(detail => {
        const space = detail.value.indexOf(' ')
        const value = detail.value.slice(0, space).replace(',', '')
        const unit = detail.value.slice(space + 1)

        return (
            <div
                key={detail.id}
                className='detail' >
                <span className='detail__title'>{detail.title}</span>
                <span className='detail__value'><Counter from={0} to={Number(value)} /> {unit}</span>
            </div >
        )
    })

    return (
        <div className='details'>
            {DetailsJSX}
        </div>
    )
}

export default Details