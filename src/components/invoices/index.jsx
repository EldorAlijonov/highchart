import React, { useState } from 'react';
import { InvoicesStyle } from './style';
import { BsFileEarmarkArrowDown } from "react-icons/bs";
import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import tableData from "../../util/data.json";
import CustomDropdown from '../Dropdown';
import { useDispatch } from 'react-redux';
import { tableSelectedItems } from '../../redux/slice/tableSlice';


const Invoices = () => {

    const [selectedRows, setSelectedRows] = useState(tableData);
    const [data, setData] = useState(selectedRows);
    const [checkInput, setCheckInput] = useState()
    const handleChange = (e) => {
        setCheckInput(e.target.checked)
        let newData = selectedRows
        let newda = newData.map((item) => {
            return item.checked = e.target.checked
        })
    }
    const columns = [
        {
            id: "select-col",
            header: ({ data }) => (
                <> <input type="checkbox" checked={checkInput} onChange={(e) => handleChange(e)} /></>

            ),
            cell: ({ row }) => (
                <> <input type="checkbox" checked={row.original.checked} /></>
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
            cell: ({ row }) => (
                <CustomDropdown width={"120px"}
                    options={options} onSelect={(option) => handleSelect(option, row.id)}
                    title={"Details"} />
            )
        }
    ];


    const dispatch = useDispatch();

    const options = ['Details 1', 'Details 2', 'Details 3'];

    const handleSelect = (option, id) => {
        dispatch(tableSelectedItems({ option: options[option], rowId: id }));
    };

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
};

export default Invoices;
