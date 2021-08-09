import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { IconifyIcon, InlineIcon } from '@iconify/react/dist/offline';

const Container = styled.div`
	width: 76px;
	height: 58px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	box-sizing: border-box;
	border: solid 3px #121212;
	border-radius: 58px;
	background-color: #ffffff;
	&:hover {
		background-color: #121212;
		[data-pill-icon] {
			color: #ffffff;
		}
	}
	&:active {
		background-color: #2b2b2b;
		border-color: #121212;
		[data-pill-icon] {
			color: #ffffff;
		}
	}
	@media (max-width: 1152px) {
		width: 68px;
		height: 48px;
		.icon {
			font-size: 28px;
		}
	}
	@media (max-width: 768px) {
		border-width: 2.5px;
		width: 50px;
		height: 36px;
		.icon {
			font-size: 22px;
		}
	}
	@media (max-width: 375px) {
		border-width: 2px;
		width: 38px;
		height: 28px;
		.icon {
			font-size: 18px;
		}
	}
`;

const Icon = styled(InlineIcon)`
	color: #121212;
	font-size: 32px;
`;

interface IconPillProps extends HTMLAttributes<HTMLDivElement> {
	icon: IconifyIcon | string;
}

export default function IconPill({ className, icon, onClick }: IconPillProps) {
	return (
		<Container className={className} onClick={onClick}>
			<Icon icon={icon} data-pill-icon />
		</Container>
	);
}
