import { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./component/todoform";
import TodoWrap from "./component/todoWrap";

function App() {
	return (
		<div className="App">
			{/* <Todo/> */}
			<TodoWrap />
		</div>
	);
}

export default App;
