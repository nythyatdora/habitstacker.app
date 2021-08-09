import InputAutoResize, { AutosizeInputProps } from 'react-input-autosize';

type ResizeableInput = AutosizeInputProps;

const defaultStyle = {
	height: '100%',
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'stretch',
};

export default function ResizableInput({
	style,
	className,
	...props
}: ResizeableInput) {
	return (
		<InputAutoResize
			style={defaultStyle}
			inputStyle={style}
			inputClassName={className}
			{...props}
		/>
	);
}
