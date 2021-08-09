import styled from 'styled-components';

const Container = styled.div`
	user-select: none;
`;

const Text = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	align-items: center;
	color: #121212;
	font-size: 18px;
	@media (max-width: 1152px) {
		font-size: 16px;
	}
	@media (max-width: 768px) {
		font-size: 14px;
	}
	@media (max-width: 375px) {
		font-size: 10px;
	}
`;

const Left = styled.span`
	white-space: nowrap;
	font-weight: 900;
	border: dashed 2px #121212;
	padding: 4px;
	border-radius: 8px;
`;

const Mid = styled.span`
	color: #121212;
	font-weight: 400;
	padding: 0 8px;
	@media (max-width: 1152px) {
		padding: 0 6px;
	}
	@media (max-width: 768px) {
		padding: 0 6px;
	}
	@media (max-width: 375px) {
		padding: 0 3px;
	}
`;

const Right = styled.a`
	white-space: nowrap;
	color: #121212;
	font-family: 'Krasar' !important;
	font-weight: 900;
	text-decoration: none;
	&:hover {
		color: #2b2b2b;
		text-decoration: underline;
	}
`;

export default function FooterLogo() {
	return (
		<Container>
			<Text>
				<Left>Habit Stacker</Left>
				<Mid>by</Mid>
				<Right href="https://nythyatdora.dev">នី ធ្យត្សដូរ៉ា</Right>
			</Text>
		</Container>
	);
}
