import { Fragment, useState } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
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
import { FactorPageTable, FactorPageTablemain } from "../../utils/data";
import moment from "jalali-moment";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";

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
                    {toPersian(row.factorNumer)}
                </TableCell>


                <TableCell
                    sx={{
                        color: (theme) => theme.typography.color,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row.amount))}

                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
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
                                    وضیعت:
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "18px",
                                        fontWeight: 500,
                                        color: (theme) =>
                                            row?.status === "open"
                                                ? theme.palette.warning.main
                                                : theme.palette.green.main,
                                    }}
                                >
                                    {row.status === "open" ? "تسویه نشده" : "تسویه شده"}
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
                                <Button
                                    onClick={() =>
                                        navigate(reactRouts.safi.main, {
                                            state: { key: row?.factorType },
                                        })
                                    }
                                    variant="contained"
                                    sx={{
                                        px: 4,
                                        bgcolor: (theme) => theme.palette.darkBlue.main,
                                        color: (theme) => theme.palette.text.primary,
                                    }}
                                >
                                    جزئیات
                                </Button>
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}

export default function FactorTable() {
    return (
        <Box
            sx={{
                width: "100%",
                height: "78%",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            <TableContainer>
                <Table aria-label="collapsible table">
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
                                نوع فاکتور
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ فاکتور
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                شماره فاکتور
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ فاکتور
                            </TableCell>



                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {FactorPageTablemain?.map((row, index) => (
                            <Row key={index} row={row} index={index} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
