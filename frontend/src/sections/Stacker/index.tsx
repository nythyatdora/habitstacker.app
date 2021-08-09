import { useState, useLayoutEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';

import ButtonPrimary from '@components/Button/Primary';
import ButtonOutline from '@components/Button/Outline';
import StackComponent from '@components/Stack';

import { useDispatch, useSelector } from 'react-redux';
import { updateStacks } from '@redux/features/habitStacks/';
import { createStack } from '@models/Stack';
import { RootState } from '@redux/store';

const Container = styled.section``;

const Stacks = styled.section`
	display: flex;
	flex-direction: column;
`;

const Stack = styled(StackComponent)`
	&:not(:first-child) {
		margin-top: 48px;
		@media (max-width: 1152px) {
			margin-top: 43px;
		}
		@media (max-width: 768px) {
			margin-top: 32px;
		}
		@media (max-width: 375px) {
			margin-top: 26px;
		}
	}
`;

const ButtonPush = styled(ButtonPrimary)`
	margin-top: 48px;
	@media (max-width: 1152px) {
		margin-top: 43px;
	}
	@media (max-width: 768px) {
		margin-top: 32px;
	}
	@media (max-width: 375px) {
		margin-top: 26px;
	}
`;

const ButtonPop = styled(ButtonOutline)`
	margin-top: 28px;
	@media (max-width: 1152px) {
		margin-top: 24px;
	}
	@media (max-width: 768px) {
		margin-top: 20px;
	}
	@media (max-width: 375px) {
		margin-top: 18px;
	}
`;

type StackerProps = HTMLAttributes<HTMLDivElement>;

const defaultValue = () => [createStack({})];

export default function Stacker({ className }: StackerProps) {
	const [top, setTop] = useState(1);
	const { stacks = defaultValue() } = useSelector(
		(state: RootState) => state.habitStacks
	);
	const dispatch = useDispatch();

	useLayoutEffect(() => {
		if (stacks.length === 0) {
			dispatch(updateStacks(defaultValue()));
			setTop(1);
		}
	}, [stacks]);

	return (
		<Container className={className}>
			<Stacks>
				{stacks.map((habit) => (
					<Stack
						key={habit.uuid}
						index={habit.top || 0}
						value={habit}
						onValueChange={(item) => {
							const newItem = {
								...item,
							};
							const arr = [
								...stacks.filter((stack) => stack.uuid !== newItem.uuid),
								newItem,
							].sort((a, b) => a?.top - b?.top);
							dispatch(updateStacks(arr));
						}}
					/>
				))}
			</Stacks>
			<ButtonPush
				text="Push 🍪"
				onClick={() => {
					const item = createStack({ top });
					const arr = [...stacks, item];
					setTop(top + 1);
					dispatch(updateStacks(arr));
				}}
			/>
			<ButtonPop
				text="Pop 💨"
				onClick={() => {
					let current;
					let arr = [...stacks];
					if (arr.length <= 1) {
						arr = defaultValue();
						current = 1;
					} else {
						current = top - 1;
						arr.pop();
					}
					dispatch(updateStacks(arr));
					setTop(current);
				}}
			/>
		</Container>
	);
}
