import React from 'react';

export const TextInput = ({ ...props }) => {
	return (
		<span>
			<input {...props} />
		</span>
	);
};

export default TextInput;
