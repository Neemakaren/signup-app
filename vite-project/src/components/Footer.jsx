import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from 'react-icons/fa';

const Footer = () => {


    let date = new Date().getFullYear();

  return (
    <footer className="footer section">

    <div className="footer-container container d-grid">
        
        <div className="company-data">
            <a href="./index.html">
                <h2 className="logo">Recipes</h2>
            </a>
            <p className="company-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, iure. Harum, animi dolores, nam, ad magni expedita.</p>
            
            <ul className="list social-media">
                <li className="list-item">
                    <FaInstagram />
                </li>
                <li className="list-item">
                    <FaFacebook />
                </li>
                <li className="list-item">
                    <FaTwitter />
                </li>
                <li className="list-item">
                    <FaPinterest />
                </li>
            </ul>

            {/* <span className="copyright-notice">&copy;2021 NewsFlash. All rights reserved.</span> */}
            <span className="copyright-notice">&copy;{date} All rights reserved</span>
        </div>

        <div>
            <h6 className="title footer-title">Categories</h6>
            
            <ul className="footer-list list">
                <li className="list-item">
                    <a href="#" className="list-link">Travel</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Food</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Technology</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Health</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Nature</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Fitness</a>
                </li>
            </ul>

        </div>

        <div>
            <h6 className="title footer-title">Useful links</h6>
            
            <ul className="footer-list list">
                <li className="list-item">
                    <a href="#" className="list-link">Home</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Elements</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Tags</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Authors</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Membership</a>
                </li>
            </ul>

        </div>

        <div>
            <h6 className="title footer-title">Company</h6>
            
            <ul className="footer-list list">
                <li className="list-item">
                    <a href="#" className="list-link">Contact us</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">F.A.Q</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Careers</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Authors</a>
                </li>
                <li className="list-item">
                    <a href="#" className="list-link">Memberships</a>
                </li>
            </ul>

        </div>

    </div>
    
</footer>
  )
}

export default Footer