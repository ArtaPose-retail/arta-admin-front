import {
    Box,
    Divider,
    InputAdornment,
    MenuItem,
    Select,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import Title from "../UI/Title";
import SearchIcon from "@mui/icons-material/Search";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { toPersian } from "../../utils/setting.jsx";
import { styled } from '@mui/material/styles';
import Input from "../UI/Input.jsx";



const columns = [
    { id: "row", label: "ردیف", minWidth: 1, align: "center" },
    { id: "price", label: "مبلغ(ریال)", minWidth: 170, align: "center" },
    {
        id: "transectionCode",
        label: "شماره تراکنش",
        minWidth: 100,
        align: "center",
    },
    {
        id: "date",
        label: "تاریخ و زمان",
        minWidth: 170,
        align: "center",
    },
    {
        label: "شرح حال",
        id: "description",
        minWidth: 170,
        align: "center",
    },
];

function createData(row, price, transectionCode, date, description) {
    return { row, price, transectionCode, date, description };
}

const rows = [
    createData(1, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),
    createData(2, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),
    createData(3, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),
    createData(4, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),
    createData(5, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),
    createData(6, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),
    createData(7, "1324171354", "3287263", " 1402/02/23", "خرید ۲کارتن موز"),

];
function TransectionsTable() {
    const [sort, setSort] = useState("");
    const sortHandler = (item) => {
        setSort(item);
    };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,

        },

        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <Box
            sx={{
                bgcolor: (theme) => theme.background.box,
                borderRadius: "18px",
                p: 2,
                display: "flex",
                flexDirection: "column",
                gap: "20px",
                mt: 2,
                height: "55vh",
                // overflowY: "scroll"
            }}
        >
            <Title
                title={"تراکنش ها"}
                Typoprops={{ fontSize: "18px", fontWeight: "bold" }}
            />
            <Box sx={{ display: "flex", gap: "15px" }}>
                <Input
                    height={"auto"}
                    hasIcon={true}
                    icon={"search"}
                    type={"text"}
                    placeholder="جستوجو کنید..."
                />

                <TextField
                    onChange={(e) => sortHandler(e.target.value)}

                    placeholder="   مرتب کن براساس تاریخ"
                    sx={{
                        overflow: 'hidden',
                        color: "black",
                        "& .MuiOutlinedInput-notchedOutline": {
                            borderColor: "white",
                            borderRadius: '18px',

                        },
                        "& .MuiNativeSelect-select": {
                            color: 'black',
                        },
                        borderRadius: '18px',
                        bgcolor: "#F2F2F2",
                    }}
                    select
                    SelectProps={{
                        native: true,
                    }}
                >
                    <option value="">
                        <Typography sx={{ fontSize: "12px", color: "black" }}>
                            مرتب کن براساس تاریخ
                        </Typography>
                    </option>

                    <option value={"upward"}>صعودی</option>
                    <option value={"downward"}>نزولی</option>

                </TextField>
            </Box>

            <Box sx={{}} >
                <TableContainer sx={{ maxHeight: 250 }}>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth, color: "black" }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody >
                            {rows.map((row, index) => {
                                return (
                                    <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column, index) => {
                                            const value = row[column.id];
                                            return (
                                                <StyledTableCell
                                                    sx={{ color: "black" }}
                                                    key={column.id}
                                                    align={column.align}
                                                >
                                                    {toPersian(value)}

                                                </StyledTableCell>
                                            );
                                        })}
                                    </StyledTableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Box>
    );
}

export default TransectionsTable;
