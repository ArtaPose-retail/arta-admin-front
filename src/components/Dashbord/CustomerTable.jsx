import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { separateBy3, toPersian } from "../../utils/setting";
import moment from "jalali-moment";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Typography } from "@mui/material";
import { customersDashbord } from "../../utils/data";

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

export default function CustomerTable() {
    return (
        <TableContainer sx={{ maxHeight: 200 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">مشتری</StyledTableCell>
                        <StyledTableCell align="center">وضعیت</StyledTableCell>
                        <StyledTableCell align="center">مانده حساب</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {customersDashbord.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center">
                                <Typography
                                    sx={{
                                        fontSize: "14px",
                                        fontWeight: 400,
                                        color: (theme) => theme.palette.text.color,
                                    }}
                                >
                                    {item.name}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "10px",
                                        fontWeight: 400,
                                        color: (theme) => theme.palette.text.color,
                                    }}
                                >
                                    {item.mobile}
                                </Typography>
                            </StyledTableCell>

                            <StyledTableCell align="center">{item.status}</StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(separateBy3(item.remain))}
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
