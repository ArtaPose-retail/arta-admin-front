import { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SingleLable from "./SingleLable";
import { Box, Typography } from "@mui/material";
import { center } from "../../styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, OrderList } from "../../Redux/Slices/Actions/Order/Order";

function LableCard() {
    const dispatch = useDispatch();
    const { cardId } = useSelector(state => state.Order)
    const [selectedIndex, setSelectedIndex] = useState(cardId ?? -1);
    const { orderList, update } = useSelector(state => state.Order)
    const handleCardSelect = (index) => {
        setSelectedIndex(index);
    };

    useEffect(() => {
        dispatch(OrderList());
    }, [update]);

    return (
        <Box sx={{ width: "100wh", display: "flex", overflowX: "scroll" }}>
            <Box
                sx={{
                    display: "flex",
                    gap: "15px",
                    p: 2,
                }}
            >
                <Box
                    onClick={() => dispatch(addOrder())}
                    sx={{
                        bgcolor: (theme) => theme.palette.text.secondary,
                        borderRadius: "18px",
                        width: "90px",
                        height: "87px",
                        ...center,
                        flexDirection: "column",
                        gap: "10px",
                        cursor: "pointer",
                        ml: 2,
                    }}
                >
                    <AddIcon sx={{ fill: (theme) => theme.palette.text.primary }} />
                    <Typography
                        sx={{
                            color: (theme) => theme.palette.text.primary,
                            fontSize: "12px",
                            fontWeight: 500,
                        }}
                    >
                        فاکتور جدید
                    </Typography>
                </Box>
                {orderList.slice().reverse().map((item, index) => (
                    <SingleLable
                        item={item}
                        index={index}
                        key={index}
                        selectedIndex={selectedIndex}
                        onCardSelect={handleCardSelect}
                    />
                ))}
            </Box>
        </Box>
    );
}

export default LableCard;
