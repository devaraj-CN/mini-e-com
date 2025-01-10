import React, { useState } from 'react'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import './NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo" />
        <p>Shopping</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link to='/'>Shop</Link>  {menu === "shop" ? <hr/> : ""}</li>
        <li onClick={() => { setMenu("mens") }}><Link to='/mens'>Mens</Link>  {menu === "mens" ? <hr/> : ""}</li>
        <li onClick={() => { setMenu("womens") }}><Link to='/womens'>Womens</Link>  {menu === "womens" ? <hr/> : ""}</li>
        <li onClick={() => { setMenu("kids") }}><Link to='/kids'>kids</Link>  {menu === "kids" ? <hr/> : ""}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login'><button className="nav-login">Login</button></Link> 
      <Link to='/cart'><img src={cart_icon} alt="cart icon" /></Link> 
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default NavBar