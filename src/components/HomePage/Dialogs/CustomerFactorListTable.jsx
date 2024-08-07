import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { toPersian, toastHandler } from "../../../utils/setting";
import moment from "jalali-moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box } from "@mui/material";
import { customersFactorList } from "../../../utils/data";

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

export default function CustomerFactorListTable() {

    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };
    return (
        <TableContainer sx={{ maxHeight: 350 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">ردیف</StyledTableCell>
                        <StyledTableCell align="center">طرف معامله</StyledTableCell>
                        <StyledTableCell align="center">نوع فاکتور</StyledTableCell>
                        <StyledTableCell align="center">شماره فاکتور</StyledTableCell>
                        <StyledTableCell align="center">تاریخ</StyledTableCell>
                        <StyledTableCell align="center">عملیات</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customersFactorList.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell width={"10%"} align="center">
                                {toPersian(index + 1)}
                            </StyledTableCell>
                            <StyledTableCell align="center">{item.name}</StyledTableCell>
                            <StyledTableCell align="center">
                                {item.factorType}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(item.factorNumber)}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(
                                    moment(new Date(), "YYYY-MM-DD")
                                        .locale("fa")
                                        .format("YYYY/MM/D")
                                )}
                            </StyledTableCell>
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
                                        sx={{ fill: (theme) => theme.palette.warning.main, cursor: "pointer" }}
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
