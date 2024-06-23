'use server';

import { z } from 'zod';

const schema = z.object({
	name: z
		.string({
			required_error: 'Name is required',
			invalid_type_error: 'Name must be a string',
		})
		.regex(/([А-Яа-яё]{3,23}|[A-Za-z]{3,23})/, {
			message: `Must be 3 or more characters long`,
		})
		.min(1, { message: 'This field is required' }),
	surname: z
		.string()
		.regex(/([А-Яа-яё]{3,23}|[A-Za-z]{3,23})/, {
			message: `Must be 3 or more characters long`,
		})
		.min(1, { message: 'This field is required' }),
	email: z.string().email({ message: 'Please enter a valid email address' }),
	general: z.nullable(z.string()),
	support: z.nullable(z.string()),
	textarea: z
		.string()
		.regex(/([А-Яа-яё]{1,23}|[A-Za-z]{1,23})/)
		.min(1, { message: 'This field is required' }),
	agree: z.string({
		message: 'To submit this form, please consent to being contacted',
	}),
});

export async function create(formData: FormData) {
	const validatedFields = schema.safeParse({
		name: formData.get('name'),
		surname: formData.get('surname'),
		email: formData.get('email'),
		general: formData.get('general'),
		support: formData.get('support'),
		textarea: formData.get('textarea'),
		agree: formData.get('agree'),
	});
	console.log(formData);

	console.log(validatedFields.error?.flatten());
}
