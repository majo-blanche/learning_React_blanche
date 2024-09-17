import React from "react";
import { BarChart, UserRoundPlus } from "lucide-react";
import Chart from "./square";
// import Right from "./right";

const Menu = () => {
	return (
		<div className="main-menu">
			<h1>Dashboard</h1>
			<div className="big-container">
				<div className="left">
					<div className="top">
						<Chart />
					</div>
					<div className="bottom">
						<div className="bottom-left"></div>
						<div className="bottom-right"></div>
					</div>
				</div>
				<div className="right">
					<div className="traffic">
						<h2>Traffic</h2>
						<p className="date">
							January 01, 2023 - December 31, 2023
						</p>
						<Chart />
					</div>
				</div>
			</div>
			
				<div className="Users-container">
					<div className="big-user">
						<div className="user">
							<h2>Users</h2>
							<p>1.232.150 registerad users</p>
						</div>
						<button>
							{" "}
							<UserRoundPlus />
							Add new users{" "}
						</button>
					</div>
					<div className="side">
						<div className="user-middle"></div>
						<div className="user-middle"></div>
						<div className="user-middle"></div>
					</div>
				</div>
			
		</div>
	);
};

export default Menu;
