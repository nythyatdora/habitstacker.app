import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '@redux/features/modal';
import habitStacksReducer from '@redux/features/habitStacks';

export const store = configureStore({
	reducer: {
		modal: modalReducer,
		habitStacks: habitStacksReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
