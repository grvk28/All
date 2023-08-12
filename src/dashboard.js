import React from 'react'
import * as Img from 'react-feather'
import { Link } from 'react-router-dom'
import D_Apps from './pages/D_Apps'

const Dashboard = () => {
  return (
    <div className='ColW100'>
        <div><h3>Dashboard</h3></div>
        <D_Apps/>
    </div>
  )
}

export default Dashboard