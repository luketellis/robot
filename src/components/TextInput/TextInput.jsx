import React from 'react';

export const TextInput = ({ ...props }) => {
	return (
		<span className="">
			<input {...props} />
		</span>
	);
};

export default TextInput;
