import React from 'react';
import './Button.css';

function Button({ label = 'I am a button', ...props }) {
	return (
		<button className="" {...props}>
			{label}
		</button>
	);
}

export default Button;
