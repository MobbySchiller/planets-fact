import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { Planet } from '../PlanetPage'
import './Info.scss'


const Info: React.FC<{ planet: Planet, section: string }> = ({ planet, section }) => {
    const { name } = planet
    const { content, source } = planet[section]

    return (
        <div className='info'>
            <h1 className='info__name'>{name}</h1>
            <p className='info__content'>{content}</p>
            <span className='info__source'>Source:
                <a href={source} className='info__source-link'>Wikipedia
                    <FontAwesomeIcon className='info__source-icon' icon={faLink} /></a>
            </span>
        </div>
    )
}

export default Info