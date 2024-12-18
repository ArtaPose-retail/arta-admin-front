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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import ProductDetails from "./Dialogs/ProductDetails";
import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { NoItem } from "../UI/NoItem";
import { DeleteOrderItem, SingleOrderProds } from "../../Redux/Slices/Actions/Order/Order";

function Row(props) {
    const { row, deleteProd } = props;
    const [openCollaps, setOpenCollaps] = useState(false);

    const [open, setOpen] = useState(false);

    const showDialoghandler = () => {
        setOpen(true);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
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
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpenCollaps(!openCollaps)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                    {row?.Title}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(row?.quantity ?? 0)}
                    {row?.IsBulk == true ? "عدد" : "کیلوگرم"}
                </TableCell>
                <TableCell
                    sx={{ color: (theme) => theme.typography.color, fontWeight: 500 }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.unitprice ?? 0))}
                    ریال
                </TableCell>

                <TableCell
                    sx={{
                        color: (theme) => theme.palette.darkBlue.main,
                        fontWeight: 500,
                    }}
                    align="center"
                >
                    {toPersian(separateBy3(row?.finalprice ?? 0))}
                    ریال
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={openCollaps} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Box
                                sx={{
                                    color: (theme) => theme.palette.disable.main,
                                    ...center,
                                    justifyContent: "flex-start",
                                    gap: "15px",
                                }}
                                gutterBottom
                                component="div"
                            >
                                <Typography sx={{ fontSize: "18px", fontWeight: 500 }}>
                                    عملیات:
                                </Typography>
                                {/* <EditIcon fontSize="small" onClick={showDialoghandler} /> */}
                                <DeleteOutlineIcon
                                    onClick={() => deleteProd(row?.id)}
                                    fontSize="small"
                                    sx={{
                                        fill: (theme) => theme.palette.warning.main,
                                        cursor: "pointer",
                                    }}
                                />
                            </Box>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
            <ProductDetails
                iteminfo={row.details}
                status={open}
                handlerCloseDialog={handlerCloseDialog}
            />
        </Fragment>
    );
}

export default function CustomerFactorTable() {
    const { OrderProductList, cardId, update } = useSelector((state) => state.Order);
    const dispatch = useDispatch();
    const deleteProd = (prodId) => {
        dispatch(DeleteOrderItem({ order_id: cardId, op_id: prodId }))
    }

    useEffect(() => {
        dispatch(SingleOrderProds(cardId))
    }, [update])
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
                                نام محصول
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                وزن/تعداد
                            </TableCell>
                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                فی
                            </TableCell>

                            <TableCell
                                sx={{ color: (theme) => theme.palette.disable.main }}
                                align="center"
                            >
                                مبلغ نهایی
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {OrderProductList?.length > 0 ? (
                            OrderProductList?.map((row, index) => (
                                <Row key={index} row={row} deleteProd={deleteProd} />
                            ))
                        ) : (
                            <NoItem />
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
