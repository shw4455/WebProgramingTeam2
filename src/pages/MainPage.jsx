import React from 'react'
import NavBar from '../component/NavBar'
import "../cssFile/MainPage.css"

const MainPage = () => {
  return (
    <div className='MainContainer'>
      <h1>DaGakJa</h1>
      <NavBar className = "NavBar-style"/>
    </div>
  )
}

export default MainPage
