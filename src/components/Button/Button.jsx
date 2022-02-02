import React from 'react';

export const Button = ({ label = 'I am a button', ...props }) => {
	return <button {...props}>{label}</button>;
};
