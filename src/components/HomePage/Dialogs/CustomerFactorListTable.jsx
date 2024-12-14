import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { persianDate, toPersian } from "../../../utils/setting";

import { useSelector } from "react-redux";
import { NoItem } from "../../UI/NoItem";

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
    const { factorList } = useSelector(state => state.factorPage)

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

                    </TableRow>
                </TableHead>
                <TableBody>
                    {factorList.length > 0 ? factorList.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell width={"10%"} align="center">
                                {toPersian(index + 1)}
                            </StyledTableCell>
                            <StyledTableCell align="center">{item?.cust_fullname}</StyledTableCell>
                            <StyledTableCell align="center">
                                {item?.order_type_id
                                    ? item?.order_type_id == 1
                                        ? "خریداری"
                                        : "امانی"
                                    : "-"}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {item?.order_public_date ? persianDate(item?.order_public_date) : "-"}
                            </StyledTableCell>
                            <StyledTableCell align="center">
                                {toPersian(item?.orderpublicid ?? 0)}
                            </StyledTableCell>

                        </StyledTableRow>
                    )) : <NoItem />}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
