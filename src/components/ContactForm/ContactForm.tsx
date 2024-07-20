'use client';

import { useFormState } from 'react-dom';

import { action, State } from '@/actions/actions';
import Input from '../Input/Input';
import InputAgree from '../InputAgree/InputAgree';
import PopupSucсess from '../PopupSucсess/PopupSucсess';
import Select from '../Select/Select';
import SubmitButton from '../SubmitButton/SubmitButton';
import Textarea from '../Textarea/Textarea';

export default function ContactForm() {
	const initialState: State = { message: null, errors: {} };

	const [state, formAction] = useFormState(action, initialState);

	console.log(state);

	return (
		<>
			{state.message && <PopupSucсess />}
			<div className='root'>
				<h1 className='title'>Contact Us</h1>
				<form action={formAction}>
					<div className='row'>
						<div className='wrapper'>
							<label className='input-title' htmlFor='name'>
								First Name
							</label>
							<Input error={state.errors?.name} name='name' />
						</div>

						<div className='wrapper'>
							<label className='input-title' htmlFor='surname'>
								Last Name
							</label>
							<Input error={state.errors?.surname} name='surname' />
						</div>
					</div>

					<div className='wrapper'>
						<label className='input-title' htmlFor='email'>
							Email Address
						</label>
						<Input error={state.errors?.email} name='email' />
					</div>

					<Select error={state.errors?.select} />

					<div className='wrapper'>
						<label className='input-title' htmlFor='textarea'>
							Message
						</label>
						<Textarea error={state.errors?.textarea} />
					</div>

					<InputAgree error={state.errors?.agree} />

					<SubmitButton />
				</form>
			</div>
		</>
	);
}
