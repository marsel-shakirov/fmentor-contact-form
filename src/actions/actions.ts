'use server';

import { z } from 'zod';

const schema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be a string',
		})
		.min(1, { message: 'This field is required' })
		.regex(/([А-Яа-яё]{3,23}|[A-Za-z]{3,23})/, {
			message: `Must be 3 or more characters long`,
		}),
	surname: z
		.string()
		.min(1, { message: 'This field is required' })
		.regex(/([А-Яа-яё]{3,23}|[A-Za-z]{3,23})/, {
			message: `Must be 3 or more characters long`,
		}),
	email: z
		.string()
		.min(1, { message: 'This field is required' })
		.email({ message: 'Please enter a valid email address' }),
	support: z.nullable(z.string()),
	general: z.nullable(z.string()),
	select: z.boolean({ message: 'Please select a query type' }),
	textarea: z
		.string()
		.min(1, { message: 'This field is required' })
		.regex(/([А-Яа-яё]{1,23}|[A-Za-z]{1,23})/),
	agree: z.string({
		message: 'To submit this form, please consent to being contacted',
	}),
});

export type State = {
	errors?: {
		name?: string[];
		surname?: string[];
		email?: string[];
		support?: string[];
		general?: string[];
		select?: string[];
		textarea?: string[];
		agree?: string[];
	};
	message?: string | null;
};

export async function action(
	prevState: State,
	formData: FormData
): Promise<State> {
	const general = formData.get('general');
	const support = formData.get('support');

	let flag = null;

	if (general || support) {
		flag = true;
	}

	const validatedFields = schema.safeParse({
		name: formData.get('name'),
		surname: formData.get('surname'),
		email: formData.get('email'),
		support: support ? 'true' : 'false',
		general: general ? 'true' : 'false',
		select: flag ? true : null,
		textarea: formData.get('textarea'),
		agree: formData.get('agree'),
	});

	if (!validatedFields.success) {
		return {
			errors: validatedFields.error.flatten().fieldErrors,
		};
	} else {
		return { message: 'success' };
	}
}
