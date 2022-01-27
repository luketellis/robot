import React from 'react';

function Button({ label = 'I am a button', ...props }) {
	return (
		<button className="" {...props}>
			{label}
		</button>
	);
}

export default Button;
