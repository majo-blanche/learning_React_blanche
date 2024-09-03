import React, { useState } from "react";
import TodoForm from "./todoform";
import Todo from "./todo";
import EditTodoForm from "./edittodoform";
const TodoWrap = () => {
	const [todos, setTodos] = useState([]);

	console.log(todos);
	
	const addTodo = (todo) => {
		setTodos([
			...todos,
			{ id: Math.floor(Math.random() * 10000), task: todo, completed: false, isEditing: false },
		]);
	};

	const deleteTodo = (id) => {
		setTodos(todos.filter((todo) => todo.id !== id));
	};
	const editTodo = (id) => {
		console.log(id);
		
		setTodos(
			todos.map((todo) =>
				todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
			)
		);
	};
	const editTask = (task, id) => {
		setTodos(
			todos.map((todo) =>
				todo.id === id
					? { ...todo, task, isEditing: !todo.isEditing }
					: todo
			)
		);
	};
	return (
		<div className="TodoWrap">
			<h2> Get Things Done!</h2>
			<TodoForm addTodo={addTodo} />
			{todos.map((todo, index) =>
				todo.isEditing ? (
					<EditTodoForm editTodo={editTask} task={todo} />
				) : (
					<Todo
						task={todo}
						key={index}
						deleteTodo={deleteTodo}
						editTodo={editTodo}
					/>
				)
			)}
		</div>
	);
};
export default TodoWrap;
