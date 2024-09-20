import React from "react";
import {
	UserRoundPlus,
	UsersRound,
	ShoppingCart,
	EllipsisVertical,
} from "lucide-react";
import Chart from "./square";
import Piechart from "./piechart";
import Blue from "./blue";
import Myarray from "./User";

const array = [
	{
		client: "New client",
		border: "4px solid rgb(116, 122, 242)",
		number: "9,123",
	},
	{
		client: "New client",
		border: "4px solid rgb(239, 55, 110)",
		number: "9,123",
	},
	{
		client: "New client",
		border: " 4px solid rgb(51, 153, 255)",
		number: "9,123",
	},
	{
		client: "New client",
		border: " 4px solid rgb(81, 204, 138)",
		number: "9,123",
	},
];
const Menu = () => {
	return (
		<div className="main-menu">
			<h1>Dashboard</h1>
			<div className="big-container">
				<div className="left">
					<div className="top">
						<h2 className="u">Sale</h2>
						<Piechart />
					</div>
					<div className="bottom">
						<div className="bottom-left">
							<div>
								<p>Customers</p>
								<h3>44.725</h3>
							</div>
							<div className="oders">
								<UsersRound className="cart" />
							</div>
						</div>
						<div className="bottom-right">
							<div>
								<p>Oders</p>
								<h3>385</h3>
							</div>
							<div className="oders">
								<ShoppingCart className="cart" />
							</div>
						</div>
					</div>
				</div>
				<div className="right">
					<h2>TRAFIC</h2>
					January 01, 2023 - December 31, 2023
					<Chart />
				</div>
			</div>

			<div className="Users-container">
				<div className="big-user">
					<div className="Aser">
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
					<div className="all">
						<div style={{ width: "5px" }}>
							{" "}
							<UsersRound />
						</div>
						<div style={{ width: "150px" }}>
							<b>user</b>
						</div>
						<div style={{ width: "20px" }}>
							<b>country</b>
						</div>
						<div style={{ width: "170px" }}>
							<b>usage</b>
						</div>
						<div>
							<b>Activity</b>
						</div>
					</div>
					{Myarray.map((user, index) => (
						<div key={index} className="All">
							<div style={{ width: "5px" }} className="pic">
								<img src={user.pic} />
							</div>

							<div style={{ width: "200px" }}>
								<b>{user.username}</b>
								<div style={{ color: "rgb(100, 100, 100)" }}>
									{user.type} | {user.registered}
								</div>
							</div>
							<div style={{ width: "20px" }}>
								<img src={user.country} />
							</div>
							<div style={{ width: "150px" }}>{user.usage}</div>
							<div>
								<div
									style={{
										color: "rgb(100, 100, 100)",
										padding: "5px",
									}}
								>
									{user.time}
								</div>
								{user.activity}
							</div>
						</div>
					))}
				</div>
				<div className="side">
					<div className="user-top">
						<div className="blue">
							<div>
								<h3>26K</h3>
								<p>Users</p>
							</div>
							<div>
								<EllipsisVertical className="dot" />
							</div>
						</div>

						<Blue />
					</div>
					<div className="user-middle"></div>
					<div className="user-bottom"></div>
				</div>
			</div>
			<div className="bottom-user">
				<div className="week">
					<h1>Traffic</h1>
					<p>Last Week</p>
				</div>
				<div className="Traffic-container">
					{array.map((Traffic, index) => (
						<div
							key={index}
							className="Traffic"
							style={{ borderLeft: Traffic.border }}
						>
							<span>{Traffic.client}</span>
							<span>
								<strong>{Traffic.number}</strong>
							</span>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Menu;
