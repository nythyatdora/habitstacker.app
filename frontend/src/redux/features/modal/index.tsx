import { createSlice } from '@reduxjs/toolkit';

export interface ModalState {
	isToggle: boolean;
}

const initialState: ModalState = {
	isToggle: false,
};

export const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		showModal: (state) => {
			state.isToggle = true;
		},
		hideModal: (state) => {
			state.isToggle = false;
		},
	},
});

export const { showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;
