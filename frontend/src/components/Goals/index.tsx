import { useMemo, useEffect, HTMLAttributes } from 'react';
import styled from 'styled-components';

import PillComponent from '@components/Pill';
import IconPill from '@components/Button/IconPill';

import plusCircleFill from '@iconify/icons-ph/plus-circle-fill';

import { GoalOptionalType } from '@models/schema';
import { createGoal } from '@models/Goal';

const Pills = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: row;
	align-items: flex-start;
	padding-top: 32px;
	@media (max-width: 1152px) {
		padding-top: 27px;
	}
	@media (max-width: 768px) {
		padding-top: 26px;
	}
	@media (max-width: 375px) {
		padding-top: 20px;
	}
`;

const Pill = styled(PillComponent)`
	margin: 0 16px 16px 0;
	@media (max-width: 1152px) {
		margin: 0 12px 12px 0;
	}
	@media (max-width: 768px) {
		margin: 0 10px 10px 0;
	}
	@media (max-width: 375px) {
		margin: 0 6px 6px 0;
	}
`;

const PillAdd = styled(IconPill)`
	margin: 0 16px 16px 0;
	@media (max-width: 1152px) {
		margin: 0 12px 12px 0;
	}
	@media (max-width: 768px) {
		margin: 0 10px 10px 0;
	}
	@media (max-width: 375px) {
		margin: 0 6px 6px 0;
	}
`;

interface GoalsProps extends HTMLAttributes<HTMLDivElement> {
	value: Array<GoalOptionalType>;
	onValueChange: (value: Array<GoalOptionalType>) => void;
}

const defaultValue = () => [
	createGoal({
		index: 0,
		title: '',
	}),
];

export default function Goals({ className, value, onValueChange }: GoalsProps) {
	const goals = useMemo(
		() => (value.length === 0 ? defaultValue() : value),
		[value]
	);

	useEffect(() => {
		if (value !== goals) {
			onValueChange(goals);
		}
	}, []);

	return (
		<Pills className={className}>
			{goals.map((item) => (
				<Pill
					key={item.uuid}
					value={item.title}
					placeholder="your goal"
					onValueChange={(title) => {
						const newItem = { ...item, title };
						const arr = [
							...goals.filter((goal) => goal.uuid !== newItem.uuid),
							newItem,
						].sort((a, b) => a?.index - b?.index);
						onValueChange(arr);
					}}
					onRemoveClick={() => {
						let arr = [...goals];
						if (arr.length <= 1) {
							arr = [createGoal({ index: 0, title: '' })];
						} else {
							arr = goals.filter((goal) => goal.uuid !== item.uuid);
						}
						onValueChange(arr);
					}}
				/>
			))}
			<PillAdd
				icon={plusCircleFill}
				onClick={() => {
					const newItem = createGoal({
						index: goals.length,
						title: '',
					});
					const arr = [...goals, newItem];
					onValueChange(arr);
				}}
			/>
		</Pills>
	);
}
