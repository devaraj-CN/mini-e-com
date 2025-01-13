import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram from '../Assets/instagram_icon.png'
import pintrest from '../Assets/pintester_icon.png'
import whatsapp from '../Assets/whatsapp_icon.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Office</li>
                <li>About</li>
                <li>Contact us</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram} alt="instagram" />
                    <img src={pintrest} alt="pintrest" />
                    <img src={whatsapp} alt="whatsapp" />
                </div>
            </div>
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2025 - All Rights Unreserved</p>
            </div>
        </div>
    )
}

export default Footer