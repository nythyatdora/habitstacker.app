import { useMemo, useRef, HTMLAttributes, MouseEventHandler } from 'react';
import styled from 'styled-components';
import { InlineIcon } from '@iconify/react/dist/offline';
import xCircleFill from '@iconify/icons-ph/x-circle-fill';

const Container = styled.div`
	height: 58px;
	border: 1px solid #121212;
	border-radius: 58px;
	background: #ffffff;
	display: flex;
	flex-direction: row;
	box-sizing: border-box;
	transition: border-width 0.04s ease-in-out;
	&:hover {
		border-width: 3px;
	}
	@media (max-width: 1152px) {
		height: 48px;
	}
	@media (max-width: 768px) {
		height: 36px;
		&:hover {
			border-width: 2.5px;
		}
	}
	@media (max-width: 375px) {
		height: 28px;
		&:hover {
			border-width: 2px;
		}
	}
`;

const Left = styled.div`
	margin: 0 22px;
	display: flex;
	flex: 1;
	justify-content: stretch;
	align-items: center;
	@media (max-width: 1152px) {
		margin: 0 20px;
	}
	@media (max-width: 768px) {
		margin: 0 14px;
	}
	@media (max-width: 375px) {
		margin: 0 10px;
	}
`;

const Text = styled.div`
	padding: 0px;
	margin: 0;
	border: none;
	outline: none;
	user-select: none;
	font-weight: bold;
	font-size: 18px;
	letter-spacing: 1px;
	text-align: center;
	@media (max-width: 1152px) {
		font-size: 14px;
		letter-spacing: 0.8px;
	}
	@media (max-width: 768px) {
		font-size: 12px;
		letter-spacing: 0.6px;
	}
	@media (max-width: 375px) {
		font-size: 10px;
		letter-spacing: 0.6px;
	}
	&:empty:before {
		text-transform: lowercase;
		content: attr(placeholder);
		position: relative;
		top: 0;
		color: lightgray;
		background-color: transparent;
	}
`;

const Right = styled.div`
	z-index: 100;
	position: relative;
	right: 12px;
	display: flex;
	align-items: center;
	@media (max-width: 1152px) {
		right: 12px;
	}
	@media (max-width: 768px) {
		right: 10px;
	}
	@media (max-width: 375px) {
		right: 8px;
	}
`;

const Remove = styled(InlineIcon)`
	user-select: none;
	cursor: pointer;
	color: #121212;
	font-size: 26px;
	@media (max-width: 1152px) {
		font-size: 23px;
	}
	@media (max-width: 768px) {
		font-size: 19px;
	}
	@media (max-width: 375px) {
		font-size: 16px;
	}
	&:active {
		color: #2b2b2b;
	}
`;

interface PillProps extends HTMLAttributes<HTMLDivElement> {
	value?: string;
	onValueChange?: (value: string) => void;
	onRemoveClick?: MouseEventHandler<HTMLDivElement>;
}

export default function Pill({
	className,
	placeholder = '',
	value = '',
	onValueChange,
	onRemoveClick,
}: PillProps) {
	const inputRef = useRef<HTMLInputElement>(null);
	const memoValue = useMemo(() => value, []);
	return (
		<Container
			className={className}
			onClick={() => {
				inputRef.current?.focus();
			}}
		>
			<Left>
				<Text
					ref={inputRef}
					contentEditable
					suppressContentEditableWarning
					placeholder={placeholder}
					onInput={(event) => {
						if (onValueChange) {
							onValueChange(event.currentTarget.textContent || '');
						}
					}}
					onKeyPress={(event) => {
						if (event.key === 'Enter') event.preventDefault();
					}}
				>
					{memoValue}
				</Text>
			</Left>
			<Right
				onClick={(event) => {
					event.stopPropagation();
					if (onRemoveClick) {
						onRemoveClick(event);
					}
				}}
			>
				<Remove icon={xCircleFill} />
			</Right>
		</Container>
	);
}
