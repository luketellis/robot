import React from 'react';
import './TableData.css';

function TableData({ headerRowType = 'false', data }) {
	return (
		<React.Fragment>
			{headerRowType ? <th>{data}</th> : <td>{data}</td>}
		</React.Fragment>
	);
}

export default TableData;
