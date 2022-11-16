import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../../pages/Home/Home'
import PlanetPage from '../../pages/PlanetPage/PlanetPage'
import { planets } from '../../data/data'

const Main: React.FC = () => {

    const Pages = planets.map(planet => (
        <Route
            key={planet.id}
            path={`/${planet.name}`}
            element={<PlanetPage name={planet.name} />} />
    ))

    return (
        <Routes>
            <Route path='/' element={<Home />} />
            {Pages}
        </Routes>
        // <PlanetPage />
    )
}

export default Main