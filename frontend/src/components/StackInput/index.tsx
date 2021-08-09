import { useState, useMemo, useEffect, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import ResizableInput from '@components/ResizeableInput';
import HintComponent from '@components/Text/Hint';

const Container = styled.span`
	box-sizing: border-box;
	border: dashed 2.5px #121212;
	border-radius: 12px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	height: fit-content;
	min-height: 128px;
	&:focus-within {
		border-width: 3px;
	}
	@media (max-width: 1152px) {
		min-height: 99px;
	}
	@media (max-width: 768px) {
		min-height: 83px;
	}
	@media (max-width: 375px) {
		min-height: 62px;
	}
`;

const Border = styled.div`
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: stretch;
	margin: 0 22px;
	border-bottom: dashed 2.5px #121212;
`;

const Input = styled(ResizableInput)`
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	user-select: none;
	text-align: center;
	font-size: 64px;
	font-weight: 900;
	@media (max-width: 1152px) {
		font-size: 48px;
	}
	@media (max-width: 768px) {
		font-size: 36px;
	}
	@media (max-width: 375px) {
		font-size: 24px;
	}
	&::placeholder {
		color: #d3d3d3;
	}
`;

const Hint = styled(HintComponent)`
	padding: 8px 0 18px;
	@media (max-width: 1152px) {
		padding: 6px 0 14px;
	}
	@media (max-width: 768px) {
		padding: 6px 0 12px;
	}
	@media (max-width: 375px) {
		padding: 4px 0 10px;
	}
`;

const TextInputComponent = styled.div`
	word-break: break-all;
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	user-select: none;
	text-align: center;
	font-size: 64px;
	font-weight: 900;
	@media (max-width: 1152px) {
		font-size: 48px;
	}
	@media (max-width: 768px) {
		font-size: 36px;
	}
	@media (max-width: 375px) {
		font-size: 24px;
	}
	&:empty:before {
		content: attr(placeholder);
		position: relative;
		top: 0;
		z-index: -999;
		color: lightgray;
		background-color: transparent;
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
`;

const TimeSeperator = styled.span`
	user-select: none;
	padding: 0 10px;
	font-size: 56px;
	font-weight: 900;
	@media (max-width: 1152px) {
		font-size: 48px;
	}
	@media (max-width: 768px) {
		font-size: 36px;
	}
	@media (max-width: 375px) {
		font-size: 24px;
	}
`;

interface InputTypeProps extends InputHTMLAttributes<HTMLInputElement> {
	onValueChange?: (value: string) => void;
}

interface StackInputProps extends InputTypeProps {
	type: 'text' | 'time';
	hint: string;
}

function TextInput({ value, onValueChange, placeholder }: InputTypeProps) {
	return (
		<TextInputComponent
			contentEditable
			suppressContentEditableWarning
			placeholder={placeholder}
			onInput={(event) => {
				if (onValueChange) {
					onValueChange(event.currentTarget.textContent || '');
				}
			}}
		>
			{value}
		</TextInputComponent>
	);
}

function NumberInput({ value = '', onValueChange, ...props }: InputTypeProps) {
	return (
		<Input
			type="number"
			placeholderIsMinWidth
			value={value}
			onKeyPress={(event) => {
				if (!/^[0-9]$/i.test(event.key)) {
					return;
				}
				event.preventDefault();
				if (onValueChange) {
					const current = Number(String(value).slice(1) + event.key);
					if (current > Number(event.currentTarget.max)) return;
					if (current < 10) onValueChange(String(current).padStart(2, '0'));
					else onValueChange(String(current));
				}
			}}
			onChange={(event) => {
				if (onValueChange) {
					let currentHour = event.currentTarget.value;
					currentHour =
						parseInt(currentHour, 10) < 10
							? String(currentHour).padStart(2, '0')
							: currentHour;
					onValueChange(currentHour);
				}
			}}
			{...props}
		/>
	);
}

function TimeInput({
	value = '',
	onValueChange,
	placeholder = '00:00',
}: InputTypeProps) {
	const [memoHour = '', memoMinute = ''] = useMemo(
		() => String(value).split(':'),
		[]
	);
	const [hour, setHour] = useState(memoHour);
	const [minute, setMinute] = useState(memoMinute);
	const [hourPlaceholder, minutePlaceholder] = String(placeholder).split(':');
	useEffect(() => {
		if (onValueChange) {
			onValueChange(`${hour.padStart(2, '0')}:${minute.padStart(2, '0')}`);
		}
	}, [hour, minute]);
	return (
		<Row>
			<NumberInput
				min={0}
				max={23}
				placeholder={hourPlaceholder}
				value={hour}
				onValueChange={(hour) => setHour(hour)}
			/>
			<TimeSeperator>:</TimeSeperator>
			<NumberInput
				min={0}
				max={59}
				value={minute}
				placeholder={minutePlaceholder}
				onValueChange={(minute) => setMinute(minute)}
			/>
		</Row>
	);
}
function InputType({ type, ...props }: InputTypeProps) {
	if (type === 'text') return <TextInput {...props} />;
	if (type === 'time') return <TimeInput {...props} />;
	return null;
}

export default function StackInput({
	className,
	value,
	onValueChange,
	placeholder = '',
	type,
	hint,
}: StackInputProps) {
	return (
		<Container className={className}>
			<Border>
				<InputType
					type={type}
					value={value}
					onValueChange={onValueChange}
					placeholder={placeholder}
				/>
			</Border>
			<Hint>{hint}</Hint>
		</Container>
	);
}
