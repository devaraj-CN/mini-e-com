import React from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import  './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img src={logo} alt="Logo"/>
            <p>Shopping</p>
        </div>
        <ul className="nav-menu">
          <li>Shop <hr /></li>
          <li>Men</li>
          <li>Women</li>
          <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
          <button className="nav-login">Login</button>
          <img src={cart_icon} alt="cart icon" />
          <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default NavBar