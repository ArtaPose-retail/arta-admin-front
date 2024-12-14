import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Box, Button, Typography } from "@mui/material";
import { safiAmaniData } from "../../utils/data";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import Title from "../UI/Title";
import TransportD from "./TransportD";
import RegistrationCostDL from "./RegistrationCostDL";
import Input from "../UI/Input";

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

export default function Amanitable() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };
    return (
        <Box>
            <TableContainer sx={{ maxHeight: 200 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">ردیف</StyledTableCell>
                            <StyledTableCell align="center">نام محصول</StyledTableCell>
                            <StyledTableCell align="center">تعداد</StyledTableCell>
                            <StyledTableCell align="center">نوع بسته بندی</StyledTableCell>
                            <StyledTableCell align="center">وزن ناخالص</StyledTableCell>
                            <StyledTableCell align="center">وزن ظرف</StyledTableCell>
                            <StyledTableCell align="center">وزن خالص</StyledTableCell>
                            <StyledTableCell align="center">فی</StyledTableCell>
                            <StyledTableCell align="center">قیمت</StyledTableCell>
                            <StyledTableCell align="center">واحد عملیات</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {safiAmaniData?.map((item, index) => (
                            <StyledTableRow key={index}>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    width={"10%"}
                                    align="center"
                                >
                                    {toPersian(index + 1)}
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    align="center"
                                >
                                    {item.productName}
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    align="center"
                                >
                                    {toPersian(item.amount)}جعبه
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    align="center"
                                >
                                    {item.packageType}
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    align="center"
                                >
                                    {toPersian(item.pureWeight)}کیلوگرم
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    align="center"
                                >
                                    {toPersian(item.weight)}کیلوگرم
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.typography.color }}
                                    align="center"
                                >
                                    {toPersian(item.paletWeight)}کیلوگرم
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.primary.main }}
                                    align="center"
                                >
                                    {toPersian(separateBy3(item.fee))}ریال
                                </TableCell>
                                <TableCell
                                    sx={{ color: (theme) => theme.palette.primary.main }}
                                    align="center"
                                >
                                    {toPersian(separateBy3(item.price))}ریال
                                </TableCell>
                                <TableCell align="center">
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
                                        <Button
                                            variant="outlined"
                                            sx={{
                                                borderColor: "black",
                                                color: (theme) => theme.typography.color,
                                            }}
                                        >
                                            مشتریان
                                        </Button>
                                        <TransportD data={item} />
                                    </Box>
                                </TableCell>
                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "flex-end",
                    m: 2,
                    gap: "10px",
                    bgcolor: (theme) => theme.background.field,
                    borderRadius: "12px",
                }}
            >
                <StyledTableCell align="center">
                    جمع کل:{toPersian("6")}
                </StyledTableCell>

                <StyledTableCell align="center">
                    جمع کل تعداد:{toPersian("800")}عدد
                </StyledTableCell>

                <StyledTableCell align="center">
                    جمع کل و ناخالص:{toPersian("500")}کیلوگرم
                </StyledTableCell>
                <StyledTableCell align="center">
                    جمع کل و ظرف:{toPersian("240")}کیلوگرم
                </StyledTableCell>
                <StyledTableCell align="center">
                    جمع کل خالص:{toPersian("500")}کیلوگرم
                </StyledTableCell>
                <StyledTableCell align="center">
                    میانگین فی:{toPersian(separateBy3("500000"))}ریال
                </StyledTableCell>
                <StyledTableCell align="center">
                    جمع کل قیمت:{toPersian(separateBy3("7700000"))}ریال
                </StyledTableCell>
            </Box>

            <Box sx={{ p: 1 }}>
                <Title
                    title={"مخارج"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.typography.color,
                    }}
                />

                <Box sx={{ width: "100%", ...center, gap: "15px" }}>
                    <Input
                        placeholder={"درصد کمیسیون"}
                        type={"number"}
                        width={"10%"}
                        newstyle={{ width: "100%" }}
                    />
                    <Input
                        placeholder={"مبلغ کمیسیون"}
                        type={"number"}
                        width={"10%"}
                        newstyle={{ width: "100%" }}
                    />
                    <Input
                        placeholder={" کرایه"}
                        type={"number"}
                        width={"10%"}
                        newstyle={{ width: "100%" }}
                    />
                    <Input
                        placeholder={"باربری"}
                        type={"number"}
                        width={"10%"}
                        newstyle={{ width: "100%" }}
                    />
                    <RegistrationCostDL />
                    <Box
                        sx={{
                            ...center,
                            bgcolor: (theme) => theme.background.field,
                            p: 1,
                            borderRadius: "12px",
                            gap: "10px",

                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 500,
                                color: (theme) => theme.palette.disable.main,
                            }}
                        >
                            جمع کل:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "14px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.darkBlue.main,
                            }}
                        >
                            {toPersian(separateBy3("6000000"))}ریال
                        </Typography>
                    </Box>
                </Box>


            </Box>
        </Box>
    );
}
