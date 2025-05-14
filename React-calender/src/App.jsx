import { useState } from 'react'
import './App.css'
import Calender from './components/Calender'

function App() {

  return (
    <>
      <div className='main-body'>
        <div className='header'>
          React-calender
        </div>
        <div className='calender'>
          <Calender />
        </div>
      </div>
    </>
  )
}

export default App
