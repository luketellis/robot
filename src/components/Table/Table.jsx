import React from 'react';
import TableData from '../TableData/TableData';
import './Table.css';

function Table({ tableData = [], tableHeadings = [] }) {
	const headerRowElements = tableHeadings.map((tableHeading, index) => (
		<TableData key={index} data={tableHeading} headerRowType={true}></TableData>
	));

	const dataRowElements = tableData.map((tableDataItem, index) => (
		<tr key={index}>
			<TableData
				key={`${tableDataItem.id}a`}
				data={tableDataItem.id}
				headerRowType={false}
			></TableData>
			<TableData
				key={`${tableDataItem.id}b`}
				data={JSON.stringify(tableDataItem.coordinate)}
				headerRowType={false}
			></TableData>
			<TableData
				key={`${tableDataItem.id}c`}
				data={tableDataItem.direction}
				headerRowType={false}
			></TableData>
			<TableData
				key={`${tableDataItem.id}d`}
				data={JSON.stringify(tableDataItem.active)}
				headerRowType={false}
			></TableData>
		</tr>
	));

	return (
		<table className="table">
			<thead>
				<tr>{headerRowElements}</tr>
			</thead>

			<tbody className="table">{dataRowElements}</tbody>
		</table>
	);
}

export default Table;
