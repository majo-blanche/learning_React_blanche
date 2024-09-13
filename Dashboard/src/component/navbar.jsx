import React from "react";
import { Link } from "react-router-dom";
import { BellDot } from "lucide-react";
import { Gauge } from "lucide-react";
import { Droplet } from "lucide-react";
import { Pencil,Puzzle  } from "lucide-react";

const Navbar = () => {
	return (
		<div className="container">
			<Link to={"/"} className="dash" style={{ fontSize: "20px" }}>
				<Gauge />
				<span>Dashboard</span>
			</Link>
			<div className="text">THEMES</div>

			<div className="themes">
				<Link to={"/colors"} className="dash">
					<Droplet />
					<span>color</span>
				</Link>

				<Link to={"/typography"} className="dash">
					<Pencil />
					<span>Typography</span>
				</Link>
				<div className="text">COMPONENT</div>
			</div>
			
			<select name="" id="Base">
				
				<option value="">Base</option>
				<option value="">Accordion</option>
				<option value="">Breadcrumb</option>
			</select>
			<select name="" id="bnt">
				<option value="">Buttons</option>
				<option value="">Button</option>
				<option value="">Buttongroupe</option>
			</select>
			<Link to={"/google"} className="dash">
				<span>google</span>
			</Link>
			<Link to={"/calender"} className="dash">
				<span>calendar</span>
			</Link>
		</div>
	);
};

export default Navbar;
