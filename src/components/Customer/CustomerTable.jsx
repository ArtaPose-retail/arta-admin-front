import { Box, Divider, Typography } from '@mui/material'
import React from 'react'
import fullLogo from "../../Assets/images/fullLogo.png"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { styled } from '@mui/material/styles';
import { toPersian } from "../../utils/setting.jsx";

const columns = [
    { id: "row", label: "ردیف", align: "center" },
    { id: "productName", label: "نام محصول", align: "center" },
    {
        id: "amont",
        label: " تعداد",

        align: "center",
    },
    {
        id: "weight",
        label: "وزن ناخالص",
        align: "center",
    },
    {
        label: "وزن خالص",
        id: "pureWeight",
        align: "center",
    },
    // {
    //     label: "فی محصول",
    //     id: "price",
    //     align: "center",
    // },
    {
        label: "قیمت محصول (ریال)",
        id: "Totalprice",
        align: "center",
    },
];


function createData(row, productName, amont, weight, pureWeight, Totalprice) {
    return { row, productName, amont, weight, pureWeight, Totalprice };
}

const rows = [
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),
    createData(1, "سیب قرمز", "۵۰ عدد", " ۱۵ کیلوگرم", "۱۵ کیلوگرم", "۴۵/۵۰۰/۰۰۰ ریال"),


];

function CustomerTable() {
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
        <Box>

            <Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", p: 1, px: 3 }}>
                    <img src={fullLogo} />
                    <Typography
                        sx={{ color: "#98A4B5", fontSize: "20px", fontWeight: 700 }}
                    >
                        WWW.ARTA-POS.COM
                    </Typography>

                </Box>
                <Divider variant="middle" />

                <Box>
                    <TableContainer sx={{ maxHeight: "75vh" }}>
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
                            {/* <Divider variant="middle" sx={{ my: 2 }} /> */}

                            <TableBody sx={{ mt: 1 }}>
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
            <Box sx={{ display: "flex", alignItems: "flex-end", m: 2, gap: "10px" }}>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.text.secondary,
                        color: (theme) => theme.palette.text.primary,
                        p: 1.5,
                        borderRadius: "12px",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    شناسه فاکتور: ۳۹۲۴۷-۲۸۳۶
                </Typography>
                <Typography
                    sx={{
                        bgcolor: (theme) => theme.palette.green.main,
                        color: (theme) => theme.palette.text.primary,
                        p: 1.5,
                        borderRadius: "12px",
                        fontSize: "18px",
                        fontWeight: 500,
                    }}
                >
                    جمع کل فاکتور: ۸۹/۰۰۰/۰۰۰ ریال
                </Typography>
            </Box>
        </Box>
    )
}

export default CustomerTable