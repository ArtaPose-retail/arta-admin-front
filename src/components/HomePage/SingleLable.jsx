import { Badge, Box, Typography } from "@mui/material";
import { persianDate, separateBy3, toPersian } from "../../utils/setting";

import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { CalcOrders, getCardId, getCardInfo, SingleOrderProds } from "../../Redux/Slices/Actions/Order/Order";
import { OrderPayList } from "../../Redux/Slices/Actions/Payment/payment";

function SingleLable({ item, index, selectedIndex, onCardSelect }) {
    const dispatch = useDispatch()
    const isSelected = index === selectedIndex;
    const handleCardSelect = (id) => {
        onCardSelect(index);
        dispatch(getCardId(id))
        dispatch(SingleOrderProds(id))
        dispatch(getCardInfo(item))
        dispatch(CalcOrders(id));
        dispatch(OrderPayList(id))
        dispatch(
            setPaymentInfo({
                key: "order_id",
                value: id,
            })
        )


    };
    const { OrderPrice } = useSelector((state) => state.Order)


    return (
        <Box>
            <Badge
                badgeContent={index + 1}
                sx={{
                    "& .MuiBadge-badge": {
                        fontSize: "14px",
                        color: (theme) => theme.palette.text.primary,
                        height: "32px",
                        width: "32px",
                        borderRadius: "50%",
                        bgcolor: theme => isSelected ? "green" : theme.palette.darkBlue.main,
                    },
                }}
            >
                <Box
                    onClick={() => handleCardSelect(item.id)}
                    sx={{
                        boxShadow: " 0px 4px 40px 0px rgba(0, 0, 0, 0.08)",
                        borderRadius: "12px",
                        width: "194px",
                        height: "87px",
                        p: 1,
                        mx: 1,
                        cursor: "pointer",
                        bgcolor: theme => isSelected ? theme.palette.darkBlue.main : theme.background.box,
                        "&:hover": {
                            bgcolor: theme => isSelected ? theme.palette.darkBlue.main : theme.palette.darkBlue.main,
                        },
                    }}
                >
                    <Box
                        sx={{
                            ...center,
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                        }}
                    >
                        <Box
                            sx={{
                                ...center,
                                flexDirection: "column",
                                gap: "5px",
                            }}
                        >
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "14px",
                                    fontWeight: 500,
                                    color: (theme) => (isSelected ? theme.palette.text.primary : ""),
                                }}
                            >
                                {item?.cust_fullname}
                            </Typography>
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "10px",
                                    fontWeight: "regular",
                                    color: (theme) =>
                                        isSelected ? theme.palette.text.primary : theme.palette.divider,
                                }}
                            >
                                شماره فاکتور: {toPersian(item?.orderpublicid ?? 0)}
                            </Typography>
                        </Box>
                        <Box
                            sx={{
                                ...center,
                                fontSize: "14px",
                                fontWeight: 500,
                                justifyContent: "space-between",
                                width: "100%",
                            }}
                        >
                            <Box
                                sx={{
                                    ...center,
                                }}
                            >
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "10px",
                                        fontWeight: 500,
                                        color: (theme) =>
                                            isSelected
                                                ? theme.palette.text.primary
                                                : theme.palette.divider,
                                    }}
                                >
                                    مبلغ:
                                </Typography>
                                <Typography
                                    sx={{
                                        ...center,
                                        fontSize: "10px",
                                        fontWeight: "regular",
                                        color: (theme) =>
                                            isSelected
                                                ? theme.palette.text.primary
                                                : theme.palette.divider,
                                    }}
                                >
                                    {toPersian(separateBy3(OrderPrice?.order_price ?? 0))}
                                </Typography>
                            </Box>
                            <Typography
                                sx={{
                                    ...center,
                                    fontSize: "10px",
                                    fontWeight: 500,
                                    color: (theme) =>
                                        isSelected ? theme.palette.text.primary : theme.palette.divider,
                                }}
                            >
                                {persianDate(item?.created_at)}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Badge>
        </Box>
    );
}

export default SingleLable;
