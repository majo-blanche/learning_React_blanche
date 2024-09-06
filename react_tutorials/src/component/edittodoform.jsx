import React, { useState } from "react";
const EditTodoForm = ({ editTodo, task }) => {
	const [value, setValue] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		editTodo(value, task.id);
		setValue("");
	};
	return (
		<div>
			<form className="todoForm" onSubmit={handleSubmit}>
				<input
					type="text"
					className="todo-input"
					value={value}
					placeholder="update task"
					onChange={(e) => setValue(e.target.value)}
					required
				/>
				<button type="submit" className="todo-btn">
					update task
				</button>
			</form>
		</div>
	);
};
export default EditTodoForm;
