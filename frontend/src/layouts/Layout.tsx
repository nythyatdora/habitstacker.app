import styled from 'styled-components';

import Navigation from '@components/Navigation';
import HeroSection from '@sections/Hero';
import StackerSection from '@sections/Stacker';
import FooterSection from '@sections/Footer';
import Modal from '@components/Modal/Export';
import ResetSection from '@sections/Reset';

const Container = styled.div``;

const Hero = styled(HeroSection)``;

const Stacker = styled(StackerSection)`
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

const Footer = styled(FooterSection)``;

const Main = styled.main``;

const Reset = styled(ResetSection)``;

export default function Layout() {
	return (
		<>
			<Container>
				<Navigation />
				<Main>
					<Hero />
					<Stacker />
				</Main>
				<Footer />
			</Container>
			<Reset />
			<Modal />
		</>
	);
}
