import React from 'react';
import './Table.css';
import { TableData } from '../TableData/TableData';
import { TiTick } from 'react-icons/ti';
import { FiSquare } from 'react-icons/fi';

export const Table = ({ tableData = [], tableHeadings = [], setActive }) => {
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
				data={
					tableDataItem.active ? (
						<TiTick />
					) : (
						<FiSquare
							onClick={() => setActive(tableDataItem.id, 'active', true)}
						/>
					)
				}
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
};
