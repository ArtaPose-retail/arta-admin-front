import { Fragment, useEffect, useState } from "react";
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
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { persianDate, persianTime, separateBy3, toPersian, toastHandler } from "../../utils/setting";
import moment from "jalali-moment";
import { useDispatch, useSelector } from "react-redux";
import { NoItem } from "../UI/NoItem";
import { center } from "../../styles/theme";
import { OrderPayList } from "../../Redux/Slices/Actions/Payment/payment";
import { CalcOrders } from "../../Redux/Slices/Actions/Order/Order";


function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const deleteBtn = () => {
        toastHandler("ایتم مورد  نظر حذف شد", "warning");
    };

    return (
        <Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>

                <TableCell
                    align="center"
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500, ...center }}
                >
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {row?.method_id == 1 ? "نقدی" : row?.method_id == 2 ? "پوز" : "تخفیف"}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.public_id ?? 0)}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.amount ?? 0))}ریال
                </TableCell>

                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(persianTime(row?.updated_at ?? 0))}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(persianDate(row?.updated_at ?? 0))}
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Box
                                sx={{ color: (theme) => theme.palette.disable.main, ...center, justifyContent: "flex-start", gap: "15px" }}

                                gutterBottom
                                component="div"
                            >
                                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                    عملیات:
                                </Typography>
                                {/* <EditIcon fontSize="small" /> */}
                                <DeleteOutlineIcon
                                    fontSize="small"
                                    onClick={() => deleteBtn()}
                                    sx={{ fill: (theme) => theme.palette.warning.main, cursor: "pointer" }}
                                />
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </Fragment>
    );
}


export default function CollapsibleTable() {

    const { paymentOrderList, updatePay } = useSelector(state => state.payment)
    const { cardId } = useSelector(state => state.Order)
    const dispath = useDispatch()

    useEffect(() => {
        if (cardId != 0) {

            dispath(OrderPayList(cardId))
            dispath(CalcOrders(cardId))
        }
    }, [updatePay])
    return (
        <Box
            sx={{
                width: "100%",
                height: "190px",
                overflowY: "scroll",
                overflowX: "hidden",
            }}
        >
            {paymentOrderList?.length > 0 ? <TableContainer>
                <Table aria-label="collapsible table">
                    <TableHead>
                        <TableRow>

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
                                شماره تراکنش
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                زمان
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                تاریخ
                            </TableCell>
                            {/* <TableCell sx={{ color: theme => theme.palette.disable.main }} align="center">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paymentOrderList.map((row, index) => (
                            <Row key={index} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
                :
                <NoItem />
            }
        </Box>
    );
}
