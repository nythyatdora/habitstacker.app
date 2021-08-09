import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Text = styled.div`
	user-select: none;
	font-size: 64px;
	font-weight: 900;
	line-height: normal;
	@media (max-width: 1152px) {
		font-size: 48px;
	}
	@media (max-width: 768px) {
		font-size: 36px;
	}
	@media (max-width: 375px) {
		font-size: 24px;
	}
`;

type BigTextProps = HTMLAttributes<HTMLDivElement>;

export default function BigText({ children, ...props }: BigTextProps) {
	return <Text {...props}>{children}</Text>;
}
