import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { separateBy3, separateBy4, toPersian } from "../../utils/setting";
import { FactorPageTable } from "../../utils/data";
import moment from "jalali-moment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { styled } from "@mui/material/styles";
import Title from "../UI/Title";
import TransportD from "./TransportD";
import RegistrationCostDL from "./RegistrationCostDL";
import Input from "../UI/Input";

function Row(props) {
    const { row, index } = props;
    const [openCollaps, setOpenCollaps] = useState(false);

    const navigate = useNavigate();

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    return (
        <Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                        ...center,
                    }}
                >
                    <IconButton size="small" onClick={() => setOpenCollaps(!openCollaps)}>
                        {<KeyboardArrowDownIcon />}
                    </IconButton>
                    {toPersian(index + 1)}
                </TableCell>
                <TableCell
                    align="center"
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                >
                    {toPersian(row?.serialNumber)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.transactionName}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.factorType}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(
                        moment(row?.factorDate, "YYYY-MM-DD")
                            .locale("fa")
                            .format("YYYY/MM/D")
                    )}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row.factorNumer))}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {row?.driver}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {row?.vehicle}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(row.plate)}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(
                        moment(row?.date, "YYYY-MM-DD ")
                            .locale("fa")
                            .format("YYYY/MM/D - HH:mm")
                    )}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={12}>
                    <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                        <Box
                            sx={{
                                margin: 1,
                                ...center,
                                justifyContent: "flex-start",
                                gap: "15px",
                            }}
                        >
                            <Box
                                sx={{
                                    color: (theme) => theme.typography.color,
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "15px",
                                }}
                                gutterBottom
                                component="div"
                            >
                                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                                    قیمت سود:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        color: (theme) => theme.palette.darkBlue.main,
                                    }}
                                >
                                    {toPersian(separateBy3("320000"))}ریال
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: (theme) => theme.typography.color,
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "15px",
                                }}
                                gutterBottom
                                component="div"
                            >
                                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                                    درصد سود:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        color: (theme) => theme.palette.darkBlue.main,
                                    }}
                                >
                                    {toPersian("32")}٪
                                </Typography>
                            </Box>
                            <Box
                                sx={{
                                    color: (theme) => theme.typography.color,
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "15px",
                                }}
                                gutterBottom
                                component="div"
                            >
                                <Typography sx={{ fontSize: "16px", fontWeight: 500 }}>
                                    واحد عملیات:
                                </Typography>
                                <TransportD />
                                <Button
                                    onClick={() =>
                                        navigate(reactRouts.safi.main, {
                                            state: { key: row?.factorType },
                                        })
                                    }
                                    variant="outlined"
                                    sx={{
                                        px: 4,
                                    }}
                                >
                                    مشتریان
                                </Button>
                                <Button
                                    onClick={() =>
                                        navigate(reactRouts.safi.main, {
                                            state: { key: row?.factorType },
                                        })
                                    }
                                    variant="outlined"
                                    sx={{
                                        px: 4,
                                    }}
                                >
                                    اصلاح
                                </Button>
                                <Button
                                    onClick={() =>
                                        navigate(reactRouts.safi.main, {
                                            state: { key: row?.factorType },
                                        })
                                    }
                                    variant="outlined"
                                    sx={{
                                        px: 4,
                                        borderColor: (theme) => theme.palette.warning.main,
                                        color: (theme) => theme.palette.warning.main,
                                    }}
                                >
                                    حذف
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}

export default function KharidariTable() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
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
    return (
        <Box
            sx={{
                width: "100%",
                height: "30vh",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                ردیف
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                نام محصول
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تعداد
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                نوع بسته بندی
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                وزن ناخالص{" "}
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                وزن ظرف{" "}
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                وزن خالص
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                فی خرید
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                فی فروش
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                قیمت
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {FactorPageTable?.map((row, index) => (
                            <Row key={index} row={row} index={index} />
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
