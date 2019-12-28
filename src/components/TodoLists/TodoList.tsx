import React from 'react';
import TodoListItem, { todoItem } from './TodoListItem';
import './TodoList.scss';

export type todoListProps = {
	todos: todoItem[];
	onRemove: (id: number) => void;
	onToggle: (id: number) => void;
};

function TodoList({ todos, onRemove, onToggle }: todoListProps) {
	return (
		<div className="TodoList">
			{todos.map((todo: todoItem) => (
				<TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
			))}
		</div>
	);
}

export default TodoList;
