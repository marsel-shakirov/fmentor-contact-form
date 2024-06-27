export interface IError {
	error: string[] | undefined;
	name: string;
}

export type TypeErrorMessage = Omit<IError, 'name'>;

export interface ISelect {
	handlerFocus: () => void;
	title: string;
	name: string;
}
