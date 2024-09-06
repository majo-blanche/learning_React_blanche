import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
		<nav className='head'>
      <div>
        <Link to={'/'}>LOGO
          {/* <img src={Logo}></img> */}
        </Link>
      </div>
      <div className='nav'>
        <Link to={'/project'}>Project</Link>
        <Link to={'/contact'}>Contact</Link>
      </div>
		</nav>
  );
}

export default Navbar
