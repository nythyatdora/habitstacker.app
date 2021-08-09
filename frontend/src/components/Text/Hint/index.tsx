import styled from 'styled-components';

export default styled.span`
	user-select: none;
	white-space: nowrap;
	font-size: 14px;
	font-weight: 500;
	text-align: center;
	text-transform: lowercase;
	font-style: italic;
	@media (max-width: 1152px) {
		font-size: 12px;
	}
	@media (max-width: 768px) {
		font-size: 10px;
	}
	@media (max-width: 375px) {
		font-size: 7px;
	}
`;
