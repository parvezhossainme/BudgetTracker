import React, { useState, useEffect } from "react";
import CustomerSideBar from "./CustomerSideBar";

const CustomerStatement = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const toggleCollapse = () => setIsCollapsed(!isCollapsed);

    return (
        <div className="flex min-h-screen">
            <CustomerSideBar
                isCollapsed={isCollapsed}
                toggleCollapse={toggleCollapse}
            />
            <div className="flex-1 p-6">
                <MonthlyStatement />
            </div>
        </div>
    );
};

export default CustomerStatement;

const data = {
    January: [
        {
            shopName: "ABC Shop",
            date: "29 December 2024",
            area: "Banani",
            status: "Paid",
            amount: "5400",
        },
        {
            shopName: "ABC Shop",
            date: "28 December 2024",
            area: "Banani",
            status: "Not Paid",
            amount: "2000",
        },
        {
            shopName: "ABC Shop",
            date: "27 December 2024",
            area: "Banani",
            status: "Paid",
            amount: "400",
        },
    ],
    February: [
        {
            shopName: "DEF Shop",
            date: "10 February 2024",
            area: "Gulshan",
            status: "Paid",
            amount: "600",
        },
        {
            shopName: "DEF Shop",
            date: "12 February 2024",
            area: "Gulshan",
            status: "Not Paid",
            amount: "400",
        },
    ],
};

const rowsPerPage = 10;

const MonthlyStatement = () => {
    const [currentMonth, setCurrentMonth] = useState("January");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageData, setPageData] = useState([]);

    useEffect(() => {
        const monthData = data[currentMonth] || [];
        const start = (currentPage - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        setPageData(monthData.slice(start, end));
    }, [currentMonth, currentPage]);

    const handleMonthChange = (e) => {
        setCurrentMonth(e.target.value);
        setCurrentPage(1);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="min-h-screen bg-gray-100">
            <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">Selected:</h3>
                    <select
                        id="month-selector"
                        value={currentMonth}
                        onChange={handleMonthChange}
                        className="px-4 py-2 border rounded-lg">
                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select>
                </div>

                <table className="w-full bg-white rounded-lg shadow overflow-hidden">
                    <thead>
                        <tr className="bg-green-500 text-white">
                            <th className="px-4 py-2">Shop Name</th>
                            <th className="px-4 py-2">Date</th>
                            <th className="px-4 py-2">Area</th>
                            <th className="px-4 py-2">Status</th>
                            <th className="px-4 py-2">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {pageData.map((row, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{row.shopName}</td>
                                <td className="px-4 py-2">{row.date}</td>
                                <td className="px-4 py-2">{row.area}</td>
                                <td
                                    className={`px-4 py-2 font-bold ${
                                        row.status === "Paid"
                                            ? "text-green-500"
                                            : "text-red-500"
                                    }`}>
                                    {row.status}
                                </td>
                                <td className="px-4 py-2">{row.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="mt-4 flex justify-center space-x-2">
                    {Array.from({
                        length: Math.ceil(
                            (data[currentMonth] || []).length / rowsPerPage
                        ),
                    }).map((_, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 rounded-lg ${
                                i + 1 === currentPage
                                    ? "bg-green-500 text-white"
                                    : "bg-white border"
                            }`}
                            onClick={() => handlePageChange(i + 1)}>
                            {i + 1}
                        </button>
                    ))}
                </div>

                <a
                    href="#"
                    className="mt-6 inline-block bg-green-500 text-white px-6 py-2 rounded-lg">
                    BACK
                </a>
            </div>
        </div>
    );
};
