import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
		<nav className="head">
			<Link to={"/Home"}>
				<div className="logo">MB</div>
			</Link>
			<div className="nav">
				<Link to={"/Home"}>Home</Link>
				<Link to={"/About"}>About</Link>
				<Link to={"/project"}>Project</Link>
				<Link to={"/contact"}>Contact</Link>
			</div>
		</nav>
  );
}

export default Navbar
