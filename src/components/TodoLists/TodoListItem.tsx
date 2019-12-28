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
	onRemove: (id: number) => void;
	onToggle: (id: number) => void;
};

function TodoListItem({ todo, onRemove, onToggle }: todoListItemProps) {
	const { id, text, checked } = todo;

	return (
		<div className="TodoListItem">
			<div className={cn('checkbox', { checked })} onClick={() => onToggle(id)}>
				{checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
				<div className="text">{text}</div>
			</div>
			<div className="remove" onClick={() => onRemove(id)}>
				<MdRemoveCircleOutline />
			</div>
		</div>
	);
}

export default React.memo(TodoListItem);
