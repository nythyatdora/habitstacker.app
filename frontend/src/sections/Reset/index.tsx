import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { InlineIcon } from '@iconify/react/dist/offline';
import arrowClockwiseFill from '@iconify/icons-ph/arrow-clockwise-fill';

import { useDispatch } from 'react-redux';
import { reset } from '@redux/features/habitStacks';

const Container = styled.div`
	position: fixed;
	bottom: 98px;
	right: 66px;
	@media (max-width: 1152px) {
		bottom: 78px;
		right: 53px;
	}
	@media (max-width: 768px) {
		bottom: 78px;
		right: 44px;
	}
	@media (max-width: 375px) {
		bottom: 68px;
		right: 32px;
	}
`;

const Button = styled.div`
	width: 68px;
	height: 68px;
	background-color: white;
	border: solid 3px #131313;
	border-radius: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	&:hover {
		background-color: #131313;
		[data-rest-icon] {
			color: #ffffff;
		}
	}
	&:active {
		background-color: #2b2b2b;
		[data-rest-icon] {
			color: #ffffff;
		}
	}
	@media (max-width: 1152px) {
		width: 58px;
		height: 58px;
	}
	@media (max-width: 768px) {
		width: 48px;
		height: 48px;
		border-width: 2px;
	}
	@media (max-width: 375px) {
		width: 38px;
		height: 38px;
		border-width: 2px;
	}
`;

const Icon = styled(InlineIcon)`
	color: #131313;
	font-size: 42px;
	@media (max-width: 1152px) {
		font-size: 38px;
	}
	@media (max-width: 768px) {
		font-size: 32px;
	}
	@media (max-width: 375px) {
		font-size: 22px;
	}
`;

type ResetProps = HTMLAttributes<HTMLDivElement>;

export default function Reset({ className }: ResetProps) {
	const dispatch = useDispatch();

	return (
		<Container className={className}>
			<Button
				onClick={() => {
					dispatch(reset());
				}}
			>
				<Icon icon={arrowClockwiseFill} data-rest-icon />
			</Button>
		</Container>
	);
}
