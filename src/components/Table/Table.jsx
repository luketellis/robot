import React from 'react';
import TableData from '../TableData/TableData';
import './Table.css';

function Table(props) {
	const tableHeadings = props.tableHeadings;
	const headerRowItems = tableHeadings.map((tableHeading, index) => (
		<TableData key={index} data={tableHeading} headerRowType={true}></TableData>
	));

	const tableData = props.tableData;
	const dataItems = tableData.map((tableDataItem, index) => (
		<TableData
			key={index}
			data={tableDataItem}
			headerRowType={false}
		></TableData>
	));

	return (
		<table className="table">
			<thead>
				<tr>{headerRowItems}</tr>
			</thead>

			<tbody className="table">
				<tr>{dataItems}</tr>
			</tbody>
		</table>
	);
}

export default Table;
