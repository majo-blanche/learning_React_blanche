import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import "./App.css";
import Contact from "./component/Contact";
import Project from "./component/Project";
import Navbar from "./component/Navbar";
import Footer from "./component/footer";
import About from "./component/About";

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/Home" element={<Home />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/project" element={<Project />} />
					<Route path="/About" element={<About />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
