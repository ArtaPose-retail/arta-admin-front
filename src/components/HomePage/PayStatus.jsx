import {
    Button,
    Divider,
    Fade,
    Grid,
    Popper,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import { separateBy3, toPersian, toastHandler } from "../../utils/setting";
import { Box } from "@mui/system";
import Title from "../UI/Title";
import PayStatusTable from "./PayStatusTable";
import { Check, Close, ExpandMore } from "@mui/icons-material";
import Input from "../UI/Input";
import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import {
    CalcOrders,
    resetPromoCode,
    setPromoCode,
} from "../../Redux/Slices/Actions/Order/Order";
import {
    AddPayment,
    setPaymentInfo,
} from "../../Redux/Slices/Actions/Payment/payment";

function PayStatus() {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [PosItem, setPositem] = React.useState(null);
    const dispatch = useDispatch();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? "transition-popper" : undefined;

    const { OrderPrice, promoCode, cardId } = useSelector((state) => state.Order);
    const { paymentBA, newPayment } = useSelector((state) => state.payment);

    const EnterAmount = (name, value, type) => {
        dispatch(
            setPaymentInfo({
                key: "amount",
                value: +value,
            })
        );
    };

    return (
        <Box
            sx={{
                ...center,
                width: "100%",
                flexDirection: "column",
                overflow: "hidden",
                "& hr": {
                    mx: 0.5,
                },
            }}
        >
            <Box
                sx={{
                    ...center,

                    bgcolor: (theme) => theme.palette.green.main,
                    width: "65%",
                    borderRadius: "8px",
                    color: (theme) => theme.palette.text.primary,
                    p: 1,
                    mt: 1,
                    gap: "15%",
                }}
            >
                <Typography
                    sx={{
                        color: (theme) => theme.palette.text.primary,
                        fontSize: "12px",
                        fontWeight: 700,
                    }}
                >
                    قابل پرداخت
                </Typography>
                <Box sx={{ ...center, gap: "2px" }}>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "20px",
                            fontWeight: 700,
                        }}
                    >
                        {/* {toPersian(separateBy3(OrderPrice.order_price ?? 0))} */}
                        {toPersian(separateBy3(OrderPrice.remaining_amount ? OrderPrice.remaining_amount : OrderPrice.order_price))}
                    </Typography>
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "10px",
                            fontWeight: 700,
                        }}
                    >
                        ریال
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ ...center, m: 0.5, gap: "10px", width: "65%" }}>
                <Input
                    name={"amount"}
                    hasText={true}
                    type={"number"}
                    onChange={EnterAmount}
                    value={newPayment?.amount}
                />
            </Box>
            <Box sx={{ ...center, gap: "15px", my: 1 }}>
                <Box
                    sx={{
                        ...center,
                        bgcolor: "#3A5DF0",
                        color: "white",
                        direction: "ltr",
                        height: "40px",
                        borderRadius: "12px",
                        p: 0.5,
                        gap: "5px",
                    }}
                >
                    <Typography
                        onClick={() => toastHandler("درخواست ارسال شد", "info")}
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            cursor: "pointer",
                        }}
                    >
                        {PosItem}
                    </Typography>
                    <Box
                        sx={{ borderLeft: "1px solid white", ...center, cursor: "pointer" }}
                        aria-describedby={id}
                        type="button"
                        onClick={handleClick}
                    >
                        <ExpandMore sx={{ fill: "white" }} />
                    </Box>
                    <Popper id={id} open={open} anchorEl={anchorEl} transition>
                        {({ TransitionProps }) => (
                            <Fade {...TransitionProps} timeout={350}>
                                <Box
                                    sx={{
                                        borderRadius: "12px",
                                        border: "1px solid gray",
                                        p: 1,
                                        bgcolor: "background.paper",
                                    }}
                                >
                                    {paymentBA &&
                                        paymentBA.map((item, index) => (
                                            <Typography
                                                key={index}
                                                sx={{
                                                    borderBottom: "1px solid gray",
                                                    p: 1,
                                                    cursor: "pointer",
                                                }}
                                                onClick={() => {

                                                    dispatch(
                                                        AddPayment({
                                                            method: 2,
                                                            orderId: cardId,
                                                            BAId: item?.bank_id,
                                                        })
                                                    );
                                                    setOpen(false);
                                                }}
                                            >
                                                {item?.bank_name?.name}-{item?.representer_pos_name}
                                            </Typography>
                                        ))}
                                </Box>
                            </Fade>
                        )}
                    </Popper>
                </Box>
                <Button
                    onClick={
                        () =>
                            dispatch(
                                AddPayment({
                                    method: 1,
                                    orderId: cardId,
                                    BAId: null,
                                })
                            )

                    }
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        color: (theme) => theme.palette.text.primary,
                        fontSize: "14px",
                        fontWeight: 400,
                        px: 4,
                    }}
                >
                    نقدی
                </Button>
                <Button
                    onClick={
                        () =>
                            dispatch(
                                AddPayment({
                                    method: 3,
                                    orderId: cardId,
                                    BAId: null,
                                })
                            )

                    }
                    variant="contained"
                    sx={{
                        bgcolor: (theme) => theme.palette.darkBlue.main,
                        color: (theme) => theme.palette.text.primary,
                        fontSize: "14px",
                        fontWeight: 400,
                    }}
                >
                    تخفیف
                </Button>
            </Box>
            <Title
                title={"عملیات"}
                Typoprops={{
                    color: (theme) => theme.palette.divider,
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "start",
                    width: "100%",
                }}
            />
            <Divider
                orientation="horizontal"
                variant="middle"
                flexItem
                sx={{ my: 1 }}
            />
            <Grid
                container
                spacing={2}
                sx={{ alignItems: "center", justifyContent: "center" }}
            >
                <Grid item xs={5}>
                    <Box sx={{ ...center, gap: "5px", justifyContent: "flex-start" }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                            مبلغ فاکتور:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.warning.main,
                            }}
                        >
                            {toPersian(separateBy3(OrderPrice?.order_price ?? 0))} ریال
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={7}>
                    <Box sx={{ ...center, justifyContent: "space-between", gap: "5px" }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                            کدتخفیف:
                        </Typography>
                        <TextField
                            value={promoCode}
                            onChange={(e) => dispatch(setPromoCode(e.target.value))}
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            InputProps={{
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    height: "40px",
                                },
                            }}
                            variant="outlined"
                        />
                        {promoCode && (
                            <Box sx={{ ...center }}>
                                <Close
                                    onClick={() => dispatch(resetPromoCode())}
                                    sx={{ fontSize: "20px", cursor: "pointer" }}
                                />

                                <Check
                                    onClick={() => dispatch(CalcOrders())}
                                    sx={{ fontSize: "20px" }}
                                />
                            </Box>
                        )}
                    </Box>
                </Grid>
            </Grid>
            <Grid
                container
                spacing={2}
                sx={{ alignItems: "center", justifyContent: "center" }}
            >
                <Grid item xs={12} sx={{ my: 1 }}>
                    <Box sx={{ ...center, gap: "5px", justifyContent: "flex-start" }}>
                        <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
                            تخفیف:
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: "12px",
                                fontWeight: 700,
                                color: (theme) => theme.palette.warning.main,
                            }}
                        >
                            {toPersian(separateBy3(OrderPrice?.calculated_discount ?? 0))}{" "}
                            ریال
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Title
                title={"تراکنش"}
                Typoprops={{
                    color: (theme) => theme.palette.divider,
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "start",
                    width: "100%",
                    mt: 1,
                }}
            />
            <Divider
                orientation="horizontal"
                variant="middle"
                flexItem
                sx={{ my: 1 }}
            />

            <PayStatusTable />
        </Box>
    );
}

export default PayStatus;
