import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {  FaBars, FaWindowClose} from "react-icons/fa";


const Navbar = () => {


  return (
    <> 
    <header className="header" id="header">

<nav className="navbar container">
    <a href="/">
        <h2 className="logo">Recipes</h2>
    </a>

    
    <div className='menu menu-toggle navigation-menu'>
        <ul className="list">
        <Link to='/' className="list-item">Home</Link>
        <Link to='/categories' className="list-item">Categories</Link>
        <Link to='reviews' className="list-item">Reviews</Link>
        <Link to='news' className="list-item">News</Link>
        </ul>
    </div>
   

    <div className="list list-right">

        <Link to='signin'className="list-link">Sign in</Link>
        <a href="#">
            <Link to='signup'>Sign up</Link>
        </a>
    </div>
    
</nav>

</header>
    </>

  )
}

export default Navbar