import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import HintComponent from '@components/Text/Hint';
import NotionIconComponent from '@assets/icons/notion.svg';

import { RootState } from '@redux/store';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '@redux/features/modal';

const Unscrollable = createGlobalStyle`
	html {
		overflow-y: hidden;
	}
`;

const Container = styled.div`
	width: 100%;
	height: 100vh;
	position: fixed;
	top: 0;
	z-index: 700;
	display: none;
	justify-content: center;
	align-items: center;
	&[data-modal-is-toggle='true'] {
		display: flex;
	}
`;

const MaskBackground = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	background-color: rgba(16, 16, 16, 0.2);
	backdrop-filter: blur(2px);
`;

const Modal = styled.div`
	position: relative;
	z-index: 701;
	background-color: #fffdfc;
	border: solid 3px #131313;
	border-radius: 22px;
	padding: 50px 75px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	@media (max-width: 1152px) {
		padding: 45px 70px;
		border-radius: 18px;
	}
	@media (max-width: 768px) {
		padding: 35px 60px;
		border-radius: 16px;
	}
	@media (max-width: 375px) {
		padding: 25px 50px;
		border-radius: 14px;
	}
`;

const Group = styled.div``;

const Notion = styled.div`
	width: 125px;
	height: 125px;
	background-color: #fffdfc;
	border: dashed 3px #131313;
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	&:hover {
		border-style: solid;
	}
	&:active {
		background-color: #131313;
		path {
			fill: #ffffff;
		}
		span {
			color: #ffffff;
		}
	}
	@media (max-width: 1152px) {
		width: 115px;
		height: 115px;
	}
	@media (max-width: 768px) {
		width: 95px;
		height: 95px;
		border-width: 2px;
	}
	@media (max-width: 375px) {
		width: 75px;
		height: 75px;
		border-width: 2px;
	}
`;

const Hint = styled(HintComponent)`
	margin-top: 12px;
`;

const NotionIcon = styled(NotionIconComponent)`
	width: 75px;
	height: 75px;
	@media (max-width: 1152px) {
		width: 65px;
		height: 65px;
	}
	@media (max-width: 768px) {
		width: 55px;
		height: 55px;
	}
	@media (max-width: 375px) {
		width: 45px;
		height: 45px;
	}
`;

const Clipboard = styled.div`
	padding: 8px 12px;
	margin-top: 28px;
	border: solid 2px #131313;
	border-radius: 100px;
	@media (max-width: 1152px) {
		padding: 8px 12px;
		margin-top: 26px;
	}
	@media (max-width: 768px) {
		padding: 6px 10px;
		margin-top: 22px;
	}
	@media (max-width: 375px) {
		padding: 6px 10px;
		margin-top: 18px;
	}
`;

const Input = styled.input`
	display: flex;
	width: -webkit-fill-available;
	padding: 0;
	margin: 0;
	border: none;
	outline: none;
	user-select: none;
	text-align: center;
	font-size: 16px;
	font-weight: 300;
	background-color: transparent;
	@media (max-width: 1152px) {
		font-size: 14px;
	}
	@media (max-width: 768px) {
		font-size: 12px;
	}
	@media (max-width: 375px) {
		font-size: 10px;
	}
`;

export default function ModalExport() {
	const [link, setLink] = useState('');
	const { isToggle } = useSelector((state: RootState) => state.modal);
	const { goals, stacks } = useSelector(
		(state: RootState) => state.habitStacks
	);
	const dispatch = useDispatch();

	const onNotionExportHandler = async () => {
		const goalsFiltered = goals.map((item) => item.title);
		const stacksFiltered = stacks.map(({ uuid, ...item }) => ({
			...item,
		}));
		const response = await fetch(
			'http://localhost:4000/habitstacker/page/create',
			{
				method: 'POST',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					goals: goalsFiltered,
					stacks: stacksFiltered,
				}),
			}
		);
		const { url } = await response.json();
		setLink(url);
	};

	return (
		<Container data-modal-is-toggle={isToggle}>
			<MaskBackground
				onClick={() => {
					dispatch(hideModal());
				}}
			/>
			<Modal>
				<Group>
					<Notion onClick={onNotionExportHandler}>
						<NotionIcon />
						<Hint>(notion)</Hint>
					</Notion>
				</Group>
				<Clipboard>
					<Input
						placeholder="notion template link"
						value={link}
						onChange={(event) => {
							setLink(event.currentTarget.value);
						}}
					/>
				</Clipboard>
			</Modal>
		</Container>
	);
}
