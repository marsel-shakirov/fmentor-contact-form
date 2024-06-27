import React from 'react';

import { type ISelect } from '@/types/interface';
import clsx from 'clsx';

const SelectLabel: React.FC<ISelect> = ({ title, name, handlerFocus }) => {
	const [isChecked, setIsChecked] = React.useState(false);

	const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
		setIsChecked(e.target.checked);
	};
	return (
		<label className={clsx('input', 'checkbox', isChecked && 'checked')}>
			<input
				onFocus={handlerFocus}
				onChange={handleChecked}
				className='checkbox-input'
				type='checkbox'
				name={name}
				value='true'
			/>
			<span className='checkmark'></span>
			{title}
		</label>
	);
};

export default SelectLabel;
