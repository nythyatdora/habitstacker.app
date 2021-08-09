import { between } from 'polished';
import styled from 'styled-components';

const H1 = styled.div`
	font-size: ${between('38px', '94px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 38px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 94px;
	}
`;

const H2 = styled.div`
	font-size: ${between('32px', '72px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 32px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 72px;
	}
`;

const H3 = styled.div`
	font-size: ${between('28px', '54px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 28px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 54px;
	}
`;

const H4 = styled.div`
	font-size: ${between('26px', '42px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 26px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 42px;
	}
`;

const H5 = styled.div`
	font-size: ${between('24px', '32px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 24px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 32px;
	}
`;

const H6 = styled.div`
	font-size: ${between('20px', '24px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 20px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 24px;
	}
`;

const BigBody = styled.div`
	font-size: ${between('24px', '32px', '320px', '1152px')};
	@media only screen and (max-width: 320px) {
		font-size: 22px;
	}
	@media only screen and (min-width: 1152px) {
		font-size: 28px;
	}
`;

export default function Typography() {
	return (
		<>
			<H1>Text</H1>
			<H2>Text</H2>
			<H3>Text</H3>
			<H4>Text</H4>
			<H5>Text</H5>
			<H6>Text</H6>
			<BigBody>Text</BigBody>
		</>
	);
}
