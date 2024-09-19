import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BellDot, Circle } from "lucide-react";
import { Gauge } from "lucide-react";
import { Droplet } from "lucide-react";
import { Pencil,Puzzle,ChevronDown,ChevronUp  } from "lucide-react";

const Navbar = () => {
	const [Open,setOpen]=useState(false)
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

			<button onClick={() => setOpen((prev) => !prev)} className="base">
				<Puzzle />
				<span>Base</span>
				{!Open ? (
					<ChevronDown className="drop-icon" />
				) : (
					<ChevronUp className="drop-icon" />
				)}
			</button>
			{Open && (
				<div className="drop-iterm">
					<Link to={"/Accodion"} className="link">
						<Circle className="circle" />
						Accodion
					</Link>
				</div>
			)}

			<Link to={"/google"} className="dash">
				<span>google</span>
			</Link>
			<Link to={"/calender"} className="dash">
				<span>calendar</span>
			</Link>
			<Link to={"/graphs"} className="dash">
				<span>Charts</span>
			</Link>
		</div>
	);
};

export default Navbar;
