import { useState } from "react";
import {
    Box,
    Divider,
    Grid,
    InputAdornment,
    TextField,
} from "@mui/material";
import Title from "../UI/Title";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import QrCode2Icon from "@mui/icons-material/QrCode2";
import PtoductSFilter from "./PtoductSFilter";
import SingleProduct from "./SingleProduct.jsx";
import { products, refrigeratingProduct } from "../../utils/data";
import CloseIcon from "@mui/icons-material/Close";
import { useSelector } from "react-redux";
import NewProductParentDialog from "./Dialogs";
function ProductsSection() {
    const [showQRField, setShowQRField] = useState(false);
    const { showRefrigrateItems } = useSelector((state) => state.product);
    const showFieldHandler = () => {
        setShowQRField(!showQRField);
    };
    const center = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    return (
        <Box
            sx={{
                width: "100%",
                height: "100%",
                borderRadius: "18px",
                bgcolor: (theme) => theme.background.box,
                p: 1.5,
            }}
        >
            <Box sx={{ ...center, justifyContent: "space-between", mb: 1 }}>
                <Title
                    title={"محصولات"}
                    Typoprops={{
                        fontSize: "20px",
                        fontWeight: 500,
                        color: (theme) => theme.palette.text.card,
                    }}
                />

                <Box sx={{ ...center, gap: "10px" }}>
                    <MoreVertIcon fontSize="medium" />

                    {!showQRField ? (
                        <QrCode2Icon onClick={() => showFieldHandler()} sx={{ cursor: "pointer" }} />
                    ) : (
                        <TextField
                            sx={{
                                "& .MuiOutlinedInput-notchedOutline": {
                                    borderColor: "white",
                                },
                            }}
                            type="text"
                            id="input-with-icon-textfield"
                            placeholder="کد محصول"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment
                                        position="start"
                                        onClick={() => showFieldHandler()}
                                        sx={{ cursor: "pointer" }}
                                    >
                                        <CloseIcon
                                            sx={{ fill: (theme) => theme.palette.warning.main }}
                                        />
                                    </InputAdornment>
                                ),
                                style: {
                                    background: "#F2F2F2",
                                    color: "#000",
                                    direction: "ltr",
                                    height: "40px",
                                },
                            }}
                            variant="outlined"
                        />
                    )}
                    <Divider orientation="vertical" flexItem />
                    <NewProductParentDialog type={"add"} />
                </Box>
            </Box>
            <PtoductSFilter />
            <Grid
                container
                spacing={2}
                sx={{ mt: 1, overflowY: "scroll", height: "500px" }}
            >
                {(showRefrigrateItems ? refrigeratingProduct : products)?.map((item, index) => (
                    <Grid key={index} item xs={3} sx={{ mt: 1, p: 0.5 }}>
                        <SingleProduct data={item} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}

export default ProductsSection;
