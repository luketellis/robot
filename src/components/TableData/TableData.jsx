import React from 'react';

export const TableData = ({ headerRowType = 'false', data }) => {
	return (
		<React.Fragment>
			{headerRowType ? (
				<th className="tableHeader">{data}</th>
			) : (
				<td className="tableData">{data}</td>
			)}
		</React.Fragment>
	);
};
