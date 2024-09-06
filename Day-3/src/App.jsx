import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/home";
import "./App.css";
import Contact from "./component/contact";
import Project from "./component/project";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/project" element={<Project/>} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
