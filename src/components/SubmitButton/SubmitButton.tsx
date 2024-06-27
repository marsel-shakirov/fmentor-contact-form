'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

const SubmitButton: React.FC = () => {
	const { pending } = useFormStatus();

	return (
		<button className='btn pointer' type='submit' disabled={pending}>
			Submit
		</button>
	);
};

export default SubmitButton;
