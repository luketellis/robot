import React from 'react';
import './Error.css';

function Error({ text = '' }) {
	return <span className="error">{text}</span>;
}

export default Error;
