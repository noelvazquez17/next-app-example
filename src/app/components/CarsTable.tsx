"use client"
import React, { useState } from "react";
import {
    Table,
    TableHeader,
    TableColumn,
    TableBody,
    TableRow,
    TableCell,
    Input,
    Button,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Chip,
    Pagination,
    Selection,
    ChipProps,
    SortDescriptor,
    Spinner
} from "@nextui-org/react";
import { columns, statusOptions, Car } from "./data";

import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController,
} from 'chart.js';

ChartJS.register(
    LinearScale,
    CategoryScale,
    BarElement,
    PointElement,
    LineElement,
    Legend,
    Tooltip,
    LineController,
    BarController
);

import { Bar } from 'react-chartjs-2';
// import { toast } from 'react-hot-toast'


const statusColorMap: Record<string, ChipProps["color"]> = {
    available: "success",
    sold: "danger",
    pending: "warning",
};

const INITIAL_VISIBLE_COLUMNS = ["make", "model", "year", "price", "status"];

export default function CarsTable() {
    const [filterValue, setFilterValue] = React.useState("");
    const [selectedKeys, setSelectedKeys] = React.useState<Selection>(new Set([]));
    const [visibleColumns, setVisibleColumns] = React.useState<Selection>(new Set(INITIAL_VISIBLE_COLUMNS));
    const [statusFilter, setStatusFilter] = React.useState<Selection>("all");
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [cars, setCars] = useState<Car[]>([]);
    const [isLoad, setIsLoad] = useState(true);
    const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
        column: "price",
        direction: "descending",
    });

    const [page, setPage] = React.useState(1);

    const hasSearchFilter = Boolean(filterValue);

    const headerColumns = React.useMemo(() => {
        if (visibleColumns === "all") return columns;

        return columns.filter((column) => Array.from(visibleColumns).includes(column.uid));
    }, [visibleColumns]);

    const getCars = async () => {
        const response = await (await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cars/`)).json()
        setCars(response)
        setIsLoad(false)
    }


    const filteredItems = React.useMemo(() => {
        let filteredCars = [...cars];

        if (hasSearchFilter) {
            filteredCars = filteredCars.filter((car) =>
                car.make.toLowerCase().includes(filterValue.toLowerCase()),
            );
        }
        if (statusFilter !== "all" && Array.from(statusFilter).length !== statusOptions.length) {
            filteredCars = filteredCars.filter((user) =>
                Array.from(statusFilter).includes(user.status),
            );
        }

        return filteredCars;
    }, [cars, filterValue, statusFilter]);

    const pages = Math.ceil(filteredItems.length / rowsPerPage);

    const items = React.useMemo(() => {
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;

        return filteredItems.slice(start, end);
    }, [page, filteredItems, rowsPerPage]);

    const sortedItems = React.useMemo(() => {
        return [...items].sort((a: Car, b: Car) => {
            const first = a[sortDescriptor.column as keyof Car] as number;
            const second = b[sortDescriptor.column as keyof Car] as number;
            const cmp = first < second ? -1 : first > second ? 1 : 0;

            return sortDescriptor.direction === "descending" ? -cmp : cmp;
        });
    }, [sortDescriptor, items]);

    const renderCell = React.useCallback((car: Car, columnKey: React.Key) => {
        const cellValue = car[columnKey as keyof Car];

        switch (columnKey) {
            case "status":
                return (
                    <Chip className="capitalize" color={statusColorMap[car.status]} size="sm" variant="flat">
                        {cellValue}
                    </Chip>
                );
            case "price":
                return `$${cellValue}`;
            default:
                return cellValue;
        }
    }, []);

    

    const onNextPage = React.useCallback(() => {
        if (page < pages) {
            setPage(page + 1);
        }
    }, [page, pages]);

    const onPreviousPage = React.useCallback(() => {
        if (page > 1) {
            setPage(page - 1);
        }
    }, [page]);

    

    // const updateBackend = async (id: number, columnKey: string, newValue: string | number) => {
    //     try {
    //         const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cars/${id}`, {
    //             method: "PUT",
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //             body: JSON.stringify({ [columnKey]: newValue }),
    //         });
    //         if (response.ok) {
    //             setCars((prevCars) =>
    //                 prevCars.map((car) =>
    //                     car.id === id ? { ...car, [columnKey]: newValue } : car
    //                 )
    //             );
    //         } else {
    //             console.error("Failed to update the car");
    //         }
    //     } catch (error) {
    //         console.error("An error occurred:", error);
    //     }
    // };


    const onRowsPerPageChange = React.useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
        setRowsPerPage(Number(e.target.value));
        setPage(1);
    }, []);

    const onSearchChange = React.useCallback((value?: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const onClear = React.useCallback(() => {
        setFilterValue("")
        setPage(1)
    }, [])

    const topContent = React.useMemo(() => {
        return (
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable
                        className="w-full sm:max-w-[44%]"
                        placeholder="Search by make..."
                        startContent={
                            <span className="material-symbols-outlined">search</span>
                        }
                        value={filterValue}
                        onClear={() => onClear()}
                        onValueChange={onSearchChange}
                    />
                    <div className="flex gap-3">
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                }
                                    variant="flat">
                                    Status
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={statusFilter}
                                selectionMode="multiple"
                                onSelectionChange={setStatusFilter}
                            >
                                {statusOptions.map((status) => (
                                    <DropdownItem key={status.uid} className="capitalize">
                                        {status.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown>
                            <DropdownTrigger className="hidden sm:flex">
                                <Button endContent={
                                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                                } variant="flat">
                                    Columns
                                </Button>
                            </DropdownTrigger>
                            <DropdownMenu
                                disallowEmptySelection
                                aria-label="Table Columns"
                                closeOnSelect={false}
                                selectedKeys={visibleColumns}
                                selectionMode="multiple"
                                onSelectionChange={setVisibleColumns}
                            >
                                {columns.map((column) => (
                                    <DropdownItem key={column.uid} className="capitalize">
                                        {column.name}
                                    </DropdownItem>
                                ))}
                            </DropdownMenu>
                        </Dropdown>
                        <Button color="primary" endContent={
                            <span className="material-symbols-outlined">add</span>
                        }>
                            Add New
                        </Button>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-default-400 text-small">Total {cars.length} cars</span>
                    <label className="flex items-center text-default-400 text-small">
                        Rows per page:
                        <select
                            className="bg-transparent outline-none text-default-400 text-small"
                            onChange={onRowsPerPageChange}
                        >
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="15">15</option>
                        </select>
                    </label>
                </div>
            </div>
        );
    }, [filterValue, onSearchChange, statusFilter, visibleColumns, cars.length, onRowsPerPageChange, onClear]);

    const bottomContent = React.useMemo(() => {
        return (
            <div className="py-2 px-2 flex justify-between items-center">
                <span className="w-[30%] text-small text-default-400">
                    {selectedKeys === "all"
                        ? "All items selected"
                        : `${selectedKeys.size} of ${filteredItems.length} selected`}
                </span>
                <Pagination
                    isCompact
                    showControls
                    showShadow
                    color="primary"
                    page={page}
                    total={pages}
                    onChange={setPage}
                />
                <div className="hidden sm:flex w-[30%] justify-end gap-2">
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onPreviousPage}>
                        Previous
                    </Button>
                    <Button isDisabled={pages === 1} size="sm" variant="flat" onPress={onNextPage}>
                        Next
                    </Button>
                </div>
            </div>
        );
    }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

    const ChartBar = () => {
        const labels = ['Sold', 'Pending', 'Available'];

        const data = [filteredItems.filter((car) => car.status === 'sold').length, filteredItems.filter((car) => car.status === 'pending').length, filteredItems.filter((car) => car.status === 'available').length];
        const chartData = {
            labels: labels,
            datasets: [
                {
                    label: 'Cars',
                    data: data,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(23, 201, 100, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(23, 201, 100, 1)'
                    ],
                    borderWidth: 1,
                },
            ],
        };
        return <Bar data={chartData} />;
    }

    React.useEffect(() => {
        getCars()
    }, [])

    return (
        <div className="flex flex-col gap-4 p-4">
            <Table
                aria-label="Example table with custom cells, pagination and sorting"
                isHeaderSticky
                bottomContent={bottomContent}
                bottomContentPlacement="outside"
                classNames={{
                    wrapper: "max-h-[382px]",
                }}
                selectedKeys={selectedKeys}
                // selectionMode="multiple"
                sortDescriptor={sortDescriptor}
                topContent={topContent}
                topContentPlacement="outside"
                onSelectionChange={setSelectedKeys}
                onSortChange={setSortDescriptor}
            >
                <TableHeader columns={headerColumns}>
                    {(column) => (
                        <TableColumn
                            key={column.uid}
                            // align={column.uid === "actions" ? "center" : "start"}
                            allowsSorting={column.sortable}
                        >
                            {column.name}
                        </TableColumn>
                    )}
                </TableHeader>
                <TableBody emptyContent={isLoad ? "Loading cars..." : "No cars found"} items={sortedItems} loadingContent={<Spinner />} isLoading={isLoad}>

                    {(item) => (
                        <TableRow key={item.id}>
                            {(columnKey) => <TableCell>{renderCell(item, columnKey)}</TableCell>}
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="w-1/2 justify-start">
                <ChartBar />
            </div>
        </div>
    );
}
