import React from 'react'
import { Link } from 'react-router-dom'
import "../cssFile/NavBar.css"

const NavBar = () => {
  return (
    <div>
      <h1></h1>
      <div className='Linked-Container'>
        <Link to={"/gaproblem"} className='NavBar-gap'>GAproblem</Link>
        <Link to={"/hwproblem"} className='NavBar-gap'>HWproblem</Link>
        <Link to={"/dhproblem"} className='NavBar-gap'>DHproblem</Link>
        <Link to={"/esproblem"} className='NavBar-gap'>ESproblem</Link>
      </div>
    </div>
  )
}

export default NavBar
