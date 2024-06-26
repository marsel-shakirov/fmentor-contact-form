'use client';

import { useFormState } from 'react-dom';

import { action, State } from '@/actions/actions';
import { clsx } from 'clsx';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './contactForm.module.css';

export default function ContactForm() {
	const initialState: State = { message: null, errors: {} };

	const [state, formAction] = useFormState(action, initialState);

	console.log(state);

	return (
		<div className={styles.root}>
			<h1 className={styles.title}>Contact Us</h1>
			<form action={formAction}>
				<div className={styles.row}>
					<div className={styles['wrapper']}>
						<label className={styles['input-title']} htmlFor='name'>
							First Name
						</label>
						<input
							className={clsx(styles.input, state.errors?.name && styles.error)}
							type='text'
							name='name'
							id='name'
						/>
						<ErrorMessage message={state.errors?.name} />
					</div>

					<div className={styles['wrapper']}>
						<label className={styles['input-title']} htmlFor='surname'>
							Last Name
						</label>
						<input
							className={clsx(
								styles.input,
								state.errors?.surname && styles.error
							)}
							type='text'
							name='surname'
							id='surname'
						/>
						{state.errors?.surname && (
							<ErrorMessage message={state.errors?.surname} />
						)}
					</div>
				</div>
				<div className={styles['wrapper']}>
					<label className={styles['input-title']} htmlFor='email-address'>
						Email Address
					</label>
					<input
						className={clsx(styles.input, state.errors?.email && styles.error)}
						type='email'
						name='email'
						id='email-address'
					/>
					<ErrorMessage message={state.errors?.email} />
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
							/>
							<span className={styles.checkmark}></span>
							Support Request
						</label>
					</div>
					<ErrorMessage message={state.errors?.select} />
				</div>

				<div className={styles['wrapper']}>
					<label className={styles['input-title']} htmlFor='textarea'>
						Message
					</label>
					<textarea
						className={clsx(
							styles.textarea,
							state.errors?.textarea && styles.error
						)}
						name='textarea'
						id='textarea'
					></textarea>
					<ErrorMessage message={state.errors?.textarea} />
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
				<ErrorMessage message={state.errors?.agree} />

				<SubmitButton />
			</form>
		</div>
	);
}
