import React from 'react';

import { type TypeErrorMessage } from '@/types/interface';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SelectLabel from '../SelectLabel/SelectLabel';

const Select: React.FC<TypeErrorMessage> = ({ error }) => {
	const [isError, setIsError] = React.useState(error);

	React.useEffect(() => setIsError(error), [error]);

	const handlerFocus = () => {
		setIsError([]);
	};
	return (
		<div className='wrapper'>
			<div className='input-title'>Query Type</div>

			<div className={`row gap`}>
				<SelectLabel
					handlerFocus={handlerFocus}
					title='General Enquiry'
					name='general'
				/>
				<SelectLabel
					handlerFocus={handlerFocus}
					title='Support Request'
					name='support'
				/>
			</div>
			<ErrorMessage error={isError} />
		</div>
	);
};

export default Select;
