import { nanoid } from 'nanoid';
import { GoalOptionalType } from '@models/schema';

// eslint-disable-next-line import/prefer-default-export
export const createGoal = (obj: GoalOptionalType) => {
	const { index = 0, title = '', uuid = nanoid(5) } = obj;
	return {
		index,
		title,
		uuid,
	};
};
