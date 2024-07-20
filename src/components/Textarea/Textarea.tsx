import React from 'react';

import { type TypeErrorMessage } from '@/types/interface';
import clsx from 'clsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const Textarea: React.FC<TypeErrorMessage> = ({ error }) => {
	const [isError, setIsError] = React.useState(error);

	React.useEffect(() => setIsError(error), [error]);

	const handlerFocus = () => {
		setIsError([]);
	};

	return (
		<>
			<textarea
				onFocus={handlerFocus}
				spellCheck='false'
				className={clsx('textarea', isError?.length && 'error')}
				name='textarea'
				id='textarea'
			></textarea>
			<ErrorMessage error={isError} />
		</>
	);
};

export default Textarea;
