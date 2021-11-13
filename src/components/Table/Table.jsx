import React from 'react';
import TableData from '../TableData/TableData';
import './Table.css';
import { TiTick } from 'react-icons/ti';

function Table({ tableData = [], tableHeadings = [] }) {
	const headerRowElements = tableHeadings.map((tableHeading, index) => (
		<TableData key={index} data={tableHeading} headerRowType={true}></TableData>
	));

	const dataRowElements = tableData.map((tableDataItem, index) => (
		<tr key={index} className={`robot${tableDataItem.id}`}>
			<TableData
				key={`${tableDataItem.id}-id`}
				data={tableDataItem.id}
				headerRowType={false}
			></TableData>
			<TableData
				key={`${tableDataItem.id}-coordinate`}
				data={JSON.stringify(tableDataItem.coordinate)}
				headerRowType={false}
			></TableData>
			<TableData
				key={`${tableDataItem.id}-direction`}
				data={tableDataItem.direction}
				headerRowType={false}
			></TableData>
			<TableData
				key={`${tableDataItem.id}-active`}
				data={tableDataItem.active && <TiTick />}
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
