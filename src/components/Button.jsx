function Button({
	text = 'text',
	color = 'white',
	fontSize = 14,
	handleClick,
	backgroundColor = '#082f49',
	border = 'none',
	borderRadius = '15px',
	padding = '15px',
	width = '85px'
}) {
	const buttonStyle = {
		color: color,
		fontSize: fontSize + 'px',
		backgroundColor: backgroundColor,
		border: border,
		borderRadius: borderRadius,
		padding: padding,
		width: width
	};

	return (
		<button
			onClick={() => handleClick()}
			style={buttonStyle}
		>
			{text}
		</button>
	);
}
export default Button;