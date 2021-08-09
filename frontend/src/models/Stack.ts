import { nanoid } from 'nanoid';
import { StackOptionalType } from '@models/schema';

// eslint-disable-next-line import/prefer-default-export
export const createStack = (obj: StackOptionalType) => {
	const {
		uuid = nanoid(5),
		top = 0,
		currentHabit = '',
		nextHabit = '',
		time = '',
		location = '',
	} = obj;
	return {
		uuid,
		top,
		currentHabit,
		nextHabit,
		time,
		location,
	};
};
