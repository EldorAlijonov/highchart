import React, { useState } from 'react';
import { InvoicesStyle } from './style';
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import tableData from "../../util/data.json"
import Dropdown from '../Dropdown';

const Invoices = () => {

    const [data, setData] = useState(tableData);

    const columns = [
        {
            id: "select-col",
            header: ({ table }) => (
                <input type="checkbox" />
            ),
            cell: ({ row }) => (
                <input type="checkbox" />
            )
        },
        {
            header: "Customer name",
            accessorKey: "customer_name",
            cell: ({ row }) => (
                <div className="customer">
                    <img src={`${row.original.img}`} alt={row.original.customer_name}
                        width={44}
                    />
                    <div className="item-header">
                        <h4>{row.original.customer_name}</h4>
                        <span>{row.original.customer_id}</span>
                    </div>
                </div>
            )
        },
        {
            header: "Date",
            accessorKey: "date",
        },
        {
            header: "Amount",
            accessorKey: "amount",
            cell: (text) => (
                <div className={`${text.getValue() > 0 ? "pilus" : "minus"}`}>
                    {text.getValue() > 0 ? `$${text.getValue()}` : `-$${-1 * text.getValue()}`}
                </div>
            )
        },
        {
            header: "Email",
            accessorKey: "email",
        },
        {
            header: "Product ID",
            accessorKey: "product_id",
        },
        {
            header: "Status",
            accessorKey: "status",
            cell: (text) => (
                <div className={`${text.getValue()}`}>
                    {text.getValue()}
                </div>
            )
        },
        {
            header: "Option",
            accessorKey: "option",
            cell: () => (
                <Dropdown width={"120px"} options={options} onSelect={handleSelect} title={"Details"} />
            )
        }
    ];


    const handleSelect = (option) => {
        console.log(`Selected: ${option}`);
    };

    const options = ['Option 1', 'Option 2', 'Option 3'];
    const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });

    return (
        <InvoicesStyle>
            <div className="card-header">
                <div className="item">
                    <h2>Invoices</h2>
                    <span>890,344 Invoices</span>
                </div>
                <button>
                    <BsFileEarmarkArrowDown size={20} />
                    Generate Report
                </button>
            </div>
            <table>
                <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => (
                                <th key={header.id}>
                                    {flexRender(header.column.columnDef.header, header.getContext())}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => (
                        <tr key={row.id}>
                            {row.getVisibleCells().map(cell => (
                                <td key={cell.id}>
                                    {flexRender(
                                        cell.column.columnDef.cell, cell.getContext()
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </InvoicesStyle>
    );
}

export default Invoices;
