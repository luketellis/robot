import React from 'react';
import TableData from '../TableData/TableData';
import './Table.css';

function Table(props) {
	console.log(`DATA ITEMS ${JSON.stringify(props.tableData)}`);
	const tableHeadings = props.tableHeadings;
	const headerRowElements = tableHeadings.map((tableHeading, index) => (
		<TableData key={index} data={tableHeading} headerRowType={true}></TableData>
	));

	const tableData = props.tableData;
	const dataRowElements = tableData.map((tableDataItem, index) => (
		<tr>
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
				data={tableDataItem.active}
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
