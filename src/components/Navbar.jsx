import React from 'react'
import logo from '../assets/logo.png'

function Navbar() {
  return (
    <div id='navbar'>
        
        <div>
            <img className='logo' src={ logo } alt="" />
        </div>
        
        <div className=''>
            <ul>
                <li>Product</li>
                <li>Shop</li>
                <li>Gifting</li>
                <button className='button-17'>Contact</button>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
