import React from 'react'
import './Sections.scss'

const Sections: React.FC<{ color: string, state: any }> = ({ color, state }) => {
    const { activeSection, setActiveSection } = state

    const sections = [
        { id: '01', category: 'overview', name: 'overview', longName: 'overview' },
        { id: '02', category: 'structure', name: 'structure', longName: 'internal structure' },
        { id: '03', category: 'geology', name: 'surface', longName: 'surface geology' },
    ]

    const handleSectionButton = (e: any) => setActiveSection(e.target.id)

    const SectionsJSX = sections.map(section => (
        <li
            key={section.id}
            id={section.category}
            onClick={handleSectionButton}
            className='section__element'>
            <span
                className='section__element-name section__element-name--long'
                style={activeSection === section.category ? { borderColor: color, backgroundColor: color } : undefined}>
                <span className='section__element-number'>{section.id}</span>{section.longName}
            </span>
            <span
                className='section__element-name section__element-name--short'
                style={activeSection === section.category ? { borderBottom: `4px solid ${color}`, color: '#FFFFFF' } : undefined}
            > {section.name}</span >
        </li >
    )
    )

    return (
        <div className='sections'>
            <ul className='sections__list'>
                {SectionsJSX}
            </ul>
        </div>
    )
}

export default Sections