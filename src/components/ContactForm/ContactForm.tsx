'use client';
import { create } from '@/actions/actions';
import React from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './contactForm.module.css';

export default function ContactForm() {
	const [isSupport, setSupport] = React.useState<boolean>(false);
	const [isGeneral, setGeneral] = React.useState<boolean>(false);
	const [message, setMessage] = React.useState<string>('');

	function handleSubmit() {
		if (isGeneral || isSupport) {
			setMessage('');
		} else {
			setMessage('Please select a query type');
		}
	}
	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Contact Us</h1>
			<form action={create}>
				<div className={styles.row}>
					<div className={styles['wrapper']}>
						<label className={styles['input-title']} htmlFor='name'>
							First Name
						</label>
						<input className={styles.input} type='text' name='name' id='name' />
					</div>

					<div className={styles['wrapper']}>
						<label className={styles['input-title']} htmlFor='surname'>
							Last Name
						</label>
						<input
							className={styles.input}
							type='text'
							name='surname'
							id='surname'
						/>
					</div>
				</div>
				<div className={styles['wrapper']}>
					<label className={styles['input-title']} htmlFor='email-address'>
						Email Address
					</label>
					<input
						className={styles.input}
						type='email'
						name='email'
						id='email-address'
					/>
				</div>

				<div className={styles['wrapper']}>
					<div className={styles['input-title']}>Query Type</div>

					<div className={`${styles.row} ${styles.gap}`}>
						<label className={`${styles.input} ${styles.checkbox}`}>
							<input
								className={styles['checkbox-input']}
								type='checkbox'
								name='general'
								value='true'
								checked={isGeneral}
								onChange={() => {
									setGeneral(!isGeneral);
								}}
							/>
							<span className={styles.checkmark}></span>
							General Enquiry
						</label>

						<label className={`${styles.input} ${styles.checkbox}`}>
							<input
								className={styles['checkbox-input']}
								type='checkbox'
								name='support'
								value='true'
								checked={isSupport}
								onChange={() => {
									setSupport(!isSupport);
								}}
							/>
							<span className={styles.checkmark}></span>
							Support Request
						</label>
					</div>
					<p className={styles.message}>{message}</p>
				</div>

				<div className={styles['wrapper']}>
					<label className={styles['input-title']} htmlFor='textarea'>
						Message
					</label>
					<textarea
						className={styles.textarea}
						name='textarea'
						id='textarea'
					></textarea>
				</div>

				<div className={styles.agree}>
					<label className={`${styles['input-title']} ${styles.pointer}`}>
						<input
							className={styles['checkbox-input']}
							type='checkbox'
							name='agree'
							value='true'
						/>
						<span className={styles['checkmark-agree']}></span>I consent to
						being contacted by the team
					</label>
				</div>

				<SubmitButton handleSubmit={handleSubmit} />
			</form>
		</div>
	);
}
