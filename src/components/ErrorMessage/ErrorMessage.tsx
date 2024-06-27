import { TypeErrorMessage } from '@/types/interface';
import React from 'react';

const ErrorMessage: React.FC<TypeErrorMessage> = ({ error }) => {
	console.log(error);

	return <>{error && <div className='red'>{error[0]}</div>} </>;
};

export default ErrorMessage;
