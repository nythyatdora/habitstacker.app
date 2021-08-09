import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconifyIcon, InlineIcon } from '@iconify/react/dist/offline';

const Button = styled.div`
	cursor: pointer;
	background-color: #ffffff;
	border: solid 3px #121212;
	border-radius: 12px;
	padding: 18px 30px;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 0.12s ease-in-out;
	&:hover {
		background-color: #121212;
		[data-button-text] {
			color: #ffffff;
			transition: color 0.04s ease-in-out;
		}
		[data-button-icon] {
			color: #ffffff;
			transition: color 0.04s ease-in-out;
		}
	}
	&:active {
		background-color: #2b2b2b;
		border-color: #121212;
		[data-button-text] {
			color: #ffffff;
		}
		[data-button-icon] {
			color: #ffffff;
		}
	}
	@media (max-width: 1152px) {
		padding: 16px 26px;
		border-radius: 10px;
		[data-button-icon] {
			padding-right: 12px;
			font-size: 28px;
		}
		[data-button-text] {
			font-size: 14px;
			letter-spacing: 1.88px;
		}
	}
	@media (max-width: 768px) {
		border-width: 2.5px;
		padding: 14px 20px;
		border-radius: 10px;
		[data-button-icon] {
			padding-right: 8px;
			font-size: 20px;
		}
		[data-button-text] {
			font-size: 12px;
			letter-spacing: 1.68px;
		}
	}
	@media (max-width: 375px) {
		border-width: 2px;
		width: 100%;
		padding: 12px 0px;
		border-radius: 8px;
		[data-button-icon] {
			padding-right: 10px;
			font-size: 18px;
		}
		[data-button-text] {
			font-size: 10px;
			letter-spacing: 1.58px;
		}
	}
`;

const Text = styled.span`
	user-select: none;
	font-size: 16px;
	font-weight: 900;
	text-transform: uppercase;
	letter-spacing: 1.98px;
`;

const Icon = styled(InlineIcon)`
	padding-right: 12px;
	color: '#121212';
	font-size: 32px;
`;

interface IconTextProps extends HTMLAttributes<HTMLDivElement> {
	icon: IconifyIcon | string;
	text: string;
}

export default function IconText({
	className,
	icon,
	text,
	onClick,
}: IconTextProps) {
	return (
		<Button className={className} onClick={onClick}>
			<Icon icon={icon} data-button-icon />
			<Text data-button-text>{text}</Text>
		</Button>
	);
}
