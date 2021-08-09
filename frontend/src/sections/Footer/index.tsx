import styled from 'styled-components';
import FooterLogo from '@components/FooterLogo';

const Container = styled.footer`
	margin: 56px 0;
	padding: 0 66px;
	@media (max-width: 1152px) {
		margin: 48px 0;
		padding: 0 53px;
	}
	@media (max-width: 768px) {
		margin: 48px 0;
		padding: 0 44px;
	}
	@media (max-width: 375px) {
		margin: 44px 0;
		padding: 0 32px;
	}
`;

const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;

const Artwork = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-end;
	align-items: center;
	text-align: right;
	user-select: none;
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

const Link = styled.a`
	padding-left: 6px;
	white-space: nowrap;
	cursor: pointer;
	font-weight: 900;
	color: #121212;
	text-decoration: none;
	&:hover {
		color: #2b2b2b;
		text-decoration: underline;
	}
	@media (max-width: 375px) {
		padding-left: 4px;
	}
`;

export default function Footer() {
	return (
		<Container>
			<Row>
				<FooterLogo />
				<Artwork>
					illustration by{' '}
					<Link href="https://www.openpeeps.com/">Pablo Stanley</Link>.
				</Artwork>
			</Row>
		</Container>
	);
}
