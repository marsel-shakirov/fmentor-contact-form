'use client';

import React from 'react';

import { clsx } from 'clsx';

import { type IError } from '@/types/interface';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Input: React.FC<IError> = ({ error, name: id }) => {
	const [isError, setIsError] = React.useState(error);

	React.useEffect(() => setIsError(error), [error]);

	const handlerFocus = () => {
		setIsError([]);
	};

	return (
		<>
			<input
				onFocus={handlerFocus}
				className={clsx('input', isError?.length && 'error')}
				type='text'
				name={id}
				id={id}
			/>
			<ErrorMessage error={isError} />
		</>
	);
};

export default Input;
