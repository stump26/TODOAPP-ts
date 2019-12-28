import React, { useState, useCallback, useRef, useReducer } from 'react';

import TodoTemplate from './components/TodoForm/TodoTemplate';
import TodoInsert from './components/TodoForm/TodoInsert';
import TodoList from './components/TodoLists/TodoList';
import { todoItem } from './components/TodoLists/TodoListItem';

import './App.css';

const initTodoArray: todoItem[] = [
	{
		id: 1,
		text: '리액트의 기초 알아보기',
		checked: true,
	},
	{
		id: 2,
		text: 'Typescript 기초 알아보기',
		checked: true,
	},
	{
		id: 3,
		text: '일정 관리 앱 만들어 보기',
		checked: false,
	},
];

type actionType =
	| { type: 'INSERT'; todo: todoItem }
	| { type: 'REMOVE'; id: number }
	| { type: 'TOGGLE'; id: number };

function todoReducer(todos: todoItem[], action: actionType) {
	switch (action.type) {
		case 'INSERT':
			return todos.concat(action.todo);
		case 'REMOVE':
			return todos.filter((todo: todoItem) => todo.id !== action.id);
		case 'TOGGLE':
			return todos.map((todo: todoItem) =>
				todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
			);
		default:
			return todos;
	}
}

const App: React.FC = () => {
	const [todos, dispatch] = useReducer(todoReducer, initTodoArray, undefined);

	const nextId = useRef(4);

	const onInsert = useCallback((text: string) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};
		dispatch({ type: 'INSERT', todo });
		nextId.current += 1;
	}, []);

	const onRemove = useCallback((id: number) => {
		dispatch({ type: 'REMOVE', id });
	}, []);

	const onToggle = useCallback((id: number) => {
		dispatch({ type: 'TOGGLE', id });
	}, []);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
