import React from 'react'
import './PlanetPage.scss'
import { planets } from '../data/data'

const PlanetPage: React.FC = () => {

    const mars = planets[3];

    return (
        <main className='planet'>
            <div className='image'>
                <img src={mars.overview.image} alt={mars.name} />
            </div>
            <div className='info'>
                <h1 className='info__name'>{mars.name}</h1>
                <p className='info__description'>{mars.overview.content}</p>
                <span className='info__source'>Source:
                    <a href={mars.overview.source} className='info__source-link'>Wikipedia</a>
                </span>
            </div>
            <div className='sections'>
                <div className='sections__button'>
                    <span className='section__button-name'><span className='number'>01</span>Overview</span>
                </div>
                <div className='section__button'>
                    <span className='section__button-name'><span className='number'>02</span>Internal Structure</span>

                </div>
                <div className='section__button'>
                    <span className='section__button-name'><span className='number'>03</span>Surface Geology</span>

                </div>
            </div>
            <div className='details'>
                <div className='detail'>
                    <span className='detail__title'>Rotation Time</span>
                    <span className='detail__value'>{mars.details.rotation}</span>
                </div>
                <div className='details'>
                    <span className='detail__title'>Revolution Time</span>
                    <span className='detail__value'>{mars.details.revolution}</span>
                </div>
                <div className='detail'>
                    <span className='detail__title'>Radius</span>
                    <span className='detail__value'>{mars.details.radius}</span>
                </div>
                <div className='detail'>
                    <span className='detail__title'>Average Temp.</span>
                    <span className='detail__value'>{mars.details.temperature}</span>
                </div>
            </div>
        </main>
    )
}
export default PlanetPage