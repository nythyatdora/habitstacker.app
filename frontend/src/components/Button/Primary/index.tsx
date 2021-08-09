import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Button = styled.div`
	box-sizing: border-box;
	cursor: pointer;
	border: solid 3px #121212;
	border-radius: 12px;
	max-height: 128px;
	padding: 52px 64px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.12s ease-in-out;
	color: #ffffff;
	background-color: #121212;
	&:hover {
		background-color: #2b2b2b;
		[data-button-text] {
			transition: color 0.04s ease-in-out;
		}
	}
	&:active {
		background-color: #121212;
		border-color: #121212;
		[data-button-text] {
			color: #ffffff;
		}
	}
	@media (max-width: 1152px) {
		max-height: 95px;
		padding: 38px 56px;
		border-radius: 12px;
		[data-button-text] {
			font-size: 16px;
		}
	}
	@media (max-width: 768px) {
		border-width: 2.5px;
		max-height: 83px;
		padding: 33px 40px;
		border-radius: 10px;
		[data-button-text] {
			font-size: 14px;
		}
	}
	@media (max-width: 375px) {
		border-width: 2px;
		max-height: 63px;
		padding: 24px 22px;
		border-radius: 8px;
		[data-button-text] {
			font-size: 12px;
		}
	}
`;
const Text = styled.div`
	user-select: none;
	font-size: 20px;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 1.98px;
`;

interface ButtonOutlineProps extends HTMLAttributes<HTMLDivElement> {
	text: string;
}

export default function ButtonPrimary({
	text,
	onClick,
	className,
}: ButtonOutlineProps) {
	return (
		<Button className={className} onClick={onClick}>
			<Text data-button-text>{text}</Text>
		</Button>
	);
}
