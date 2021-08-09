import { useMemo, HTMLAttributes } from 'react';
import styled from 'styled-components';

import { TopStackType, TailStackType, StackOptionalType } from '@models/schema';

import LabelComponent from '@components/Text/Label';
import BigText from '@components/Text/Big';
import StackInput from '@components/StackInput';

const stackPlaceholder = [
	{
		currentHabit: 'wake up',
		time: '06:00',
		location: 'home',
	},
	{
		currentHabit: 'the bath',
		nextHabit: 'have a breakfast',
		time: '06:30',
		location: 'home',
	},
	{
		currentHabit: 'have a breakfast',
		nextHabit: 'go to work',
		time: '07:15',
		location: 'work',
	},
	{
		currentHabit: 'arrive at work',
		nextHabit: 'read all the emails',
		time: '08:15',
		location: 'work',
	},
	{
		currentHabit: 'finish the email',
		nextHabit: 'have a meeting',
		time: '09:00',
		location: 'work',
	},
	{
		currentHabit: 'the meeting',
		nextHabit: 'deeply focus on working',
		time: '09:30',
		location: 'work',
	},
	{
		currentHabit: 'write the today reports',
		nextHabit: 'leave the work',
		time: '19:15',
		location: 'work',
	},
	{
		currentHabit: 'arrive home',
		nextHabit: 'make myself a dinner',
		time: '20:00',
		location: 'home',
	},
	{
		currentHabit: 'finish my dinner',
		nextHabit: 'wash the dishes',
		time: '21:00',
		location: 'home',
	},
	{
		currentHabit: 'everything is done',
		nextHabit: 'bath',
		time: '22:00',
		location: 'home',
	},
	{
		currentHabit: 'current habit',
		nextHabit: 'next habit',
		time: '00:00',
		location: 'location',
	},
];

const Container = styled.section`
	display: flex;
	flex-direction: column;
`;

const Label = styled(LabelComponent)`
	width: fit-content;
`;

const Text = styled(BigText)`
	white-space: nowrap;
	margin: 0px 10px 10px 10px;
	@media (max-width: 1152px) {
		margin: 0px 10px 10px 10px;
	}
	@media (max-width: 768px) {
		margin: 0px 7.5px 7.5px 7.5px;
	}
	@media (max-width: 375px) {
		margin: 0px 5px 5px 5px;
	}
`;

const Input = styled(StackInput)`
	flex: 1;
	margin: 0 10px 12.5px 10px;
	@media (max-width: 1152px) {
		margin: 0 10px 10px 10px;
	}
	@media (max-width: 768px) {
		margin: 0 7.5px 7.5px 7.5px;
	}
	@media (max-width: 375px) {
		margin: 0 5px 5px 5px;
	}
`;

const Sentence = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin: 0 0 0 -12.5px;
	@media (max-width: 1152px) {
		margin: 0 0 0 -10px;
	}
	@media (max-width: 768px) {
		margin: 0 0 0 -7.5px;
	}
	@media (max-width: 375px) {
		margin: 0 0 0 -5px;
	}
`;

const Clause = styled.span`
	display: flex;
	flex-wrap: wrap;
	margin: 12.5px 0 0 0;
	@media (max-width: 1152px) {
		margin: 10px 0 0 0;
	}
	@media (max-width: 768px) {
		margin: 7.5px 0 0 0;
	}
	@media (max-width: 375px) {
		margin: 5px 0 0 0;
	}
`;

interface StackProps extends HTMLAttributes<HTMLDivElement> {
	index: number;
	value: StackOptionalType;
	onValueChange: (value: StackOptionalType) => void;
}

const defaltTopStackValue: TopStackType = {
	currentHabit: '',
	time: '',
	location: '',
};

function TopStack({
	index = 0,
	value = defaltTopStackValue,
	onValueChange,
	className,
}: StackProps) {
	const label = `Stack #${index + 1}`;
	const { currentHabit, location, time } = useMemo(() => value, []);
	const onValueChangeHandler = (obj: StackOptionalType) => {
		if (onValueChange) {
			onValueChange({ ...value, ...obj });
		}
	};
	return (
		<Container className={className}>
			<Label>{label}</Label>
			<Sentence>
				<Clause>
					<Text>I will</Text>
					<Input
						placeholder={stackPlaceholder[0].currentHabit}
						hint="(current habit)"
						type="text"
						value={currentHabit}
						onValueChange={(currentHabit) =>
							onValueChangeHandler({ currentHabit })
						}
					/>
				</Clause>
				<Clause>
					<Text>at</Text>
					<Input
						placeholder={stackPlaceholder[0].time}
						hint="(time)"
						type="time"
						value={time}
						onValueChange={(time) => onValueChangeHandler({ time })}
					/>
				</Clause>
				<Clause>
					<Text>in</Text>
					<Input
						placeholder={stackPlaceholder[0].location}
						hint="(location)"
						type="text"
						value={location}
						onValueChange={(location) => onValueChangeHandler({ location })}
					/>
				</Clause>
			</Sentence>
		</Container>
	);
}

const defaltTailStackValue: TailStackType = {
	currentHabit: '',
	nextHabit: '',
	time: '',
	location: '',
};

function TailStack({
	index = 0,
	value = defaltTailStackValue,
	onValueChange,
	className,
}: StackProps) {
	const label = `Stack #${index + 1}`;
	const { currentHabit, nextHabit, location, time } = useMemo(() => value, []);
	const onValueChangeHandler = (obj: StackOptionalType) => {
		onValueChange({ ...value, ...obj });
	};
	const placeholderIndex = index >= 9 ? 10 : index;

	return (
		<Container className={className}>
			<Label>{label}</Label>
			<Sentence>
				<Clause>
					<Text>After</Text>
					<Input
						placeholder={stackPlaceholder[placeholderIndex].currentHabit}
						hint="(current habit)"
						type="text"
						value={currentHabit}
						onValueChange={(currentHabit) =>
							onValueChangeHandler({ currentHabit })
						}
					/>
				</Clause>
				<Clause>
					<Text>I will</Text>
					<Input
						placeholder={stackPlaceholder[placeholderIndex].nextHabit}
						hint="(next habit)"
						type="text"
						value={nextHabit}
						onValueChange={(nextHabit) => onValueChangeHandler({ nextHabit })}
					/>
				</Clause>
				<Clause>
					<Text>at</Text>
					<Input
						placeholder={stackPlaceholder[placeholderIndex].time}
						hint="(time)"
						type="time"
						value={time}
						onValueChange={(time) => onValueChangeHandler({ time })}
					/>
				</Clause>
				<Clause>
					<Text>in</Text>
					<Input
						placeholder={stackPlaceholder[placeholderIndex].location}
						hint="(location)"
						type="text"
						value={location}
						onValueChange={(location) => onValueChangeHandler({ location })}
					/>
				</Clause>
			</Sentence>
		</Container>
	);
}

export default function Stack({ index = 0, ...props }: StackProps) {
	if (index <= 0) return <TopStack index={index} {...props} />;
	return <TailStack index={index} {...props} />;
}
