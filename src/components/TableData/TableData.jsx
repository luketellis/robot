import React from 'react';
import './TableData.css';

function TableData({ headerRowType = 'false', data }) {
	return (
		<React.Fragment>
			{headerRowType ? (
				<th className="tableHeader">{data}</th>
			) : (
				<td className="tableData">{data}</td>
			)}
		</React.Fragment>
	);
}

export default TableData;