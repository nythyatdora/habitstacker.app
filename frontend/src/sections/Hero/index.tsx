import { HTMLAttributes } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import figureDesktop from '@assets/static/figure-hero-desktop.png';

import BigTextComponent from '@components/Text/Big';
import LabelComponent from '@components/Text/Label';
import GoalsComponent from '@components/Goals';

import { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { updateGoals } from '@redux/features/habitStacks';

const Container = styled.section`
	min-height: 80vh;
	padding: 0 66px;
	@media (max-width: 1152px) {
		padding: 0 53px;
	}
	@media (max-width: 768px) {
		padding: 0 44px;
	}
	@media (max-width: 375px) {
		padding: 0 32px;
	}
`;

const Inner = styled.div`
	padding-top: 305px;
	display: grid;
	grid-template: 'left right';
	grid-template-columns: 1fr 1fr;
	@media (max-width: 1152px) {
		padding-top: 200px;
	}
	@media (max-width: 425px) {
		grid-template: 'left left';
	}
`;

const Left = styled.div`
	grid-area: left;
`;

const Right = styled.div`
	grid-area: right;
	display: flex;
	justify-content: flex-end;
	@media (max-width: 425px) {
		display: none;
	}
`;

const Label = styled(LabelComponent)`
	width: fit-content;
	margin-bottom: 10px;
	@media (max-width: 1152px) {
		margin-bottom: 10px;
	}
	@media (max-width: 768px) {
		margin-bottom: 7.5px;
	}
	@media (max-width: 375px) {
		margin-bottom: 5px;
	}
`;

const BigText = styled(BigTextComponent)`
	width: fit-content;
`;

const Goals = styled(GoalsComponent)`
	padding-bottom: 102px;
	@media (max-width: 1152px) {
		padding-bottom: 53px;
	}
	@media (max-width: 768px) {
		padding-bottom: 41px;
	}
	@media (max-width: 375px) {
		padding-bottom: 38px;
	}
`;

const Figure = styled.div`
	user-select: none;
	position: relative;
	right: 0;
	transform: translateY(-30%);
	width: 438px;
	height: 587px;
	@media (max-width: 1152px) {
		width: 349px;
		height: 498px;
		transform: translateY(-25%);
	}
	@media (max-width: 768px) {
		transform: translateY(-25%);
		width: 244px;
		height: 348px;
	}
	@media (max-width: 425px) {
		width: 202px;
		height: 288px;
	}
`;

type HeroProps = HTMLAttributes<HTMLDivElement>;

export default function Hero({ className }: HeroProps) {
	const { goals } = useSelector((state: RootState) => state.habitStacks);
	const dispatch = useDispatch();

	return (
		<Container className={className}>
			<Inner>
				<Left>
					<Label>Goals</Label>
					<BigText>
						What are you <u>trying</u>
						<br />
						to be <u>good</u> at? 🤔
					</BigText>
					<Goals
						value={goals}
						onValueChange={(value) => {
							dispatch(updateGoals(value));
						}}
					/>
				</Left>
				<Right>
					<Figure>
						<Image src={figureDesktop} layout="fill" />
					</Figure>
				</Right>
			</Inner>
		</Container>
	);
}
