import React from 'react'
import Header from '../Header/Header'
import Main from '../Main/Main'
import './App.scss'

const App: React.FC = () => {
  return (
    <div className='container'>
      <Header />
      <Main />
    </div>
  )
}

export default App
