import { useState, MouseEventHandler } from 'react';
import styled from 'styled-components';

import LogoComponent from '@components/Logo';
import ButtonIconText from '@components/Button/IconText';

import { InlineIcon } from '@iconify/react/dist/offline';
import arrowCircleDownFill from '@iconify/icons-ph/arrow-circle-down-fill';
// import cubeFill from '@iconify/icons-ph/cube-fill';
import exportFill from '@iconify/icons-ph/export-fill';

import { useViewport } from '@hooks/useViewport';

import { useDispatch } from 'react-redux';
import { showModal } from '@redux/features/modal';

const Container = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	z-index: 600;
	box-sizing: border-box;
`;

const Inner = styled.div`
	margin: 48px 0;
	padding: 0 66px;
	@media (max-width: 1152px) {
		margin: 43px 0;
		padding: 0 53px;
	}
	@media (max-width: 768px) {
		margin: 48px 0;
		padding: 0 44px;
	}
	@media (max-width: 375px) {
		margin: 32px 0;
		padding: 0 32px;
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

const Logo = styled(LogoComponent)`
	position: relative;
	top: 0;
	z-index: 550;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
`;

const Import = styled(ButtonIconText)``;

const Export = styled(ButtonIconText)`
	margin-left: 12px;
	@media (max-width: 768px) {
		margin-left: 0;
		margin-top: 18px;
	}

	@media (max-width: 375px) {
		margin-left: 0;
		margin-top: 16px;
	}
`;

const Hamburger = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Icon = styled(InlineIcon)`
	position: relative;
	top: 0;
	z-index: 550;
	font-size: 38px;
	@media (max-width: 375px) {
		font-size: 30px;
	}
	&:active {
		color: #2b2b2b;
	}
	&[data-toggle='true'] {
		transform: rotate(180deg);
		transition: transform 0.2s ease-in;
	}
	&[data-toggle='false'] {
		transform: rotate(0deg);
		transition: transform 0.2s ease-in;
	}
`;

const Menu = styled.div`
	width: 100%;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 0;
	z-index: 500;
	background-color: white;
	border-bottom-style: solid;
	border-bottom-width: 1px;
	border-bottom-color: #121212;
	@media (max-width: 768px) {
		margin: 0 0;
		padding: 132px 44px 48px 44px;
	}
	@media (max-width: 375px) {
		margin: 0 0;
		padding: 96px 32px 32px 32px;
	}
	&[data-toggle='false'] {
		display: none;
	}
`;

export default function Navigation() {
	const { width } = useViewport();
	const [toggleMenu, setToggleMenu] = useState(false);
	const dispatch = useDispatch();
	const isTablet = width <= 768;

	const onExportClickHandler = () => {
		dispatch(showModal());
	};

	return (
		<Container>
			<Inner>
				<Row>
					<Logo />
					{!isTablet ? (
						<Buttons>
							{/* <Import icon={cubeFill} text="import" /> */}
							<Export
								icon={exportFill}
								text="export"
								onClick={onExportClickHandler}
							/>
						</Buttons>
					) : (
						<Hamburger onClick={() => setToggleMenu(!toggleMenu)}>
							<Icon icon={arrowCircleDownFill} data-toggle={toggleMenu} />
						</Hamburger>
					)}
				</Row>
			</Inner>
			{isTablet && (
				<Menu data-toggle={toggleMenu}>
					{/* <Import icon={cubeFill} text="import" /> */}
					<Export
						icon={exportFill}
						text="export"
						onClick={onExportClickHandler}
					/>
				</Menu>
			)}
		</Container>
	);
}
