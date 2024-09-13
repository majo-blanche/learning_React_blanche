import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./component/navbar";
import Menu from "./component/menu";
import Header from "./component/header";
import Colors from "./component/Colors";
import Typography from "./component/typography";
 import Google from "./component/google";
import Setcalender from "./component/calender";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<div className="sidebar">
					<Navbar />
				</div>
				<div className="container-1">
					<Header />
					<div className="menu">
						<Routes>
							<Route element={<Menu />} path="/"></Route>
							<Route element={<Colors />} path="/colors"></Route>
							<Route
								element={<Typography />}
								path="/Typography"
							></Route>
							<Route element={<Google />} path="/Google"></Route>
							<Route element={<Setcalender />} path="/calender"></Route>
						</Routes>
					</div>
				</div>
				<div className="App">
					<h1></h1>
				</div>
			</BrowserRouter>
		</div>
	);
}

export default App;
