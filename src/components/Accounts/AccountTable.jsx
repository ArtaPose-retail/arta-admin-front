import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import { Box, Button, Checkbox } from "@mui/material";
import { accountstable } from "../../utils/data";
import { separateBy3, toPersian } from "../../utils/setting";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {},
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
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

export default function AccountTable({ data }) {
    const navigate = useNavigate();
    return (
        <TableContainer sx={{ maxHeight: 530 }}>
            <Table stickyHeader aria-label="sticky table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.palette.disable.main }}
                            align="center"
                        >
                            <Checkbox
                                color="primary"
                            // checked={isItemSelected}
                            // inputProps={{
                            //     "aria-labelledby": labelId
                            // }}
                            />
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            ردیف
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            شناسه طرف معامله
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            نام طرف معامله
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            شماره تماس
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            مانده حساب
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            عنوان مانده
                        </StyledTableCell>
                        <StyledTableCell
                            sx={{ color: (theme) => theme.typography.color }}
                            align="center"
                        >
                            واحد عملیات
                        </StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data?.map((item, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                <Checkbox
                                    color="primary"
                                // checked={isItemSelected}
                                // inputProps={{
                                //     "aria-labelledby": labelId
                                // }}
                                />
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.typography.color }}
                                width={"10%"}
                                align="center"
                            >
                                {toPersian(index + 1)}
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    color: (theme) => theme.palette.darkBlue.main,
                                    fontWeight: 500,
                                }}
                                align="center"
                            >
                                {toPersian(item?.ID ?? 0)}
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.typography.color }}
                                align="center"
                            >
                                {item?.Fname}-{item?.Lname}
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.palette.darkBlue.main }}
                                align="center"
                            >
                                {toPersian(item?.Phone1 ?? 0)}
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{
                                    color: (theme) => theme.palette.darkBlue.main,
                                    fontWeight: 500,
                                }}
                                align="center"
                            >
                                {toPersian(separateBy3(item?.Total ?? 0))}ریال
                            </StyledTableCell>
                            <StyledTableCell
                                sx={{ color: (theme) => theme.typography.color }}
                                align="center"
                            >
                                {item?.Status}
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
                                    <Button variant="outlined">ارسال پیام</Button>
                                    <Button
                                        onClick={() => navigate(reactRouts.accounts.details)}
                                        variant="outlined"
                                    >
                                        جزئیات
                                    </Button>
                                </Box>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
