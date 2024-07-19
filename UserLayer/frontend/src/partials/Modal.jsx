//For admin dashboard

import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaTimesCircle, FaTrashAlt } from 'react-icons/fa';

const Modal = ({ show, onClose, data, onDelete, onVerify, onManage, user, onRefuse }) => {
    const [sortOrder, setSortOrder] = useState({ column: null, ascending: true });
    const [filterStatus, setFilterStatus] = useState('');

    let stateData = data;

    const loadUser = async () => {
        const result = await axios.get("http://localhost:8080/admin");
        return result;

    };
    const sortData = (column) => {
        if (column === sortOrder.column) {
            setSortOrder({ ...sortOrder, ascending: !sortOrder.ascending });
        } else {
            setSortOrder({ column, ascending: true });
        }
    };

    const filteredData = data.filter((item) => {
        return (item.status || '').toLowerCase().includes(filterStatus.toLowerCase());
    });

    const sortedData = filteredData.sort((a, b) => {
        const columnValueA = a[sortOrder.column];
        const columnValueB = b[sortOrder.column];
        if (typeof columnValueA === 'undefined' || columnValueA === null) {
            return 0; // or any other default value that you want to use
        }

        if (sortOrder.column === 'dateofDelivery') {
            return sortOrder.ascending
                ? new Date(columnValueA) - new Date(columnValueB)  // TODO: translate text to Date format
                : new Date(columnValueB) - new Date(columnValueA);
        } else {
            return sortOrder.ascending
                ? columnValueA.localeCompare(columnValueB)
                : columnValueB.localeCompare(columnValueA);
        }
    });

    //TODO: uppdate info for sorting
    return (
        <div className={`modal ${show ? 'show' : ''}`}>
            <div className="flex items-center justify-center h-full">
                <div className="py-4">
                    <table className="table w-full border shadow mx-auto">
                        <thead>
                        <tr>
                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => sortData('id')}
                            >
                                ID{sortOrder.column === 'id' && (sortOrder.ascending ? ' ▲' : ' ▼')}
                            </th>

                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => sortData('title')}
                            >
                                Title{sortOrder.column === 'title' && (sortOrder.ascending ? ' ▲' : ' ▼')}
                            </th>
  
                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => sortData('dateofDelivery')}
                            >
                                Date of Delivery{sortOrder.column === 'dateofDelivery' && (sortOrder.ascending ? ' ▲' : ' ▼')}
                            </th>


                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => sortData('description')}
                            >
                                Description{sortOrder.column === 'description' && (sortOrder.ascending ? ' ▲' : ' ▼')}
                            </th>


                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => sortData('provider')}
                            >
                                Provider{sortOrder.column === 'provider' && (sortOrder.ascending ? ' ▲' : ' ▼')}
                            </th>

                            <th
                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                                onClick={() => sortData('language')}
                            >
                                Language{sortOrder.column === 'language' && (sortOrder.ascending ? ' ▲' : ' ▼')}
                            </th>


                        </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                        {sortedData.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-100">
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{new Date(item.dateofDelivery).toLocaleString()}</td>
                            <td>{item.description}</td>
                            <td>{item.provider}</td>
                            <td>{item.language}</td>
                                <td>
                                    <div className="flex items-center space-x-2">
                                        <button
                                            className="px-3 py-2 text-sm text-white bg-green-500 rounded-full hover:bg-green-400 focus:outline-none"
                                            onClick={async () => {
                                                await onVerify(item.id);
                                                await loadUser().then((r) => (stateData = r.data));
                                                onClose();
                                                window.location.reload();
                                            }}
                                        >
                                            <FaCheckCircle />
                                        </button>
                                        <button
                                            className="px-3 py-2 text-sm text-white bg-red-500 rounded-full hover:bg-red-400 focus:outline-none"
                                            onClick={async () => {
                                                await onRefuse(item.id);
                                                await loadUser().then((r) => (stateData = r.data));
                                                onClose();
                                                window.location.reload();
                                            }}
                                        >
                                            <FaTimesCircle />
                                        </button>
                                        <button
                                            className="px-3 py-2 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-400 focus:outline-none"
                                            onClick={async () => {
                                                await onDelete(item.id);
                                                await loadUser().then((r) => (stateData = r.data));
                                                onClose();
                                                window.location.reload();
                                            }}
                                        >
                                            <FaTrashAlt />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <div className="my-4">
                        <label className="mr-2 font-medium text-gray-500 uppercase">Filter by status:</label>
                        <select
                            className="px-3 py-2 text-sm text-gray-500 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            value={filterStatus}
                            onChange={(e) => setFilterStatus(e.target.value)}
                        >
                            <option value="">All</option>
                            <option value="Pending">Pending</option>
                            <option value="Verified">Verified</option>
                            <option value="Invalid">Invalid</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

                            );
};

export default Modal;