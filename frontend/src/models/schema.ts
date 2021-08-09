export type GoalType = {
	index: number;
	uuid: string;
	title: string;
};

export type GoalOptionalType = {
	index?: number;
	uuid?: string;
	title?: string;
};

export type StackType = {
	uuid: string;
	top: number;
	currentHabit: string;
	nextHabit: string;
	time: string;
	location: string;
};

export type StackOptionalType = {
	uuid?: string;
	top?: number;
	currentHabit?: string;
	nextHabit?: string;
	time?: string;
	location?: string;
};

export type TopStackType = {
	currentHabit: string;
	time: string;
	location: string;
};

export type TailStackType = {
	currentHabit: string;
	nextHabit: string;
	time: string;
	location: string;
};
