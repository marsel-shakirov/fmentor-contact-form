import React from 'react';

import styles from './ErrorMessage.module.css';

const ErrorMessage: React.FC<{ message: string[] | undefined }> = ({
	message,
}) => {
	return <>{message && <div className={styles.root}>{message[0]}</div>} </>;
};

export default ErrorMessage;
