import React from 'react';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdRemoveCircleOutline } from 'react-icons/md';
import cn from 'classnames';

import './TodoListItem.scss';

export type todoItem = {
	id: number;
	text: string;
	checked: boolean;
};

type todoListItemProps = {
	todo: todoItem;
};

function TodoListItem({ todo }: todoListItemProps) {
	const { text, checked } = todo;

	return (
		<div className="TodoListItem">
			<div className={cn('checkbox', { checked })}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
			</div>
			<div className="remove">
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
}

export default TodoListItem;
