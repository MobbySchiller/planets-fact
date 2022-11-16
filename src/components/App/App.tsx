import React, { useState } from 'react'
import { PlanetPageContext } from '../../context/PlanetPageContext'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './App.scss'

const App: React.FC = () => {
  const [activePage, setActivePage] = useState<string>('mercury')

  return (
    <PlanetPageContext.Provider value={{ activePage, setActivePage }}>
      <div className='container'>
        <Header />
        <Main />
      </div>
    </PlanetPageContext.Provider>
  )
}

export default App
