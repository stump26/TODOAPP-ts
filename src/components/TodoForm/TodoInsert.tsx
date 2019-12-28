import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';

type todoInsertProps = {
	onInsert: (text: string) => void;
};

function TodoInsert({ onInsert }: todoInsertProps) {
	const [value, setVaule] = useState<string>('');
	const onChange = useCallback((e: any) => {
		setVaule(e.target.value);
	}, []);
	const onSubmit = useCallback(
		(e: any) => {
			onInsert(value);
			setVaule('');

			e.preventDefault();
		},
		[onInsert, value],
	);

	return (
		<form className="TodoInsert" onSubmit={onSubmit}>
			<input placeholder="할 일을 입력하세요" value={value} onChange={onChange} />
			<button type="submit">
				<MdAdd />
			</button>
		</form>
	);
}

export default TodoInsert;
