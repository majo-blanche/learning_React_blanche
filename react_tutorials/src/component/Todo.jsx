import React from "react";
import { Trash2 } from "lucide-react";
import { PencilRuler } from "lucide-react";
const Todo = ({ task, deleteTodo, editTodo }) => {
	return (
		<div className="todo">
			<p
				onClick={() => toggletComplete(task.id)}
				className={`${task.completed ? "completed" : ""}`}
			>
				{task.task}
			</p>
			<div className="icons">
				<PencilRuler onClick={() => editTodo(task.id)} />
				<Trash2 onClick={() => deleteTodo(task.id)} />
			</div>
		</div>
	);
};
export default Todo;
