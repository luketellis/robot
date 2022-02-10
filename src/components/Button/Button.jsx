import React from 'react';
import './Button.css';

export const Button = ({ label = 'I am a button', ...props }) => {
	return (
		<button className="button" {...props}>
			{label}
		</button>
	);
};
