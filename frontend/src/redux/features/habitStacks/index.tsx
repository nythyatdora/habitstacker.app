import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GoalOptionalType, StackOptionalType } from '@models/schema';

export interface HabitStacksState {
	goals: Array<GoalOptionalType>;
	stacks: Array<StackOptionalType>;
}

const initialState: HabitStacksState = {
	goals: [],
	stacks: [],
};

export const habitstacksSlice = createSlice({
	name: 'habitStacks',
	initialState,
	reducers: {
		updateGoals: (state, action: PayloadAction<Array<GoalType>>) => {
			state.goals = action.payload;
		},
		updateStacks: (state, action: PayloadAction<Array<StackType>>) => {
			state.stacks = action.payload;
		},
		reset: (state) => {
			state.goals = [];
			state.stacks = [];
		},
	},
});

export const { updateGoals, updateStacks, reset } = habitstacksSlice.actions;

export default habitstacksSlice.reducer;
