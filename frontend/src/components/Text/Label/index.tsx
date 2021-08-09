import { HTMLAttributes } from 'react';
import styled from 'styled-components';

const Text = styled.div`
	user-select: none;
	text-transform: uppercase;
	font-size: 14px;
	font-weight: 900;
	letter-spacing: 4px;
	@media (max-width: 1152px) {
		font-size: 12px;
		letter-spacing: 2px;
	}
	@media (max-width: 768px) {
		font-size: 10px;
		letter-spacing: 1.5px;
	}
	@media (max-width: 375px) {
		font-size: 7px;
		letter-spacing: 1px;
	}
`;

type LabelProps = HTMLAttributes<HTMLDivElement>;

export default function Label({ children, className }: LabelProps) {
	return <Text className={className}>{children}</Text>;
}
