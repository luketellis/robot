import React from 'react';
import './Button.css';

function Button({
	label = 'I am a button',
	color = 'primary',
	variant = 'contained',
	className,
	...props
}) {
	return (
		<button className="" {...props}>
			{label}
		</button>
	);
}

export default Button;
