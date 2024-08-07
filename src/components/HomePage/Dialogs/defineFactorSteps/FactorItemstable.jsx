import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import moment from "jalali-moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import {
    FactorSellitemstable,
    customersFactorList,
} from "../../../../utils/data";
import { toPersian, toastHandler } from "../../../../utils/setting";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        color: theme.palette.common.black,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        color: theme.palette.common.black,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));

export default function FactorItemstable({ height }) {
    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };
    return (
        <TableContainer sx={{ maxHeight: height }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ردیف</StyledTableCell>
                        <StyledTableCell align="center">نوع محصول</StyledTableCell>
                        <StyledTableCell align="center">نام نمایشی</StyledTableCell>
                        <StyledTableCell align="center">فی خرید</StyledTableCell>
                        <StyledTableCell align="center">فی فروش</StyledTableCell>
                        <StyledTableCell align="center">وزن ناخالص</StyledTableCell>
                        <StyledTableCell align="center">نوع بسته‌بندی</StyledTableCell>
                        <StyledTableCell align="center">تعداد</StyledTableCell>
                        <StyledTableCell align="center">عملیات</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {FactorSellitemstable.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell width={"10%"} align="center">
                                {toPersian(index + 1)}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item.productName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item.displayName}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(item.purchaseFee)}ریال
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(item.sellFee)}ریال
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(item.pureWeight)}کیلوگرم
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item.packageType}
                            </StyledTableCell>
                            <StyledTableCell align="center">{item.amount}عدد</StyledTableCell>
                            <StyledTableCell align="center">
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: "10px",
                                    }}
                                >
                                    <EditIcon />
                                    <DeleteOutlineIcon
                                        onClick={() => deleteBtn()}
                                        sx={{
                                            fill: (theme) => theme.palette.warning.main,
                                            cursor: "pointer",
                                        }}
                                    />
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}