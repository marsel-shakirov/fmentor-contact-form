'use client';
import React from 'react';
import { useFormStatus } from 'react-dom';

import styles from './submitButton.module.css';
const SubmitButton: React.FC = () => {
	const { pending } = useFormStatus();

	return (
		<button
			className={`${styles.btn} ${styles.pointer}`}
			type='submit'
			disabled={pending}
		>
			Submit
		</button>
	);
};

export default SubmitButton;
