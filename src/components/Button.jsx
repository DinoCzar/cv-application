function Button({
	text = 'Submit',
	color = 'white',
	fontSize = 12,
	handleClick,
	backgroundColor = '#082f49',
	border = 'none',
	borderRadius = '10px',
	padding = '10px',
	paddingLeft = '20px',
	paddingRight = '20px'
}) {
	const buttonStyle = {
		color: color,
		fontSize: fontSize + 'px',
		backgroundColor: backgroundColor,
		border: border,
		borderRadius: borderRadius,
		padding: padding,
		paddingLeft: paddingLeft,
		paddingRight: paddingRight
	};

	return (
		<button
			onClick={() => handleClick('https://www.theodinproject.com')}
			style={buttonStyle}
		>
			{text}
		</button>
	);
}
export default Button;
