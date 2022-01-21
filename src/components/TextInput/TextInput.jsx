import React from 'react';

function TextInput({ ...props }) {
	return (
		<span className="">
			<input {...props} />
		</span>
	);
}

export default TextInput;
