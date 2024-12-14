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
import { FactorPageTable, checkTable } from "../../utils/data";
import moment from "jalali-moment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { styled } from "@mui/material/styles";
import Title from "../UI/Title";

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
                    {toPersian(row?.title)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.serial)}
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
                    {row?.bank}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {row?.checkNumber}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(
                        moment(row?.ckeckDate, "YYYY-MM-DD")
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
                    {toPersian(separateBy4(row?.ckeckCode))}
                </TableCell>
                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.price))}ریال
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
                            {row?.details.map((item, index) => (
                                <Fragment key={index}>
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
                                            دروجه:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                color: (theme) => theme.palette.darkBlue.main,
                                            }}
                                        >
                                            {item?.for}
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
                                            کدملی:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                color: (theme) => theme.palette.darkBlue.main,
                                            }}
                                        >
                                            {toPersian(item?.nCode)}
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
                                            وضیعت:
                                        </Typography>
                                        <Typography
                                            sx={{
                                                fontSize: "18px",
                                                fontWeight: 500,
                                                color: (theme) => theme.palette.darkBlue.main,
                                            }}
                                        >
                                            {item?.status}
                                        </Typography>
                                    </Box>
                                </Fragment>
                            ))}
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

                                <Button

                                    variant="outlined"
                                    sx={{
                                        px: 4,
                                    }}
                                >
                                    تصویر
                                </Button>
                                <Button

                                    variant="outlined"
                                    sx={{
                                        px: 4,
                                    }}
                                >
                                    جزئیات
                                </Button>
                                <Button

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

export default function CheckTable() {
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
                height: "75vh",
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
                                عنوان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                سریال
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                طرف معامله
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                بانک
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره چک
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ چک
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره صیادی
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ چک
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {checkTable?.map((row, index) => (
                            <Row key={index} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
