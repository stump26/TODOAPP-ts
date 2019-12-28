import React from 'react';
import TodoListItem, { todoItem } from './TodoListItem';
import './TodoList.scss';

export type todoListProps = {
	todos: todoItem[];
};

function TodoList({ todos }: todoListProps) {
	return (
		<div className="TodoList">
			{todos.map((todo: todoItem) => (
				<TodoListItem todo={todo} key={todo.id} />
			))}
		</div>
	);
}

export default TodoList;
