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
import { Badge, Box, Typography } from "@mui/material";
import { customersDashbord, factorDTable } from "../../utils/data";
import VisibilityIcon from "@mui/icons-material/Visibility";
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
const center = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

export default function FactorDT(props) {
    return (
        <TableContainer sx={{ maxHeight: 350 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">طرف معامله</StyledTableCell>
                        <StyledTableCell align="center">وضعیت</StyledTableCell>
                        <StyledTableCell align="center"> تاریخ فاکتور</StyledTableCell>
                        <StyledTableCell align="center"> مبلغ</StyledTableCell>
                        <StyledTableCell align="center"> عملیات</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {factorDTable.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell align="center">{item.name}</StyledTableCell>
                            <StyledTableCell align="center" sx={{ ...center }}>
                                <Badge
                                    variant="dot"
                                    badgeContent={""}
                                    sx={{
                                        "& .MuiBadge-badge": {
                                            color: "red",
                                            backgroundColor:
                                                item?.status === "موفق"
                                                    ? "#7BDE8A"
                                                    : item?.status === "ناموفق"
                                                        ? "#EF2929"
                                                        : "#EF9429",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            bgcolor: (theme) => theme.palette.text.lightgray,
                                            borderRadius: "12px",
                                            width: "fit-Content",
                                            textAlign: "center",
                                            px: 3,
                                        }}
                                    >
                                        {item.status}
                                    </Typography>
                                </Badge>
                            </StyledTableCell>

                            <StyledTableCell align="center">
                                {" "}
                                {toPersian(
                                    moment(item.date, "YYYY-MM-DD")
                                        .locale("fa")
                                        .format("YYYY/MM/D")
                                )}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(separateBy3(item.price))}ریال
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                <VisibilityIcon />
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
