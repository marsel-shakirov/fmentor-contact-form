import React from 'react';

import { type TypeErrorMessage } from '@/types/interface';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const InputAgree: React.FC<TypeErrorMessage> = ({ error }) => {
	const [isError, setIsError] = React.useState(error);

	React.useEffect(() => setIsError(error), [error]);

	const handlerFocus = () => {
		setIsError([]);
	};
	return (
		<>
			<div className='agree'>
				<label onFocus={handlerFocus} className='input-title pointer'>
					<input
						className='checkbox-input'
						type='checkbox'
						name='agree'
						value='true'
					/>
					<span className='checkmark-agree'></span>I consent to being contacted
					by the team
				</label>
			</div>
			<ErrorMessage error={isError} />
		</>
	);
};

export default InputAgree;
