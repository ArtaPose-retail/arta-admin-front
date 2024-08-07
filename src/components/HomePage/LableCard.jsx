import { useState } from "react";
import { useNavigate } from "react-router-dom";
import reactRouts from "../../utils/reactRouts";
import { OldFactor } from "../../utils/data";
import AddIcon from "@mui/icons-material/Add";
import SingleLable from "./SingleLable";
import { Box, Typography } from "@mui/material";

function LableCard() {
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const navigate = useNavigate();

    const addAcount = () => {
        navigate(reactRouts.banking.addcart);
    };

    const [open, setOpen] = useState(false);

    const showDialoghandler = () => {
        setOpen(true);
        console.log("here", open);
    };
    const handlerCloseDialog = () => {
        setOpen(false);
        console.log("here", open);
    };

    const [selectedIndex, setSelectedIndex] = useState(-1);

    const handleCardSelect = (index) => {
        setSelectedIndex(index);
    };

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
                {OldFactor.map((item, index) => (
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
