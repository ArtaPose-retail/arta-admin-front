
import {
    Box,
    Grid,
} from "@mui/material";
import Title from "../UI/Title";
import PtoductSFilter from "./PtoductSFilter";
import SingleProduct from "./SingleProduct.jsx";
import { products, refrigeratingProduct } from "../../utils/data.jsx";
import { useSelector } from "react-redux";

function ProductsSection() {
    const { showRefrigrateItems } = useSelector((state) => state.product);

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
                <PtoductSFilter />
            </Box>
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
